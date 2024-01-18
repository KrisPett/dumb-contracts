// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstate is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => PropertyDetails) public propertyDetails;

    struct PropertyDetails {
        string name;
        string location;
        uint256 size;
    }

    event PropertyMinted(uint256 indexed tokenId, address indexed owner, PropertyDetails details);

    constructor() ERC721("RealEstate", "RET") {}

    function mintProperty(string memory name, string memory location, uint256 size, string memory tokenURI) public onlyOwner {
        uint256 tokenId = nextTokenId;
        nextTokenId++;

        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        PropertyDetails memory details = PropertyDetails(name, location, size);
        propertyDetails[tokenId] = details;

        emit PropertyMinted(tokenId, msg.sender, details);
    }

    function transferProperty(address to, uint256 tokenId) public {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        _transfer(msg.sender, to, tokenId);
    }
}

