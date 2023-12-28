import "@nomicfoundation/hardhat-toolbox";
import {vars} from "hardhat/config";

const INFURA_API_KEY = vars.get("INFURA_API_KEY");
const METAMASK_PRIVATE_KEY = vars.get("METAMASK_PRIVATE_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
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
