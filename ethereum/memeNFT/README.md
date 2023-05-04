https://docs.infura.io/infura/tutorials/ethereum/create-an-nft-using-truffle/create-the-nft-smart-contract

#### Node Version 16.0.0

cd ethereum/memeNFT 

- Truffle v5.8.4 (core: 5.8.4)
- Ganache v7.8.0
- Solidity - ^0.8.19 (solc-js)
- Node v19.0.0
- Web3.js v1.8.2
- Npm 9.6.6

```
docker run -it --rm -p 3000:3000 --name node -v ${PWD}:/app node:19.0.0-alpine sh -c "\
npm install -g npm && \
npm install -g truffle && \
apk add --no-cache git && \
cd /app && \
sh"
```

```
echo .env >> INFURA_API_KEY = "https://sepolia.infura.io/v3/<Your-API-Key>"
MNEMONIC = "<Your-MetaMask-Secret-Recovery-Phrase>"
```

```
truffle compile
```

```
truffle migrate --network sepolia
```

### Clean and Rebuild

```
rm -r node_modules && rm package-lock.json && rm -r build && npm i && truffle compile && truffle migrate --network sepolia
```
