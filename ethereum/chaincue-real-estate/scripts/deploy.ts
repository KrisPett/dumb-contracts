import {ethers} from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("RealEstate");
  const initialOwnerAddress = 'YOUR_INITIAL_OWNER_ADDRESS';
  const contractDeployed = await contract.deploy(initialOwnerAddress, {from: initialOwnerAddress});

  await contractDeployed.waitForDeployment().then(value => console.log(value))

  console.log(`contractDeployed deployed to: ${await contractDeployed.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
