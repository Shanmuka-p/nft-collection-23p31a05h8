// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NftCollection is ERC721, Ownable {
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 100;
    uint256 public totalSupply;
    string private _baseTokenURI;

    constructor(string memory baseURI, address initialOwner) 
        ERC721("MyUniqueNFT", "MNFT") 
        Ownable(initialOwner) 
    {
        _baseTokenURI = baseURI;
    }

    /**
     * @dev Mint a new token. Only the owner can call this.
     * _safeMint handles the existence check automatically.
     */
    function safeMint(address to) public onlyOwner {
        require(totalSupply < MAX_SUPPLY, "Max supply reached");
        require(to != address(0), "Cannot mint to zero address");

        totalSupply++; // Increment first
        uint256 tokenId = totalSupply; // 1-based index
        
        _safeMint(to, tokenId);
    }

    /**
     * @dev Returns the Base URI for computing {tokenURI}.
     */
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
}