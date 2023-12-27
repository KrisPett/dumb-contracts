// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstate is ERC721Enumerable, Ownable {
    uint256 public propertyCount;
    mapping(uint256 => Property) public properties;

    struct Property {
        string location;
        uint256 price;
        bool isForSale;
    }

    event PropertyRegistered(uint256 propertyId, string location, uint256 price);
    event PropertyTransferred(uint256 propertyId, address from, address to);

    constructor() ERC721("RealEstateNFT", "RE-NFT") {}

    function registerProperty(string memory _location, uint256 _price) external onlyOwner {
        uint256 propertyId = propertyCount + 1;
        _safeMint(msg.sender, propertyId);
        properties[propertyId] = Property({
            location: _location,
            price: _price,
            isForSale: true
        });

        emit PropertyRegistered(propertyId, _location, _price);
        propertyCount++;
    }

    function transferProperty(uint256 _propertyId, address _to) external {
        require(ownerOf(_propertyId) == msg.sender, "You are not the owner");
        require(properties[_propertyId].isForSale, "Property is not for sale");

        _transfer(msg.sender, _to, _propertyId);
        properties[_propertyId].isForSale = false;

        emit PropertyTransferred(_propertyId, msg.sender, _to);
    }
}
