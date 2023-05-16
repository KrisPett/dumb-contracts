// truffle exec scripts/mintNFT.js --network development
// truffle exec scripts/mintNFT.js --network sepolia
require('dotenv').config()

const {TOKEN_URI, CONTRACT_ADDRESS, PUBLIC_ADDRESS} = process.env

const contractJson = require('../build/contracts/ChaincueNFT.json')

module.exports = async callback => {
  const contract = new web3.eth.Contract(contractJson.abi, CONTRACT_ADDRESS);

  const network = await web3.eth.net.getNetworkType()

  const tx = await contract.methods.mintNFT(PUBLIC_ADDRESS, TOKEN_URI)
  await tx.send({
    from: (await web3.eth.getAccounts())[0],
    gas: await tx.estimateGas(),
  })
    .on('transactionHash', (txhash) => {
      console.log(`Mining transaction ...`)
      console.log(`https://${network}.etherscan.io/tx/${txhash}`)
      console.log("TOKEN_URI:" + TOKEN_URI)
      console.log("CONTRACT_ADDRESS:" + CONTRACT_ADDRESS)
      console.log("PUBLIC_ADDRESS:" + PUBLIC_ADDRESS)
    })
    .on('error', function (error) {
      console.error(`An error happened: ${error}`)
      callback()
    })
    .then(receipt => {
      console.log(`Success: The NFT has been minted and mined in block ${receipt.blockNumber}`)
      console.log('Minted NFT with tokenId:', receipt.events.Transfer.returnValues.tokenId);
      callback()
    })
}
