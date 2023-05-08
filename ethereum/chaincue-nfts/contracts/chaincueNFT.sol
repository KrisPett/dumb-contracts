// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract chaincueNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    struct TokenMetadata {
        string imageURL;
        uint256 timestamp;
        address creator;
    }

    uint256 public tokenCount;
    mapping(uint256 => TokenMetadata) public tokenMetadata;

    constructor() ERC721("Chaincue", "CCNFT") {}


    function mintNFT(address recipient, string memory tokenURI, string memory imageURL) public onlyOwner returns (uint256) {
        _tokenId.increment();

        uint256 newItemId = _tokenId.current();
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        tokenMetadata[newItemId] = TokenMetadata(imageURL, block.timestamp, msg.sender);

        return newItemId;
    }

    function getTokenMetadata(uint256 tokenId) public view returns (TokenMetadata memory) {
        return tokenMetadata[tokenId];
    }
}
