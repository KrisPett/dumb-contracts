import {expect} from "chai";
import {ContractTransactionResponse} from "ethers";
import {ethers} from "hardhat";
import {RealEstate} from "../typechain-types";

// npx hardhat test
// npx hardhat verify

describe("RealEstate Contract", function () {
  const deployedContractAddress = "0xf78c35eD5425336221F9c30DDe46A23c1270a6bE";

  describe("Create Contract", function () {
    let contract;
    let realEstate: RealEstate & { deploymentTransaction(): ContractTransactionResponse; };

    it("Should create contract", async function () {
      contract = await ethers.getContractFactory("RealEstate");
      realEstate = await contract.deploy();
      let response = await realEstate.waitForDeployment()
      console.log(response.target);
    });
  });

  describe("Get Property", () => {
    let realEstate: RealEstate

    before(async function () {
      const RealEstate = await ethers.getContractFactory("RealEstate");
      realEstate = RealEstate.attach(deployedContractAddress) as RealEstate;
    });

    it("should get totalMintedProperties", async function () {
      let totalMintedProperties = await realEstate.totalMintedProperties();
      console.log("totalMintedProperties: " + totalMintedProperties)
    })

    it("should get one property", async function () {
      let property = await realEstate.properties(1);
      console.log("price: " + property.price)
      console.log("forSale: " + property.forSale)
      expect(property.forSale).to.equal(false);
    })
  })

  describe.only("Minting Properties", function () {
    let realEstate: RealEstate
    let owner: { address: any; };
    let addr1: any;

    before(async function () {
      // [owner, addr1] = await ethers.getSigners();
      const RealEstate = await ethers.getContractFactory("RealEstate");
      realEstate = RealEstate.attach(deployedContractAddress) as RealEstate;
    });

    it("should allow the owner to mint a property", async function () {
      let totalMintedProperties = await realEstate.totalMintedProperties();
      const propertyId = totalMintedProperties++;
      const price = ethers.parseEther("1.0");

      let response = await realEstate.mintProperty(propertyId, price);
      console.log(response);
    });

  });

});
