import {
  DETERMINISTIC_DEPLOYMENT,
  DETERMINISTIC_FACTORIES,
  ETHERSCAN_KEY,
  getCommonNetworkConfig,
  hardhatNetworkSettings,
  loadTasks,
} from "./helpers/hardhat-config-helpers";
import {
  eArbitrumNetwork,
  eAvalancheNetwork,
  eEthereumNetwork,
  eFantomNetwork,
  eHarmonyNetwork,
  eOptimismNetwork,
  ePolygonNetwork,
  eBaseNetwork,
  eBitfinityNetwork,
  eLuksoNetwork,
  eTaraxaNetwork,
  eMonadNetwork,
} from "./helpers/types";
import { DEFAULT_NAMED_ACCOUNTS } from "./helpers/constants";

import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-contract-sizer";
import "hardhat-dependency-compiler";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-etherscan";
import "dotenv";

const SKIP_LOAD = process.env.SKIP_LOAD === "true";
const TASK_FOLDERS = ["misc", "market-registry"];

// Prevent to load tasks before compilation and typechain
if (!SKIP_LOAD) {
  loadTasks(TASK_FOLDERS);
}

export default {
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: { enabled: true, runs: 100_000 },
          evmVersion: "berlin",
        },
      },
      {
        version: "0.7.5",
        settings: {
          optimizer: { enabled: true, runs: 100_000 },
        },
      },
    ],
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  networks: {
    hardhat: hardhatNetworkSettings,
    localhost: {
      url: "http://127.0.0.1:8545",
      ...hardhatNetworkSettings,
    },
    tenderly: getCommonNetworkConfig("tenderly", 1),
    main: getCommonNetworkConfig(eEthereumNetwork.main, 1),
    kovan: getCommonNetworkConfig(eEthereumNetwork.kovan, 42),
    rinkeby: getCommonNetworkConfig(eEthereumNetwork.rinkeby, 4),
    ropsten: getCommonNetworkConfig(eEthereumNetwork.ropsten, 3),
    [eBitfinityNetwork.main]: getCommonNetworkConfig(
      eBitfinityNetwork.main,
      355110
    ),
    [eBitfinityNetwork.testnet]: getCommonNetworkConfig(
      eBitfinityNetwork.testnet,
      355113
    ),
    [eLuksoNetwork.main]: getCommonNetworkConfig(eLuksoNetwork.main, 42),
    [eLuksoNetwork.testnet]: getCommonNetworkConfig(
      eLuksoNetwork.testnet,
      4201
    ),
    [eTaraxaNetwork.main]: getCommonNetworkConfig(eTaraxaNetwork.main, 841),
    [eTaraxaNetwork.testnet]: getCommonNetworkConfig(
      eTaraxaNetwork.testnet,
      842
    ),
    [eMonadNetwork.testnet]: getCommonNetworkConfig(
      eMonadNetwork.testnet,
      10143
    ),
    [ePolygonNetwork.polygon]: getCommonNetworkConfig(
      ePolygonNetwork.polygon,
      137
    ),
    [ePolygonNetwork.mumbai]: getCommonNetworkConfig(
      ePolygonNetwork.mumbai,
      80001
    ),
    arbitrum: getCommonNetworkConfig(eArbitrumNetwork.arbitrum, 42161),
    [eArbitrumNetwork.arbitrumTestnet]: getCommonNetworkConfig(
      eArbitrumNetwork.arbitrumTestnet,
      421611
    ),
    [eHarmonyNetwork.main]: getCommonNetworkConfig(
      eHarmonyNetwork.main,
      1666600000
    ),
    [eHarmonyNetwork.testnet]: getCommonNetworkConfig(
      eHarmonyNetwork.testnet,
      1666700000
    ),
    [eAvalancheNetwork.avalanche]: getCommonNetworkConfig(
      eAvalancheNetwork.avalanche,
      43114
    ),
    [eAvalancheNetwork.fuji]: getCommonNetworkConfig(
      eAvalancheNetwork.fuji,
      43113
    ),
    [eFantomNetwork.main]: getCommonNetworkConfig(eFantomNetwork.main, 250),
    [eFantomNetwork.testnet]: getCommonNetworkConfig(
      eFantomNetwork.testnet,
      4002
    ),
    [eOptimismNetwork.testnet]: getCommonNetworkConfig(
      eOptimismNetwork.testnet,
      420
    ),
    [eOptimismNetwork.main]: getCommonNetworkConfig(eOptimismNetwork.main, 10),
    [eEthereumNetwork.goerli]: getCommonNetworkConfig(
      eEthereumNetwork.goerli,
      5
    ),
    [eEthereumNetwork.sepolia]: getCommonNetworkConfig(
      eEthereumNetwork.sepolia,
      11155111
    ),
    [eArbitrumNetwork.goerliNitro]: getCommonNetworkConfig(
      eArbitrumNetwork.goerliNitro,
      421613
    ),
    [eBaseNetwork.base]: getCommonNetworkConfig(eBaseNetwork.base, 8453),
    [eBaseNetwork.baseGoerli]: getCommonNetworkConfig(
      eBaseNetwork.baseGoerli,
      84531
    ),
  },
  namedAccounts: {
    ...DEFAULT_NAMED_ACCOUNTS,
  },
  mocha: {
    timeout: 0,
  },
  dependencyCompiler: {
    paths: [
      "@aave/core-v3/contracts/protocol/configuration/PoolAddressesProviderRegistry.sol",
      "@aave/core-v3/contracts/protocol/configuration/PoolAddressesProvider.sol",
      "@aave/core-v3/contracts/misc/AaveOracle.sol",
      "@aave/core-v3/contracts/protocol/tokenization/AToken.sol",
      "@aave/core-v3/contracts/protocol/tokenization/DelegationAwareAToken.sol",
      "@aave/core-v3/contracts/protocol/tokenization/StableDebtToken.sol",
      "@aave/core-v3/contracts/protocol/tokenization/VariableDebtToken.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/GenericLogic.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/ValidationLogic.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/ReserveLogic.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/SupplyLogic.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/EModeLogic.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/BorrowLogic.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/BridgeLogic.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/FlashLoanLogic.sol",
      "@aave/core-v3/contracts/protocol/libraries/logic/CalldataLogic.sol",
      "@aave/core-v3/contracts/protocol/pool/Pool.sol",
      "@aave/core-v3/contracts/protocol/pool/L2Pool.sol",
      "@aave/core-v3/contracts/protocol/pool/PoolConfigurator.sol",
      "@aave/core-v3/contracts/protocol/pool/DefaultReserveInterestRateStrategy.sol",
      "@aave/core-v3/contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol",
      "@aave/core-v3/contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol",
      "@aave/core-v3/contracts/deployments/ReservesSetupHelper.sol",
      "@aave/core-v3/contracts/misc/AaveProtocolDataProvider.sol",
      "@aave/core-v3/contracts/misc/L2Encoder.sol",
      "@aave/core-v3/contracts/protocol/configuration/ACLManager.sol",
      "@aave/core-v3/contracts/dependencies/weth/WETH9.sol",
      "@aave/core-v3/contracts/mocks/helpers/MockIncentivesController.sol",
      "@aave/core-v3/contracts/mocks/helpers/MockReserveConfiguration.sol",
      "@aave/core-v3/contracts/mocks/oracle/CLAggregators/MockAggregator.sol",
      "@aave/core-v3/contracts/mocks/tokens/MintableERC20.sol",
      "@aave/core-v3/contracts/mocks/flashloan/MockFlashLoanReceiver.sol",
      "@aave/core-v3/contracts/mocks/tokens/WETH9Mocked.sol",
      "@aave/core-v3/contracts/mocks/upgradeability/MockVariableDebtToken.sol",
      "@aave/core-v3/contracts/mocks/upgradeability/MockAToken.sol",
      "@aave/core-v3/contracts/mocks/upgradeability/MockStableDebtToken.sol",
      "@aave/core-v3/contracts/mocks/upgradeability/MockInitializableImplementation.sol",
      "@aave/core-v3/contracts/mocks/helpers/MockPool.sol",
      "@aave/core-v3/contracts/mocks/helpers/MockL2Pool.sol",
      "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol",
      "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol",
      "@aave/core-v3/contracts/mocks/oracle/PriceOracle.sol",
      "@aave/core-v3/contracts/mocks/tokens/MintableDelegationERC20.sol",
      "@aave/periphery-v3/contracts/misc/UiPoolDataProviderV3.sol",
      "@aave/periphery-v3/contracts/misc/WalletBalanceProvider.sol",
      "@aave/periphery-v3/contracts/misc/WrappedTokenGatewayV3.sol",
      "@aave/periphery-v3/contracts/misc/interfaces/IWETH.sol",
      "@aave/periphery-v3/contracts/misc/UiIncentiveDataProviderV3.sol",
      "@aave/periphery-v3/contracts/rewards/RewardsController.sol",
      "@aave/periphery-v3/contracts/rewards/transfer-strategies/StakedTokenTransferStrategy.sol",
      "@aave/periphery-v3/contracts/rewards/transfer-strategies/PullRewardsTransferStrategy.sol",
      "@aave/periphery-v3/contracts/rewards/EmissionManager.sol",
      "@aave/periphery-v3/contracts/mocks/WETH9Mock.sol",
      "@aave/periphery-v3/contracts/mocks/testnet-helpers/Faucet.sol",
      "@aave/periphery-v3/contracts/mocks/testnet-helpers/TestnetERC20.sol",
      "@aave/periphery-v3/contracts/treasury/Collector.sol",
      "@aave/periphery-v3/contracts/treasury/CollectorController.sol",
      "@aave/periphery-v3/contracts/treasury/AaveEcosystemReserveV2.sol",
      "@aave/periphery-v3/contracts/treasury/AaveEcosystemReserveController.sol",
      "@aave/periphery-v3/contracts/adapters/paraswap/ParaSwapLiquiditySwapAdapter.sol",
      "@aave/periphery-v3/contracts/adapters/paraswap/ParaSwapRepayAdapter.sol",
      "@aave/periphery-v3/contracts/adapters/paraswap/ParaSwapWithdrawSwapAdapter.sol",
      "@aave/safety-module/contracts/stake/StakedAave.sol",
      "@aave/safety-module/contracts/stake/StakedAaveV2.sol",
      "@aave/safety-module/contracts/proposals/extend-stkaave-distribution/StakedTokenV2Rev3.sol",
    ],
  },
  deterministicDeployment: DETERMINISTIC_DEPLOYMENT
    ? DETERMINISTIC_FACTORIES
    : undefined,
  etherscan: {
    apiKey: {
      [eBitfinityNetwork.testnet]: "0x",
      [eBitfinityNetwork.main]: "0x",
      [eLuksoNetwork.testnet]: "0x",
      [eLuksoNetwork.main]: "0x",
      [eTaraxaNetwork.testnet]: "0x",
      [eTaraxaNetwork.main]: "0x",
      [eMonadNetwork.testnet]: "0x",
    },
    customChains: [
      {
        network: eBitfinityNetwork.testnet,
        chainId: 355113,
        urls: {
          apiURL: "https://explorer.testnet.bitfinity.network/api",
          browserURL: "https://explorer.testnet.bitfinity.network/",
        },
      },
      {
        network: eBitfinityNetwork.main,
        chainId: 355110,
        urls: {
          apiURL: "https://explorer.mainnet.bitfinity.network/api",
          browserURL: "https://explorer.mainnet.bitfinity.network/",
        },
      },
      {
        network: eLuksoNetwork.main,
        chainId: 42,
        urls: {
          apiURL: "https://explorer.execution.mainnet.lukso.network/api",
          browserURL: "https://explorer.execution.mainnet.lukso.network/",
        },
      },
      {
        network: eLuksoNetwork.testnet,
        chainId: 4201,
        urls: {
          apiURL: "https://explorer.execution.testnet.lukso.network/api",
          browserURL: "https://explorer.execution.testnet.lukso.network/",
        },
      },
      {
        network: eTaraxaNetwork.main,
        chainId: 841,
        urls: {
          apiURL: "https://tara.to/api",
          browserURL: "https://tara.to/",
        },
      },
      {
        network: eTaraxaNetwork.testnet,
        chainId: 842,
        urls: {
          apiURL: "https://testnet.to/api",
          browserURL: "https://testnet.to/",
        },
      },
      {
        network: eMonadNetwork.testnet,
        chainId: 10143,
        urls: {
          apiURL: "https://testnet.monadexplorer.com/api",
          browserURL: "https://testnet.monadexplorer.com/",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};
