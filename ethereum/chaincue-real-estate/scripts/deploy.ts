import { ethers } from "hardhat";

async function main() {
  const IntegerManipulation = await ethers.getContractFactory("IntegerManipulation");
  const integerManipulation = await IntegerManipulation.deploy();

  await integerManipulation.waitForDeployment().then(value => console.log(value))

  console.log(`IntegerManipulation deployed to: ${await integerManipulation.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
