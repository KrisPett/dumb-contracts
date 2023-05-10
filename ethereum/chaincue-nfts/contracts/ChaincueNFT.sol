// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ChaincueNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    struct TokenMetadata {
        string imageURL;
        uint256 timestamp;
        address creator;
    }

    uint256 public tokenCount;
    mapping(uint256 => TokenMetadata) public tokenMetadata;

    constructor() ERC721("Chaincue", "CCNFT") {}

    function mintNFT(address to, string memory uri) public returns (uint256){
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        tokenMetadata[tokenId] = TokenMetadata(uri, block.timestamp, msg.sender);
        return tokenId;
    }

    function getTokenMetadata(uint256 tokenId) public view returns (TokenMetadata memory) {
        return tokenMetadata[tokenId];
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https:test";
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory){
        return super.tokenURI(tokenId);
    }
}
