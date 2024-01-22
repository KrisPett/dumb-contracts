import {expect} from "chai";
import {BaseContract, ContractRunner, ContractTransactionResponse} from "ethers";
import {ethers} from "hardhat";
import {Ownable, RealEstate} from "../typechain-types";

describe("RealEstate Contract", function () {

  describe("Create Contract", function () {
    let contract;
    let realEstate: RealEstate & { deploymentTransaction(): ContractTransactionResponse; };
    let owner: { address: any; };
    let addr1;

    it("Should create contract", async function () {
      contract = await ethers.getContractFactory("RealEstate");
      realEstate = await contract.deploy();
      let response = await realEstate.waitForDeployment()
      console.log(response.target);

      [owner, addr1] = await ethers.getSigners();
    });
  });

  describe.only("Minting Properties", function () {
    const deployedContractAddress = "0x7482347cD49869205C93D604B6345c531aCBC0Ac";
    let realEstate: RealEstate
    let owner: { address: any; };
    let addr1: any;

    before(async function () {
      [owner, addr1] = await ethers.getSigners();

      const RealEstate = await ethers.getContractFactory("RealEstate");
      realEstate = RealEstate.attach(deployedContractAddress) as RealEstate;
    });

    it("should be owned by owner", async function () {
      const contractOwner = await realEstate.owner();
      console.log(realEstate)
      console.log(contractOwner);
      console.log(owner.address);
      // console.log(owner.address);
      expect(contractOwner).to.equal(owner.address);
    });

    // it("Should mint a new property", async function () {
    //   const propertyId = 1;
    //   const price = ethers.parseEther("1.0");
    //
    //   await realEstate.connect(owner).mintProperty(propertyId, price);
    //
    //   const [currentOwner, propertyPrice, forSale] = await realEstate.getProperty(propertyId);
    //
    //   expect(currentOwner).to.equal(owner.address);
    //   expect(propertyPrice.toString()).to.equal(price.toString());
    //   expect(forSale).to.be.false;
    // });

  });

});
