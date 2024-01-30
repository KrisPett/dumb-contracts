// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstate is ERC721, Ownable {
    struct Property {
        uint256 price;
        bool forSale;
    }

    mapping(uint256 => Property) public properties;
    uint256 public totalMintedProperties;

    event PropertyListed(uint256 indexed propertyId, uint256 price);
    event PropertySold(uint256 indexed propertyId, uint256 price, address indexed seller, address indexed buyer);
    event PropertyMinted(uint256 indexed propertyId, uint256 totalMinted);

    constructor() ERC721("ChaincueRealEstate", "CRT") Ownable(msg.sender) {
    }

    function mintProperty(uint256 propertyId, uint256 price) public onlyOwner {
        _safeMint(msg.sender, propertyId);
        properties[propertyId] = Property(price, false);
        totalMintedProperties += 1;

        emit PropertyMinted(propertyId, totalMintedProperties);
    }

    function listProperty(uint256 propertyId, uint256 price) public {
        require(ownerOf(propertyId) == msg.sender, "Not the property owner");
        properties[propertyId].price = price;
        properties[propertyId].forSale = true;

        emit PropertyListed(propertyId, price);
    }

    function buyProperty(uint256 propertyId) public payable {
        Property storage property = properties[propertyId];
        require(property.forSale, "Property is not for sale");
        require(msg.value >= property.price, "Insufficient funds sent");

        address seller = ownerOf(propertyId);
        payable(seller).transfer(msg.value);
        _transfer(seller, msg.sender, propertyId);
        property.forSale = false;

        emit PropertySold(propertyId, property.price, seller, msg.sender);
    }

    function getProperty(uint256 propertyId) public view returns (address, uint256, bool) {
        Property storage property = properties[propertyId];
        address currentOwner = ownerOf(propertyId);
        return (currentOwner, property.price, property.forSale);
    }

}
