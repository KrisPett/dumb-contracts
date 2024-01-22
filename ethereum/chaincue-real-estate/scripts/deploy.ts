import {ethers} from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("RealEstate");
  const initialOwnerAddress = '0xBA5deA80566bCB1d79ec380fF4aCde3815a09c8b';
  const contractDeployed = await contract.deploy();

  await contractDeployed.waitForDeployment().then(value => console.log(value))

  console.log(`contractDeployed deployed to: ${await contractDeployed.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
