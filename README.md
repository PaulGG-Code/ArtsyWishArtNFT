### NFT WORLD: 
<img src=https://miro.medium.com/max/3150/2*MC7x-7Tod7dij2a5rkehQw.png width="200" height="200">

## ArtsyWishArt NFT:

| Name | Symbol | Address | Testnet Link |
| :--: | :-------: | :----: | :--------: |
| ArtsyWishArt NFT | (AWA) | 0x39876abad61d6b20a8b4769ccbfc6edb99183d80 | <a href="https://testnet.bscscan.com/address/0x39876abad61d6b20a8b4769ccbfc6edb99183d80"><img src="https://awebanalysis.com/img/coins/128/binance-coin.png"></img></a>

Table of contents
=================

<!--ts-->
* [Table of contents](#table-of-contents)
* [Contract configuration](#contract-configuratiom)
* [Structure of the environment](#structure-of-the-environment)
* [Deployment Script](#deployment-script)
* [Deploying the contract on testnet](#deploying-the-contract-on-testnet)
* [Interacting with the contract](#interacting-with-the-contract)
* [Minting](#minting)
	* [Minting for m](#minting-for-m)
	* [Verification minting 0](#verification-minting-0)
	* [Minting for Fran](#minting-for-fran)
	* [Verification minting 1](#verification-minting-1)
	* [Minting for M again](#minting-for-m-again)
	* [Verification minting 2](#verification-minting-2)
	* [Minting for Lar](#minting-for-lar)
	* [Verification minting 3](#verification-minting-3)
	* [Minting for Zouz](#minting-for-zouz)
	* [Verification minting 4](#verification-minting-4)
	* [Minting for Ant](#minting-for-ant)
	* [Verification mininting 5](#verification-minting-5)
* [Contract verification](#contract-verification)
<!--te-->


## Contract configuration:

- We used the contracts of OpenZeppelin

` npm install --save-dev @openzeppelin/contracts `


> In particular : ` ERC721PresetMinterPauserAutoId ` contract will be used. 


## Structure of the environment:

```
.
├── build
│   └── contracts/
├── contracts
│   ├── access/
│   ├── build/
│   ├── cryptography/
│   ├── drafts/
│   ├── GSN/
│   ├── introspection/
│   ├── math/
│   ├── Migrations.sol
│   ├── package.json
│   ├── payment/
│   ├── presets/
│   ├── proxy/
│   ├── README.md
│   ├── token/
│   └── utils/
├── migrations
│   ├── 1_initial_migration.js
│   └── 2_deploy.js
├── node_modules
├── package-lock.json
├── test/
└── truffle-config.js
└── .secret
└── .secret-testnet
└── .env
```

## Deployment Script:

```
ethereum@ubuntu:~/Desktop/NFT_DIR$ cat migrations/2_deploy.js 

//migrations/2_deploy/js
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {

	deployer.deploy(ERC721PresetMinterPauserAutoId, "ArtsyWishArt NFT", "AWA", "http://my-json-server.typicode.com/PaulGG-Code/ArtsyWishArt/tokens/");
};

```


## Deploying the contract on testnet:
	
***[Binance Smart Chain Testnet](testnet.bscscan.com)***

```
ethereum@ubuntu:~/Desktop/NFT_DIR$ npx truffle console --network testnet
truffle(testnet)> migrate

Compiling your contracts...
===========================
> Compiling ./contracts/GSN/Context.sol
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'testnet'
> Network id:      97
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x307c132bb8667f948c1d8a37f4c24f6ac2b18865043630ce35c8ffeb2b74f72e
   > Blocks: 3            Seconds: 9
   > contract address:    0x1E7Ba8b910827914Ff30FEfdCE1d4D9870f30c7f
   > block number:        7345393
   > block timestamp:     1616524606
   > account:             0xdf7507840585fd43ea2c6e3DBa0f2469870136A8
   > balance:             5.95460948
   > gas used:            153706 (0x2586a)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00307412 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7345396)
   > confirmation number: 3 (block: 7345398)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00307412 ETH


2_deploy.js
===========

   Deploying 'ERC721PresetMinterPauserAutoId'
   ------------------------------------------
   > transaction hash:    0x6454d4512263d483d36778e950c518a8a17534d982bb2598f89368847f275296
   > Blocks: 3            Seconds: 9
   > contract address:    0x39876abaD61D6B20a8b4769ccbfc6edB99183d80
   > block number:        7345407
   > block timestamp:     1616524648
   > account:             0xdf7507840585fd43ea2c6e3DBa0f2469870136A8
   > balance:             5.90102828
   > gas used:            2636805 (0x283c05)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0527361 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7345410)
   > confirmation number: 3 (block: 7345412)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0527361 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.05581022 ETH


truffle(testnet)> 
```


## Interacting with the contract:

```
truffle(testnet)> nft = await ERC721PresetMinterPauserAutoId.deployed()
undefined

truffle(testnet)> await nft.name()
'ArtsyWishArt NFT'

truffle(testnet)> await nft.symbol()
'AWA'

truffle(testnet)> await nft.baseURI()
'http://my-json-server.typicode.com/PaulGG-Code/ArtsyWishArt/tokens/'
truffle(testnet)> 
```

## Minting:

## Minting for m:


```
truffle(testnet)> await nft.mint("0x723f59A55CaBF1Dc54b2b5B6e45e8Ac0f39dcf52")
{ tx:
   '0xdd105149096489c8ebc8234b6aba59746dafa009a5ff4be438a66907855388c2',
  receipt:
   { blockHash:
      '0x754bd25ff5bf0d2823e4d6db9109310ce96f788e2ea39f46f44f8b757aba8305',
     blockNumber: 7345641,
     contractAddress: null,
     cumulativeGasUsed: 191268,
     from: '0xdf7507840585fd43ea2c6e3dba0f2469870136a8',
     gasUsed: 155889,
     logs: [ [Object] ],
     logsBloom:
      '0x00000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000001000020000000000000000000800000000000000800000400010000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000',
     status: true,
     to: '0x39876abad61d6b20a8b4769ccbfc6edb99183d80',
     transactionHash:
      '0xdd105149096489c8ebc8234b6aba59746dafa009a5ff4be438a66907855388c2',
     transactionIndex: 1,
     rawLogs: [ [Object] ] },
  logs:
   [ { address: '0x39876abaD61D6B20a8b4769ccbfc6edB99183d80',
       blockNumber: 7345641,
       transactionHash:
        '0xdd105149096489c8ebc8234b6aba59746dafa009a5ff4be438a66907855388c2',
       transactionIndex: 1,
       blockHash:
        '0x754bd25ff5bf0d2823e4d6db9109310ce96f788e2ea39f46f44f8b757aba8305',
       logIndex: 1,
       removed: false,
       id: 'log_b3efb5d0',
       event: 'Transfer',
       args: [Result] } ] }
truffle(testnet)> 
```
## Verification minting 0:

```
truffle(testnet)> await nft.ownerOf(0)
'0x723f59A55CaBF1Dc54b2b5B6e45e8Ac0f39dcf52'
truffle(testnet)> 
```


## Minting for Fran:

```
truffle(testnet)> await nft.ownerOf(0)
'0x723f59A55CaBF1Dc54b2b5B6e45e8Ac0f39dcf52'
truffle(testnet)> await nft.mint("0x4F4991a3ccAcFCA35a2A3e35Bb1D175f4Af03D54")
{ tx:
   '0x0c2d7ea06c990623cfeab30f3b6b6f3e3cf3416af336aa9974d4c1c93a810075',
  receipt:
   { blockHash:
      '0x2427db3d710c8d15981ebfed9ad6501577317bc9e50aadeaeba9e13738bf213f',
     blockNumber: 7345702,
     contractAddress: null,
     cumulativeGasUsed: 164289,
     from: '0xdf7507840585fd43ea2c6e3dba0f2469870136a8',
     gasUsed: 164289,
     logs: [ [Object] ],
     logsBloom:
      '0x00000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000008000000000000200000000040000000000000000000000000008000000000000000000040000000000000000000000801000020000000000000000000800000000000000800000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000',
     status: true,
     to: '0x39876abad61d6b20a8b4769ccbfc6edb99183d80',
     transactionHash:
      '0x0c2d7ea06c990623cfeab30f3b6b6f3e3cf3416af336aa9974d4c1c93a810075',
     transactionIndex: 0,
     rawLogs: [ [Object] ] },
  logs:
   [ { address: '0x39876abaD61D6B20a8b4769ccbfc6edB99183d80',
       blockNumber: 7345702,
       transactionHash:
        '0x0c2d7ea06c990623cfeab30f3b6b6f3e3cf3416af336aa9974d4c1c93a810075',
       transactionIndex: 0,
       blockHash:
        '0x2427db3d710c8d15981ebfed9ad6501577317bc9e50aadeaeba9e13738bf213f',
       logIndex: 0,
       removed: false,
       id: 'log_5bbeb640',
       event: 'Transfer',
       args: [Result] } ] }
```
## Verification minting 1:

```
truffle(testnet)> await nft.ownerOf(1)
'0x4F4991a3ccAcFCA35a2A3e35Bb1D175f4Af03D54'
truffle(testnet)> 
```

## Minting for M again:

```
truffle(testnet)> await nft.mint("0x723f59A55CaBF1Dc54b2b5B6e45e8Ac0f39dcf52")
{ tx:
   '0x97e6e04f7bd139055c66a341655d5594e22084d0444eb283ade55de140ed792e',
  receipt:
   { blockHash:
      '0x5c8ec73b933f4dc1a079ff5195f4afa7676acde2c9dc1b43d8628711c7c67627',
     blockNumber: 7345740,
     contractAddress: null,
     cumulativeGasUsed: 149289,
     from: '0xdf7507840585fd43ea2c6e3dba0f2469870136a8',
     gasUsed: 149289,
     logs: [ [Object] ],
     logsBloom:
      '0x04000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000001000020000000000000000000800000000000000800000400010000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000100000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000008000000000000000000000',
     status: true,
     to: '0x39876abad61d6b20a8b4769ccbfc6edb99183d80',
     transactionHash:
      '0x97e6e04f7bd139055c66a341655d5594e22084d0444eb283ade55de140ed792e',
     transactionIndex: 0,
     rawLogs: [ [Object] ] },
  logs:
   [ { address: '0x39876abaD61D6B20a8b4769ccbfc6edB99183d80',
       blockNumber: 7345740,
       transactionHash:
        '0x97e6e04f7bd139055c66a341655d5594e22084d0444eb283ade55de140ed792e',
       transactionIndex: 0,
       blockHash:
        '0x5c8ec73b933f4dc1a079ff5195f4afa7676acde2c9dc1b43d8628711c7c67627',
       logIndex: 0,
       removed: false,
       id: 'log_e277e7d8',
       event: 'Transfer',
       args: [Result] } ] }
truffle(testnet)> 

## Verification minting 2: 

truffle(testnet)> await nft.ownerOf(2)
'0x723f59A55CaBF1Dc54b2b5B6e45e8Ac0f39dcf52'
truffle(testnet)> 
```

## Minting for Lar: 

```
truffle(testnet)> await nft.mint("0x6a80fCB7BcE6254FA52999D168BD0Ce00FaE3c19")
{ tx:
   '0x0aba258bdb2e0fe8d776fb482cd3df6047c021fad6f2105efbb21b150a276783',
  receipt:
   { blockHash:
      '0x1be10d4e4f23e05d8b2a52432120c87665b5d153aa5ae687305ea6b67b3fc548',
     blockNumber: 7345775,
     contractAddress: null,
     cumulativeGasUsed: 164289,
     from: '0xdf7507840585fd43ea2c6e3dba0f2469870136a8',
     gasUsed: 164289,
     logs: [ [Object] ],
     logsBloom:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000020000000000000000000000000000000000400000000008000000000000000000000000000000000000000000001000020000000000000000000800000000000000800000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000810000000000000000400000000002000000008000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000',
     status: true,
     to: '0x39876abad61d6b20a8b4769ccbfc6edb99183d80',
     transactionHash:
      '0x0aba258bdb2e0fe8d776fb482cd3df6047c021fad6f2105efbb21b150a276783',
     transactionIndex: 0,
     rawLogs: [ [Object] ] },
  logs:
   [ { address: '0x39876abaD61D6B20a8b4769ccbfc6edB99183d80',
       blockNumber: 7345775,
       transactionHash:
        '0x0aba258bdb2e0fe8d776fb482cd3df6047c021fad6f2105efbb21b150a276783',
       transactionIndex: 0,
       blockHash:
        '0x1be10d4e4f23e05d8b2a52432120c87665b5d153aa5ae687305ea6b67b3fc548',
       logIndex: 0,
       removed: false,
       id: 'log_8ccc707e',
       event: 'Transfer',
       args: [Result] } ] }
```

## Verification minting 3:

```
truffle(testnet)> await nft.ownerOf(3)
'0x6a80fCB7BcE6254FA52999D168BD0Ce00FaE3c19'
```

## Minting for Zouz:

```
truffle(testnet)> await nft.mint("0x50eee1829983e522ebace101e10a7801437f94fc")
{ tx:
   '0x7b3fc6c33bbc3f411825737beb579b0bcacfdc4e8160531d36c8da28cd76fd69',
  receipt:
   { blockHash:
      '0xa3eca8a3ca2728f4e747796923dbe4d4d2cdb55e21e8f1e540fc9c846aa0ced2',
     blockNumber: 7345911,
     contractAddress: null,
     cumulativeGasUsed: 164289,
     from: '0xdf7507840585fd43ea2c6e3dba0f2469870136a8',
     gasUsed: 164289,
     logs: [ [Object] ],
     logsBloom:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000008000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000008001000020000000000000000000800000000000000800000000010000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000002000000000000000000002000000000000000000000000000000008000000000000000000020000000000000800000000000000000000000000000000000000000000000000000',
     status: true,
     to: '0x39876abad61d6b20a8b4769ccbfc6edb99183d80',
     transactionHash:
      '0x7b3fc6c33bbc3f411825737beb579b0bcacfdc4e8160531d36c8da28cd76fd69',
     transactionIndex: 0,
     rawLogs: [ [Object] ] },
  logs:
   [ { address: '0x39876abaD61D6B20a8b4769ccbfc6edB99183d80',
       blockNumber: 7345911,
       transactionHash:
        '0x7b3fc6c33bbc3f411825737beb579b0bcacfdc4e8160531d36c8da28cd76fd69',
       transactionIndex: 0,
       blockHash:
        '0xa3eca8a3ca2728f4e747796923dbe4d4d2cdb55e21e8f1e540fc9c846aa0ced2',
       logIndex: 0,
       removed: false,
       id: 'log_e5d10442',
       event: 'Transfer',
       args: [Result] } ] }
```

## Verification minting 4:

```
truffle(testnet)> await nft.ownerOf(4)
'0x50eEe1829983e522ebACe101e10a7801437f94Fc'
truffle(testnet)> 
```


## Minting for Ant:

```
truffle(testnet)> await nft.mint("0x756430f818b8298752040d14ddad1dfc73efb2de")
{ tx:
   '0x0d72ccdbf319a5c619a0b22bae2a0c458836b55828d8addda6a1c31c10ffa53a',
  receipt:
   { blockHash:
      '0xa2d887ff3d99f294ec77b179788d1dff7d961fd65d3dd00b410deb1bf2db28b8',
     blockNumber: 7345979,
     contractAddress: null,
     cumulativeGasUsed: 304365,
     from: '0xdf7507840585fd43ea2c6e3dba0f2469870136a8',
     gasUsed: 164289,
     logs: [ [Object] ],
     logsBloom:
      '0x00000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000010000000000000000008000000000000000000000000000000000000000000001000020000000000000000000800000000000000800000000010000000000000000000000000000000000000001000000800000000000000000000040000000000000000000000000000000000800000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000',
     status: true,
     to: '0x39876abad61d6b20a8b4769ccbfc6edb99183d80',
     transactionHash:
      '0x0d72ccdbf319a5c619a0b22bae2a0c458836b55828d8addda6a1c31c10ffa53a',
     transactionIndex: 3,
     rawLogs: [ [Object] ] },
  logs:
   [ { address: '0x39876abaD61D6B20a8b4769ccbfc6edB99183d80',
       blockNumber: 7345979,
       transactionHash:
        '0x0d72ccdbf319a5c619a0b22bae2a0c458836b55828d8addda6a1c31c10ffa53a',
       transactionIndex: 3,
       blockHash:
        '0xa2d887ff3d99f294ec77b179788d1dff7d961fd65d3dd00b410deb1bf2db28b8',
       logIndex: 2,
       removed: false,
       id: 'log_7f964876',
       event: 'Transfer',
       args: [Result] } ] }
```

## Verification mininting 5: 

```
truffle(testnet)> await nft.ownerOf(5)
'0x756430F818b8298752040D14Ddad1DfC73EFb2De'
truffle(testnet)> 
```


## Contract verification: 

```
ethereum@ubuntu:~/Desktop/NFT_DIR$ truffle run verify ERC721PresetMinterPauserAutoId@0x39876abaD61D6B20a8b4769ccbfc6edB99183d80 --network testnet
Verifying ERC721PresetMinterPauserAutoId@0x39876abaD61D6B20a8b4769ccbfc6edB99183d80
Pass - Verified: https://testnet.bscscan.com/address/0x39876abaD61D6B20a8b4769ccbfc6edB99183d80#contracts
Successfully verified 1 contract(s).
ethereum@ubuntu:~/Desktop/NFT_DIR$ 

```
