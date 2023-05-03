https://docs.infura.io/infura/tutorials/ethereum/create-an-nft-using-truffle/create-the-nft-smart-contract

#### Node Version 16.0.0
```
docker run -it --rm -p 3000:3000 --name node -v ${PWD}:/app node:18.4.0-alpine sh -c "\
npm install -g npm && \
npm install -g truffle && \
apk add --no-cache git && \
cd /app && \
sh"
```

```
echo .env >> INFURA_API_KEY = "wss://sepolia.infura.io/ws/v3/<Your-API-Key>"
MNEMONIC = "<Your-MetaMask-Secret-Recovery-Phrase>"
```

```
truffle compile
```

```
truffle migrate --network sepolia
```