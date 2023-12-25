# Setup

- cat ~/.config/hardhat-nodejs/vars.json

```
npx hardhat vars set INFURA_API_KEY
npx hardhat vars set METAMASK_PRIVATE_KEY
npx hardhat vars set ETHERSCAN_API_KEY

npx hardhat vars get INFURA_API_KEY
npx hardhat vars get METAMASK_PRIVATE_KEY
npx hardhat vars get ETHERSCAN_API_KEY
```

# Deploy localhost

```
npx hardhat node
npx hardhat run scripts/deploy.ts --network localhost
```

# Deploy sepolia

```
npx hardhat run scripts/deploy.ts --network sepolia
npx hardhat run scripts/deploy.ts --network mainnet
```

# Verify 

```
npx hardhat verify <contract_address>
npx hardhat verify <contract_address> --network mainnet
```


