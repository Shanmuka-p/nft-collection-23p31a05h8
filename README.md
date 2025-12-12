# 🔷 NFT Collection (ERC-721)

A production-grade, ERC-721 compatible Non-Fungible Token smart contract. This project implements a secure and optimized NFT collection with strict supply management, role-based access control, and a fully containerized automated test suite.

---

## 📖 Table of Contents
- [Features](#-features)
- [Technical Stack](#-technical-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Testing Strategy](#-testing-strategy)
- [Docker Support](#-docker-support)
- [License](#-license)

---

## 🚀 Features

* **ERC-721 Standard:** Complete implementation of the EIP-721 interface, ensuring compatibility with OpenSea, MetaMask, and other wallets.
* **Supply Enforcement:** Immutable maximum supply limit (100 tokens) to guarantee scarcity.
* **Secure Access Control:** Granular ownership permissions using OpenZeppelin's `Ownable` pattern for sensitive operations like minting and configuration.
* **Optimized Gas Usage:** Efficient storage patterns to minimize transaction costs for users.
* **Safety Mechanisms:** Built-in checks against common vulnerabilities (e.g., zero-address transfers, integer overflows via Solidity 0.8+).

## 🛠️ Technical Stack

* **Smart Contracts:** Solidity v0.8.20
* **Development Framework:** Hardhat
* **Security Library:** OpenZeppelin Contracts v5.x
* **Testing:** Mocha, Chai, Ethers.js
* **CI/CD Readiness:** Dockerized environment for reproducible builds.

## 📂 Project Architecture

```text
nft-collection/
├── contracts/
│   └── NftCollection.sol       # Core ERC-721 Implementation
├── test/
│   └── NftCollection.test.js   # Comprehensive Test Suite (Unit & Integration)
├── Dockerfile                  # Isolated Test Environment Config
├── hardhat.config.js           # Network & Compiler Configuration
└── package.json                # Project Dependencies
```

## ⚡ Getting Started

### Prerequisites
* **Node.js** (v18 or higher)
* **Docker** (Optional, for containerized execution)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shanmuka-p/nft-collection-23p31a05h8.git
    cd nft-collection-23p31a05h8
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Compile the contracts:**
    ```bash
    npx hardhat compile
    ```

## 🧪 Testing Strategy

The project utilizes a comprehensive test suite to validate all core business logic and edge cases.

**Key Test Coverage:**
* ✅ **Deployment:** Verifies initial ownership and supply state.
* ✅ **Minting:** Tests permission logic (Owner only) and supply limits.
* ✅ **Transfers:** Validates standard and safe transfer mechanisms.
* ✅ **Metadata:** Ensures correct URI generation for off-chain data.
* ✅ **Security:** Confirms that unauthorized actions revert as expected.

### Running Tests Locally
```bash
npx hardhat test
```

## 🐳 Docker Support

To ensure the application runs consistently across any machine, a Docker configuration is provided. This removes "it works on my machine" issues.

1.  **Build the Docker image:**
    ```bash
    docker build -t nft-collection-23p31a05h8 .
    ```

2.  **Execute the test suite inside the container:**
    ```bash
    docker run nft-collection-23p31a05h8
    ```

**Expected Output:**
```text
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
```
---
