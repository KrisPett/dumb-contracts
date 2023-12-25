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
