import {expect} from "chai";
import {ContractTransactionResponse} from "ethers";
import {ethers} from "hardhat";
import {RealEstate} from "../typechain-types";

// npx hardhat test
// npx hardhat verify
// npx hardhat vars set METAMASK_PRIVATE_KEY

describe("RealEstate Contract", () => {
  const deployedContractAddress = "0x30f9Db3926787A5868238ed6E9704673540253B1";

  describe("Create Contract", () => {
    let contract;
    let realEstate: RealEstate & { deploymentTransaction(): ContractTransactionResponse; };

    it("Should create contract", async () => {
      contract = await ethers.getContractFactory("RealEstate");
      realEstate = await contract.deploy();
      let response = await realEstate.waitForDeployment()
      console.log(response.target);
    });
  });

  describe("Get Property", () => {
    let realEstate: RealEstate

    before(async () => {
      const RealEstate = await ethers.getContractFactory("RealEstate");
      realEstate = RealEstate.attach(deployedContractAddress) as RealEstate;
    });

    it("should get totalMintedProperties", async () => {
      let totalMintedProperties = await realEstate.totalMintedProperties();
      console.log("totalMintedProperties: " + totalMintedProperties)
    })

    it("should get one property", async () => {
      const propertyId = 1;
      let property = await realEstate.properties(propertyId);
      console.log("price: " + property.price)
      console.log("forSale: " + property.forSale)
      expect(property.forSale).to.equal(false);

      let getProperty = await realEstate.getProperty(propertyId);
      console.log(getProperty)
    })
  })

  describe("Minting Properties", () => {
    let realEstate: RealEstate

    before(async () => {
      const RealEstate = await ethers.getContractFactory("RealEstate");
      realEstate = RealEstate.attach(deployedContractAddress) as RealEstate;
    });

    it("should allow the owner to mint a property", async () => {
      let totalMintedProperties = await realEstate.totalMintedProperties();
      const propertyId = totalMintedProperties++;
      const price = ethers.parseEther("1.0");

      let response = await realEstate.mintProperty(propertyId, price);
      console.log(response);
    });
  });

  describe("List Property", () => {
    let realEstate: RealEstate

    before(async () => {
      const RealEstate = await ethers.getContractFactory("RealEstate");
      realEstate = RealEstate.attach(deployedContractAddress) as RealEstate;
    });

    it("should list property", async () => {
      const propertyId = 1;
      const propertyPrice = ethers.parseEther("1.0");

      let listProperty = await realEstate.listProperty(propertyId, propertyPrice);
      console.log(listProperty)
      let property = await realEstate.properties(propertyId);
      console.log("price: " + property.price)
      console.log("forSale: " + property.forSale)
    });
  });
// need price to be decimals 0.05
  describe.only("buy Property", () => {
    let realEstate: RealEstate

    before(async () => {
      const RealEstate = await ethers.getContractFactory("RealEstate");
      realEstate = RealEstate.attach(deployedContractAddress) as RealEstate;
    });

    it("should buy a property", async () => {
      const propertyPrice = ethers.parseEther("1.0");

      let response = await realEstate.buyProperty(1, {value: propertyPrice});
      console.log(response)
    });
  });

});
