require('dotenv').config()

const {TOKEN_URI, CONTRACT_ADDRESS, PUBLIC_ADDRESS} = process.env

const Web3 = require('web3');

// Replace the providerURL with the actual Sepolia network's RPC URL
const providerURL = '<providerURL>';
const web3 = new Web3(providerURL);
