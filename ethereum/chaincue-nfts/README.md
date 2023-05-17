### work in progress

#### .env

```
INFURA_API_KEY=
MNEMONIC=

CONTRACT_ADDRESS=
```

### dev mode

```
docker run -it --rm -p 5000:3000 --network host -v ${PWD}:/workdir -w /workdir node:19 bash -c "\
npm install -g truffle && \
bash"

docker run -it --rm -p 8545:8545 --name ganache trufflesuite/ganache:v7.8.0 -m "mnemonic" -i 1337
```

### Get ABI

```
docker run --rm -v ${PWD}:/workdir ethereum/solc:0.8.19-alpine --abi \
--include-path /workdir/node_modules/ \
--base-path . /workdir/contracts/ChaincueNFT.sol \
-o /workdir/abi \
--overwrite
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
truffle exec scripts/mintNFT.js --network development
```

### List networks

```
truffle networks
truffle console --network sepolia
truffle console --network development
```

### Check if communication with the blockchain is working

```
let balance = await web3.eth.getBalance('0x3De0A2fD4A90f9A160ebb2B8711192D1F0eB339D');
console.log(balance)
let accounts = await web3.eth.getAccounts();
console.log(accounts)
```
