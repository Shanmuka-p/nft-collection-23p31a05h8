const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NftCollection", function () {
    let NftCollection;
    let nft;
    let owner, addr1, addr2;

    beforeEach(async function () {
        // Get the ContractFactory and Signers
        [owner, addr1, addr2] = await ethers.getSigners();
        const NftCollectionFactory = await ethers.getContractFactory("NftCollection");

        // Deploy contract with a base URI and initial owner
        nft = await NftCollectionFactory.deploy("https://api.mynft.com/metadata/", owner.address);
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await nft.owner()).to.equal(owner.address);
        });

        it("Should have 0 total supply initially", async function () {
            expect(await nft.totalSupply()).to.equal(0);
        });
    });

    describe("Minting Logic", function () {
        it("Should allow owner to mint within limit", async function () {
            await nft.safeMint(addr1.address);
            expect(await nft.totalSupply()).to.equal(1);
            expect(await nft.ownerOf(1)).to.equal(addr1.address);
        });

        it("Should revert if non-owner tries to mint", async function () {
            // Connect as addr1 (not owner) and try to mint
            await expect(
                nft.connect(addr1).safeMint(addr1.address)
            ).to.be.revertedWithCustomError(nft, "OwnableUnauthorizedAccount");
        });

        it("Should correctly construct Token URI", async function () {
            await nft.safeMint(addr1.address);
            // Requirement: Base URI + Token ID
            expect(await nft.tokenURI(1)).to.equal("https://api.mynft.com/metadata/1");
        });
    });

    describe("Transfers", function () {
        it("Should transfer tokens between accounts", async function () {
            await nft.safeMint(owner.address); // Mint ID 1 to owner

            // Transfer from owner to addr1
            await nft.transferFrom(owner.address, addr1.address, 1);

            expect(await nft.ownerOf(1)).to.equal(addr1.address);
            expect(await nft.balanceOf(owner.address)).to.equal(0);
            expect(await nft.balanceOf(addr1.address)).to.equal(1);
        });

        it("Should fail if sender doesn't own the token", async function () {
            await nft.safeMint(owner.address); // Mint ID 1 to owner

            // Try to transfer from addr1 (who has nothing) to addr2
            await expect(
                nft.connect(addr1).transferFrom(owner.address, addr2.address, 1)
            ).to.be.reverted;
        });
    });
});