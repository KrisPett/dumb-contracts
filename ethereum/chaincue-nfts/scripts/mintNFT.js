require('dotenv').config()

const { TOKEN_URI, CONTRACT_ADDRESS, PUBLIC_ADDRESS } = process.env

const contractJson = require('../build/contracts/ChaincueNFT.json')

module.exports = async function (callback) {
  const contract = new web3.eth.Contract(
      contractJson.abi,
      CONTRACT_ADDRESS,
  );

  const network = await web3.eth.net.getNetworkType()

  const tx = contract.methods.mintNFT(PUBLIC_ADDRESS, TOKEN_URI)
  await tx
  .send({
    from: (await web3.eth.getAccounts())[0],
    gas: await tx.estimateGas(),
  })
  .on('transactionHash', (txhash) => {
    console.log(`Mining transaction ...`)
    console.log(`https://${network}.etherscan.io/tx/${txhash}`)
  })
  .on('error', function(error){
    console.error(`An error happened: ${error}`)
    callback()
  })
  .then(function(receipt){
    console.log(
        `Success: The NFT has been minted and mined in block ${receipt.blockNumber}`)
    callback()
  })
}
