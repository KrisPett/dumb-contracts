### work in progress

#### .env

```
INFURA_API_KEY=
MNEMONIC=

CONTRACT_ADDRESS=
```

### dev mode

```
docker run -it --rm -p 3000:3000 --name node --network host -v ${PWD}:/workdir node:19.0.0-alpine sh -c "\
npm install -g npm && \
npm install -g truffle && \
apk add --no-cache git && \
cd /workdir && \
sh"

docker run -it --rm -p 8545:8545 --name ganache trufflesuite/ganache:v7.8.0 -m "mnemonic" -i 1337
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
truffle migrate --network development
```

### Mint an NFT

```
truffle exec scripts/mintNFT.js --network sepolia
```

### List networks

```
truffle networks
```
