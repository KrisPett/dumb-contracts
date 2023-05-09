### work in progress

#### .env
```
INFURA_API_KEY=
MNEMONIC=

CONTRACT_ADDRESS=
```

```
docker run -it --rm -p 3000:3000 --name node -v ${PWD}:/app node:19.0.0-alpine sh -c "\
npm install -g npm && \
npm install -g truffle && \
apk add --no-cache git && \
cd /app && \
sh"
```

### Compile Contract
```
truffle compile
```

### Create Contract

```
truffle migrate --network sepolia
```

### Mint an NFT

```
truffle exec scripts/mintNFT.js --network sepolia
```
