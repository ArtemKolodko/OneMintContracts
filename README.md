Based on official Harmony docs:

https://docs.harmony.one/home/developers/deploying-on-harmony/using-hardhat

### Setup environment
1) touch .env
2) HARMONY_PRIVATE_KEY=12345

### Compile
`npx hardhat compile`

### Running tests
```
npm i
npx hardhat test
```

### Deployment
```
npx hardhat run scripts/deploy.js --network mainnet
```

### Testnet

#### Faucet
https://faucet.pops.one/

#### Account
https://explorer.pops.one/address/0x93e81c464a3dc4101d11883e1c7f4e522eb1174f?activeTab=0

### Verification
```
npx hardhat verify --network mainnet 0xa5058569A9563374A111577C24E702AfD1438F8E
```


