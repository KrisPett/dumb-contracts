# Test

```
 BaseContract {
  target: '0x453e5CdeC55e03524107f33D283b93ECB489C172',
  interface: Interface {
    fragments: [
      [EventFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment]
    ],
    deploy: ConstructorFragment {
      type: 'constructor',
      inputs: [],
      payable: false,
      gas: null
    },
    fallback: null,
    receive: false
  },
  runner: HardhatEthersSigner {
    _gasLimit: undefined,
    address: '0xBA5deA80566bCB1d79ec380fF4aCde3815a09c8b',
    provider: HardhatEthersProvider {
      _hardhatProvider: [LazyInitializationProviderAdapter],
      _networkName: 'mainnet',
      _blockListeners: [],
      _transactionHashListeners: Map(0) {},
      _eventListeners: [],
      _isHardhatNetworkCached: false,
      _transactionHashPollingInterval: undefined
    }
  },
  filters: {},
  fallback: null,
  [Symbol(_ethersInternal_contract)]: {}
}
IntegerManipulation deployed to: 0x453e5CdeC55e03524107f33D283b93ECB489C172
```

```
0xBA5deA80566bCB1d79ec380fF4aCde3815a09c8b

Creating fee
https://etherscan.io/tx/0x6f494eee97d47743bdedd69c2aa25d8c1c4097c7990d21bdd022c1828b62dff4
Transaction Fee: 0.003285010008083971 ETH ($7.48)

Verify fee
free

Interacting fee
https://etherscan.io/tx/0x5f3c7b101bc51ad00b6d080abd2d9af9ccf134e219dc8985837a6ceb27d263d0
Transaction Fee: 0.00114410707789707 ETH ($2.60)
```

```
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyLandContract is ERC721Enumerable, Ownable {
    struct Land {
        string location;
        uint cost;
        uint landID;
        uint wantSell;
        address approver;
        bool buyerApproved;
        bool sellerApproved;
    }

    uint public totalLandsCounter;
    mapping (uint => Land) public lands;

    constructor() ERC721("MyContract", "LAND") {
        totalLandsCounter = 0;
    }

    event Add(address indexed _owner, uint _landID);
    event Transfer(address indexed _from, address indexed _to, uint _landID);

    modifier isLandOwner(uint _landID) {
        require(_exists(_landID), "Land with this ID does not exist");
        require(ownerOf(_landID) == msg.sender, "Caller is not the owner of this land");
        _;
    }

    modifier isAgreedApprover(uint _landID) {
        require(_exists(_landID), "Land with this ID does not exist");
        require(lands[_landID].approver == msg.sender, "Caller is not the agreed approver for this land transfer");
        require(lands[_landID].buyerApproved == false && lands[_landID].sellerApproved == false, "Approval already given");
        require(lands[_landID].wantSell == 1, "Land is not available for sale");
        require(lands[_landID].cost <= msg.value, "Insufficient payment");
        _;
    }

    function addLand(string memory _location, uint _cost) public onlyOwner {
        totalLandsCounter++;
        uint landID = totalLandsCounter;
        lands[landID] = Land({
            location: _location,
            cost: _cost,
            landID: landID,
            wantSell: 1,
            approver: address(0),
            buyerApproved: false,
            sellerApproved: false
        });

        _mint(msg.sender, landID);
        emit Add(msg.sender, landID);
    }

    // Other functions for agreeing on approver, approving transfer, checking```

```
