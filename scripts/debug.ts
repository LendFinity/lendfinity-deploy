import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseUnitsFromToken, waitForTx } from "../helpers";

declare var hre: HardhatRuntimeEnvironment;

async function main() {
  const [signer] = await hre.ethers.getSigners();
  

  const uiAddress = "0xda303B11b98b51Fca6718F06380feE2B6290B1D1";
  const priceFeed= "0x4B24fBf4dcea9Ac820AB92e6695ADEb3BFE29b92";
  const oracleAddress = "0xa798f849acbaBD9104A6227eC8A601Fb9Ec91682";

  const oracleContract = new ethers.Contract(
    oracleAddress,
    oracleAbi,
  signer
);


    const priceFeedContract = new ethers.Contract(
      priceFeed,
      priceFeedAbi,
    signer
  );


  const uiPool = new ethers.Contract(
    uiAddress,
    abi,
  signer
  );

// const tx = await oracleContract.getAssetsPrices(["0x1244985EAb2fC01d07f20Af014b21BdA52a8379E",
//       "0x17945B83a73c8036849727df50F6a579287F6A09",])

const tx = await uiPool.getReservesData("0x7cE75E2609F1e5C94B0EC9c7B0A46ffD20551982")
console.log(tx)


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  
  const oracleAbi = [
    {
      "inputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "assets",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "sources",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "fallbackOracle",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "baseCurrency",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "baseCurrencyUnit",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "source",
          "type": "address"
        }
      ],
      "name": "AssetSourceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "baseCurrency",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseCurrencyUnit",
          "type": "uint256"
        }
      ],
      "name": "BaseCurrencySet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "fallbackOracle",
          "type": "address"
        }
      ],
      "name": "FallbackOracleUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ADDRESSES_PROVIDER",
      "outputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "BASE_CURRENCY",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "BASE_CURRENCY_UNIT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getAssetPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "assets",
          "type": "address[]"
        }
      ],
      "name": "getAssetsPrices",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFallbackOracle",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getSourceOfAsset",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "assets",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "sources",
          "type": "address[]"
        }
      ],
      "name": "setAssetSources",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "fallbackOracle",
          "type": "address"
        }
      ],
      "name": "setFallbackOracle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

const priceFeedAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_decimals",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_version",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "answer",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        }
      ],
      "name": "AnswerUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "int256",
          "name": "current",
          "type": "int256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        }
      ],
      "name": "AnswerUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "startedBy",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        }
      ],
      "name": "NewRound",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "currentRoundId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "description",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_roundId",
          "type": "uint256"
        }
      ],
      "name": "getAnswer",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint80",
          "name": "_roundId",
          "type": "uint80"
        }
      ],
      "name": "getRoundData",
      "outputs": [
        {
          "internalType": "uint80",
          "name": "roundId",
          "type": "uint80"
        },
        {
          "internalType": "int256",
          "name": "answer",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint80",
          "name": "answeredInRound",
          "type": "uint80"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_roundId",
          "type": "uint256"
        }
      ],
      "name": "getTimestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestAnswer",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestRound",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestRoundData",
      "outputs": [
        {
          "internalType": "uint80",
          "name": "roundId",
          "type": "uint80"
        },
        {
          "internalType": "int256",
          "name": "answer",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "startedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "updatedAt",
          "type": "uint256"
        },
        {
          "internalType": "uint80",
          "name": "answeredInRound",
          "type": "uint80"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "latestTimestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pairDecimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pairDescription",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pairVersion",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rounds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "answer",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "updatePrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  
  const abi= [
    {
      "inputs": [
        {
          "internalType": "contract IEACAggregatorProxy",
          "name": "_networkBaseTokenPriceInUsdProxyAggregator",
          "type": "address"
        },
        {
          "internalType": "contract IEACAggregatorProxy",
          "name": "_marketReferenceCurrencyPriceInUsdProxyAggregator",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ETH_CURRENCY_UNIT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MKR_ADDRESS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_bytes32",
          "type": "bytes32"
        }
      ],
      "name": "bytes32ToString",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getReservesData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "underlyingAsset",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "decimals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "baseLTVasCollateral",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveLiquidationThreshold",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveLiquidationBonus",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveFactor",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "usageAsCollateralEnabled",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "borrowingEnabled",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "stableBorrowRateEnabled",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isFrozen",
              "type": "bool"
            },
            {
              "internalType": "uint128",
              "name": "liquidityIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "variableBorrowIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "liquidityRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "variableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "stableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint40",
              "name": "lastUpdateTimestamp",
              "type": "uint40"
            },
            {
              "internalType": "address",
              "name": "aTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "stableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "variableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "interestRateStrategyAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "availableLiquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalPrincipalStableDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "averageStableRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stableDebtLastUpdateTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalScaledVariableDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "priceInMarketReferenceCurrency",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceOracle",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "variableRateSlope1",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "variableRateSlope2",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stableRateSlope1",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stableRateSlope2",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "baseStableBorrowRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "baseVariableBorrowRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "optimalUsageRatio",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSiloedBorrowing",
              "type": "bool"
            },
            {
              "internalType": "uint128",
              "name": "accruedToTreasury",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "unbacked",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "isolationModeTotalDebt",
              "type": "uint128"
            },
            {
              "internalType": "bool",
              "name": "flashLoanEnabled",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "debtCeiling",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "debtCeilingDecimals",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "eModeCategoryId",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "borrowCap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "supplyCap",
              "type": "uint256"
            },
            {
              "internalType": "uint16",
              "name": "eModeLtv",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "eModeLiquidationThreshold",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "eModeLiquidationBonus",
              "type": "uint16"
            },
            {
              "internalType": "address",
              "name": "eModePriceSource",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "eModeLabel",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "borrowableInIsolation",
              "type": "bool"
            }
          ],
          "internalType": "struct IUiPoolDataProviderV3.AggregatedReserveData[]",
          "name": "",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "marketReferenceCurrencyUnit",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "marketReferenceCurrencyPriceInUsd",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "networkBaseTokenPriceInUsd",
              "type": "int256"
            },
            {
              "internalType": "uint8",
              "name": "networkBaseTokenPriceDecimals",
              "type": "uint8"
            }
          ],
          "internalType": "struct IUiPoolDataProviderV3.BaseCurrencyInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getReservesList",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserReservesData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "underlyingAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "scaledATokenBalance",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "usageAsCollateralEnabledOnUser",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "stableBorrowRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "scaledVariableDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "principalStableDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stableBorrowLastUpdateTimestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct IUiPoolDataProviderV3.UserReserveData[]",
          "name": "",
          "type": "tuple[]"
        },
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "marketReferenceCurrencyPriceInUsdProxyAggregator",
      "outputs": [
        {
          "internalType": "contract IEACAggregatorProxy",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "networkBaseTokenPriceInUsdProxyAggregator",
      "outputs": [
        {
          "internalType": "contract IEACAggregatorProxy",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],



  /*
  
  curl -X POST https://rpc.testnet.lukso.network \
-H "Content-Type: application/json" \
--data '{
  "jsonrpc": "2.0",
  "method": "eth_call",
  "params": [{
    "from": "0xD919D5ca385c3847B65405fF92Cb46667FDaac9C",
    "to": "0x05EBf12991b5DB80BD89d2AAcD711C1C6FB20D0F",
    "data": "0xec489c21000000000000000000000000beb703083b3a558932be88d63a4112e6ec7ca7c6"
  }, "latest"],
  "id": 1
}'
  
  
  */