import "@nomicfoundation/hardhat-toolbox";
import {vars} from "hardhat/config";

const INFURA_API_KEY = vars.get("INFURA_API_KEY");
const METAMASK_PRIVATE_KEY = vars.get("METAMASK_PRIVATE_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

// 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
const HARDHAT_DEFAULT_WALLET_1 = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
// 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
const HARDHAT_DEFAULT_WALLET_2 = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [HARDHAT_DEFAULT_WALLET_1]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + INFURA_API_KEY,
      accounts: [METAMASK_PRIVATE_KEY]
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + INFURA_API_KEY,
      accounts: [METAMASK_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
}
