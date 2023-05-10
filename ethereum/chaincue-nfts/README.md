### work in progress

#### .env

```
INFURA_API_KEY=
MNEMONIC=

CONTRACT_ADDRESS=
```

### dev mode

```
docker run -it --rm -p 3000:3000 --name node -v ${PWD}:/app node:19.0.0-alpine sh -c "\
npm install -g npm && \
npm install -g truffle && \
npm install -g solc && \
apk add --no-cache git && \
cd /app && \
sh"
```

### Get ABI

```
docker run -v ${PWD}:/workdir ethereum/solc:0.8.19-alpine --abi \
--include-path /workdir/node_modules/ \
--base-path . /workdir/contracts/ChaincueNFT.sol \
-o /workdir/abi
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
truffle exec scripts/index.js --network sepolia
```
