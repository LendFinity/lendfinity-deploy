# Aave V3 Deployments

[![npm (scoped)](https://img.shields.io/npm/v/@aave/deploy-v3)](https://www.npmjs.com/package/@aave/deploy-v3)

This Node.js repository contains the configuration and deployment scripts for the Aave V3 protocol core and periphery contracts. The repository makes use of `hardhat` and `hardhat-deploy` tools to facilitate the deployment of Aave V3 protocol.

## Requirements

- Node.js >= 16
- Alchemy key
  - If you use a custom RPC node, you can change the default RPC provider URL at [./helpers/hardhat-config-helpers.ts:25](./helpers/hardhat-config-helpers.ts).
- Etherscan API key _(Optional)_

## Getting Started

1. Install Node.JS dependencies:

   ```
   npm i
   ```

2. Compile contracts before running any other command, to generate Typechain TS typings:

   ```
   npm run compile
   ```

## How to deploy Aave V3 in testnet network

To deploy Aave V3 in a Testnet network, copy the `.env.example` into a `.env` file, and fill the environment variables `MNEMONIC`, and `ALCHEMY_KEY`.

```
cp .env.example .env
```

Edit the `.env` file to fill the environment variables `MNEMONIC`, `ALCHEMY_KEY` and `MARKET_NAME`. You can check all possible pool configurations in this [file](https://github.com/aave/aave-v3-deploy/blob/09e91b80aff219da80f35a9fc55dafc5d698b574/helpers/market-config-helpers.ts#L95).

```
nano .env
```

Run the deployments scripts and specify which network & aave market configs you wish to deploy.

```
HARDHAT_NETWORK=goerli npx hardhat deploy
```

## How to deploy Aave V3 in fork network

You can use the environment variable `FORK` with the network name to deploy into a fork.

```
FORK=main MARKET_NAME=Aave npx hardhat deploy
```

## How to integrate in your Hardhat project

You can install the `@aave/deploy-v3` package in your Hardhat project to be able to import deployments with `hardhat-deploy` and build on top of Aave in local or testnet network.

To make it work, you must install the following packages in your project:

```
npm i --save-dev @aave/deploy-v3 @aave/core-v3 @aave/periphery-v3
```

Then, proceed to load the deploy scripts adding the `externals` field in your Hardhat config file at `hardhat.config.js|ts`.

```
# Content of hardhat.config.ts file

export default hardhatConfig: HardhatUserConfig = {
   {...},
   external: {
    contracts: [
      {
        artifacts: 'node_modules/@aave/deploy-v3/artifacts',
        deploy: 'node_modules/@aave/deploy-v3/dist/deploy',
      },
    ],
  },
}
```

After all is configured, you can run `npx hardhat deploy` to run the scripts or you can also run it programmatically in your tests using fixtures:

```
import {getPoolAddressesProvider} from '@aave/deploy-v3';

describe('Tests', () => {
   before(async () => {
      // Set the MARKET_NAME env var
      process.env.MARKET_NAME = "Aave"

      // Deploy Aave V3 contracts before running tests
      await hre.deployments.fixture(['market', 'periphery-post']);`
   })

   it('Get Pool address from AddressesProvider', async () => {
      const addressesProvider = await getPoolAddressesProvider();

      const poolAddress = await addressesProvider.getPool();

      console.log('Pool', poolAddress);
   })
})

```

## How to verify your contract deployments

```
npx hardhat --network XYZ etherscan-verify --api-key YZX
```

## Project Structure

| Path                  | Description                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| deploy/               | Main deployment scripts dir location                                                                                            |
| ├─ 00-core/           | Core deployment, only needed to run once per network.                                                                           |
| ├─ 01-periphery_pre/  | Periphery contracts deployment, only need to run once per network.                                                              |
| ├─ 02-market/         | Market deployment scripts, depends of Core and Periphery deployment.                                                            |
| ├─ 03-periphery_post/ | Periphery contracts deployment after market is deployed.                                                                        |
| deployments/          | Artifacts location of the deployments, contains the addresses, the abi, solidity input metadata and the constructor parameters. |
| markets/              | Directory to configure Aave markets                                                                                             |
| tasks/                | Hardhat tasks to setup and review market configs                                                                                |
| helpers/              | Utility helpers to manage configs and deployments                                                                               |

## License

Please be aware that [Aave V3](https://github.com/aave/aave-v3-core) is under [BSUL](https://github.com/aave/aave-v3-core/blob/master/LICENSE.md) license as of 27 January 2023 or date specified at v3-license-date.aave.eth. The Licensor hereby grants you the right to copy, modify, create derivative works, redistribute, and make non-production use of the Licensed Work. Any exceptions to this license may be specified by Aave governance. This repository containing the deployment scripts for the Aave V3 smart contracts can only be used for local or testing purposes. If you wish to deploy to a production environment you can reach out to Aave Governance [here](https://governance.aave.com/).

## Addresses

Testnet addresses:

```bash

┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                                 │ address                                      │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│ PoolAddressesProviderRegistry           │ '0xD83C9f1B0DaFb1992eF92ac62D6509e54AD4eD48' │
│ SupplyLogic                             │ '0x0d6e43d4d7944408d9a5A10BC57B4348d61cD764' │
│ BorrowLogic                             │ '0xc90C13734D20e27904dF248FB850f50C81CE3642' │
│ LiquidationLogic                        │ '0xFCc4Ba754Ae127396D3c6dCA507389b5A5b6EFAe' │
│ EModeLogic                              │ '0x473A31861aB89d5D7a78E7efc57ad31d84ED5343' │
│ BridgeLogic                             │ '0xBd57b20c3671cDb9a6bD2d847bC3C33e441B8a02' │
│ ConfiguratorLogic                       │ '0x3A25408D952F91e42F39587820bEe5f051f4556c' │
│ FlashLoanLogic                          │ '0xA6407325fF7DAAB36D20992dADC031c82D1C4390' │
│ PoolLogic                               │ '0xE65B75e7A8de220bcfec86F58c4c25A62aB7CD9b' │
│ TreasuryProxy                           │ '0x1Fb0D426927Dab092Def63b73E1397b3F29E7b33' │
│ Treasury-Controller                     │ '0xB4059a6808Af368A69d12FBbD104Bb6B9c37e629' │
│ Treasury-Implementation                 │ '0xe4FEed16F54b4244C174b408Ba3B5F1f19DD1E4D' │
│ PoolAddressesProvider-Bitfinity         │ '0xA388228A1fA75a5F5844226E2874d7EE4d940256' │
│ PoolDataProvider-Bitfinity              │ '0x329058C12E8B269BFA0896c8705b427c5Dd26b96' │
│ Pool-Implementation                     │ '0x514b34d5c6e2e29502FB302aCD09730B5C298070' │
│ PoolConfigurator-Implementation         │ '0x807951d1F003c2161CdA995168383b54127755d5' │
│ ReservesSetupHelper                     │ '0x4D5D3FaE9b08a4FA2aEB9Bc0d86E3dB3b3126438' │
│ ACLManager-Bitfinity                    │ '0x0CA1caF038546b20380B2bd88fbcf604D5066628' │
│ AaveOracle-Bitfinity                    │ '0x2C328D592819524F741A88A18572372CCE196782' │
│ Pool-Proxy-Bitfinity                    │ '0xD8B9c8934049Ed80f497489f9eE5139aa044FC0e' │
│ PoolConfigurator-Proxy-Bitfinity        │ '0x4f397754f18B5d54E4BdfB34DaCfb63E4c61D4aB' │
│ EmissionManager                         │ '0x43f48B2eAF8a3f2F573136F25C1aE3C6924F1E3e' │
│ IncentivesV2-Implementation             │ '0x47CD4297b04621b2CE041eAe635416e1b65f147f' │
│ IncentivesProxy                         │ '0x5d0352475e1884D72169d0ccf91272321787BE61' │
│ AToken-Bitfinity                        │ '0xD1586f4624775920121A0D58A785F46e9f91500d' │
│ DelegationAwareAToken-Bitfinity         │ '0x1D0DC97cdD22b8D6D763083722962418eae8F2Ff' │
│ StableDebtToken-Bitfinity               │ '0xe28041BF5e9f8fC51dc84bFc39757557a70dC860' │
│ VariableDebtToken-Bitfinity             │ '0x549286e5CdafFDAb91b78b0ee8A670Af12E35F23' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0x9505E8B8546cC9015B2c015826d25821CC48C153' │
│ ReserveStrategy-rateStrategyStableOne   │ '0xc9D18D86f1c101Dc87A09e683875004A02a67607' │
│ ReserveStrategy-rateStrategyStableTwo   │ '0xB4f34879C2c3db50934E5069CE01fD5EcE3Aa051' │
│ CHAP-AToken-Bitfinity                   │ '0x0457d47d212C1E19406b8BfAbAB511D90F976d77' │
│ CHAP-VariableDebtToken-Bitfinity        │ '0xFbEDa1361027CBA3752F2d9aC7153835bC2fb8ca' │
│ CHAP-StableDebtToken-Bitfinity          │ '0xc2F17c45b74022D965DD2BdCB2599867D00d127A' │
│ WBFT-AToken-Bitfinity                   │ '0x523d3b74A239948b2C0f9a752d0F41440Ad5599c' │
│ WBFT-VariableDebtToken-Bitfinity        │ '0x5a19A0E7f2fe439ae2BeF2CcBCF494a21e990713' │
│ WBFT-StableDebtToken-Bitfinity          │ '0xf6020D99033ee977B9E218201636ba4983CC5ca2' │
│ COD-AToken-Bitfinity                    │ '0xdA9ed2ffD6bfB88957b7E5dBE27201382cC54200' │
│ COD-VariableDebtToken-Bitfinity         │ '0x785aE431B0258148Ecdaf14A6A5269eF728C2eb1' │
│ COD-StableDebtToken-Bitfinity           │ '0xFc630bf5A36a0b649F1fb393e298E1527DAA919f' │
│ CVA-AToken-Bitfinity                    │ '0x165f56c2465490C46f1CE85e4aC1BC3d8fBf7251' │
│ CVA-VariableDebtToken-Bitfinity         │ '0x7AAd53c0f69a9Da78c65214b54bc540A9fA0EE70' │
│ CVA-StableDebtToken-Bitfinity           │ '0xfDf2D66ee3AD4142d9e1Cac9fA5E1Dbe56Ab426C' │
│ CYN-AToken-Bitfinity                    │ '0x24174Cc4e6aE73e7e98AC62d711e1BAbc5Aa48E8' │
│ CYN-VariableDebtToken-Bitfinity         │ '0xA3C75a621d12f7FbDE3Fe09aE3bA22081AfAA46D' │
│ CYN-StableDebtToken-Bitfinity           │ '0xBb865BCe5e00B48318ce387895F906325a812A14' │
│ CAL-AToken-Bitfinity                    │ '0x9A211F60635c9E0040722975182d0cCf07E9E509' │
│ CAL-VariableDebtToken-Bitfinity         │ '0xbe3fE74Bf5b79C0e572F73C5EC38B86ff6789530' │
│ CAL-StableDebtToken-Bitfinity           │ '0xCDd8D8324A6980CBe00Db23FBB826F312Efac2dC' │
│ FNS-AToken-Bitfinity                    │ '0xE5A372AE450bca34754801EeAA0e0e70E6fdF1A9' │
│ FNS-VariableDebtToken-Bitfinity         │ '0x2cb71BE45ea388f79ce7361d2aA693FdA2b23C20' │
│ FNS-StableDebtToken-Bitfinity           │ '0xE07D02788c364a38387c3De93393b9434Cf8d912' │
│ INT-AToken-Bitfinity                    │ '0x91FCc9F77F90906dAFd26c8435a04d1D4Dd0Ea11' │
│ INT-VariableDebtToken-Bitfinity         │ '0x981d467c2B0d32628c3808DA26a7A1E9Aa7bb1b5' │
│ INT-StableDebtToken-Bitfinity           │ '0x9ba575E7F292f72F47f601b2814ba4aCA6faDd32' │
│ TUSDT-AToken-Bitfinity                  │ '0x1f508F593C20F6aECD0eD525c9Af01D465C13377' │
│ TUSDT-VariableDebtToken-Bitfinity       │ '0x05E0a82dF31839ceE2a9e956a01d47B7BA23c64b' │
│ TUSDT-StableDebtToken-Bitfinity         │ '0x02683BC8A310787EA7b14534cF612B19aaBD378a' │
│ WrappedTokenGatewayV3                   │ '0x81B2b28442e743954C8678b0d2e4be396976F561' │
│ WalletBalanceProvider                   │ '0xfd3Cb0fFE63B1fDBBE257b9AdFCCC065f300C829' │
│ UiIncentiveDataProviderV3               │ '0x361Da44d0B5dAcC8F1c375093f5a7c90dfdA24A3' │
│ UiPoolDataProviderV3                    │ '0x7f3fF452D3da0EAD3ce227eB4A6c84E896685C3C' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘

```
