import "@nomicfoundation/hardhat-toolbox";
import {vars} from "hardhat/config";

const INFURA_API_URL = vars.get("INFURA_API_URL");
const METAMASK_PRIVATE_KEY = vars.get("METAMASK_PRIVATE_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: INFURA_API_URL,
      accounts: [METAMASK_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.19",
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
