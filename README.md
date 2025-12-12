🎨 NFT Collection (ERC-721)

A production-grade ERC-721 Non-Fungible Token implementation designed with a focus on security, scalability, testability, and developer experience. This repository includes a fully Dockerized environment, supply-restricted minting logic, and an automated test suite engineered for reliability and reproducibility.

This project is ideal for developers exploring NFT smart contracts, ERC-721 token standards, Solidity best practices, and containerized blockchain development workflows.

🔍 Overview

This repository demonstrates a complete NFT system built using the ERC-721 standard. It highlights concepts such as token metadata, ownership restrictions, minting logic, and blockchain application security. The project is structured to be easy to extend, audit, and integrate into larger Web3 ecosystems.

🚀 Key Features

Fully ERC-721 Compliant
Implements all required standard functions and metadata extensions.

Supply-Restricted Minting (100 Max)
Ensures strict enforcement of token supply limits.

Owner-Controlled Access
All mint operations and administrative actions use OpenZeppelin’s secure Ownable module.

Security-Driven Architecture
Validates input, prevents zero-address minting, avoids unsafe state changes, and follows Web3 security best practices.

Dockerized Execution Environment
Enables consistent, reproducible, and CI-ready test execution.

Comprehensive Automated Testing
Covers deployment, minting behavior, token URI generation, permissions, and transfer mechanics.

🛠️ Technology Stack
Component	Technology
Smart Contract	Solidity v0.8.20
Framework	Hardhat
Libraries	OpenZeppelin Contracts
Testing Tools	Mocha, Chai, Ethers.js
Environment	Docker, Node.js

This combination provides strong security guarantees, modularity, and an efficient development experience.

📂 Directory Structure
nft-collection/
├── contracts/
│   └── NftCollection.sol       # Core ERC-721 smart contract
├── test/
│   └── NftCollection.test.js   # Automated test suite
├── Dockerfile                  # Container configuration
├── hardhat.config.js           # Hardhat configuration
└── package.json                # Dependencies and scripts


This structure follows industry standards for Solidity/Hardhat projects.

⚡ Setup and Installation
Prerequisites

Node.js v18+

Docker (optional but recommended)

Clone the Repository
git clone <your-repo-url>
cd nft-collection


Install dependencies:

npm install


Compile contracts:

npx hardhat compile

🧪 Testing Suite

This project includes a full suite of tests validating:

Contract deployment and initialization

Ownership and access control

Minting permissions and supply limits

Token URI construction

Transfer behavior and failure scenarios

Run Tests Locally
npx hardhat test

Run Tests via Docker (Recommended for CI/CD)

Build the project image:

docker build -t nft-collection .


Execute tests inside the container:

docker run nft-collection

Expected Output
  NftCollection
    Deployment
      ✔ Should set the right owner
      ✔ Should have 0 total supply initially
    Minting Logic
      ✔ Should allow owner to mint within limit
      ✔ Should revert if non-owner tries to mint
      ✔ Should correctly construct Token URI
    Transfers
      ✔ Should transfer tokens between accounts
      ✔ Should fail if sender doesn't own the token

  7 passing

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute the code with proper attribution.

📄 Recommended .gitignore
node_modules
artifacts
cache
coverage
.env