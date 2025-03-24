import { HardhatRuntimeEnvironment } from "hardhat/types";
import { eBitfinityNetwork, eLuksoNetwork, getTreasuryAddress, initReservesByHelper, waitForTx } from "../helpers";
import BitfinityMarket from "../markets/bitfinity";
import LuksoMarket from "../markets/lukso";

// import func from '../deploy/02_market/09_init_reserves'


declare var hre: HardhatRuntimeEnvironment;


// This script adds a new reserve to the market

// https://explorer.testnet.bitfinity.network/address/0x4f397754f18B5d54E4BdfB34DaCfb63E4c61D4aB

async function main() {
  const [,,,,,,signer] = await hre.ethers.getSigners();
  const gasPrice = hre.ethers.utils.parseUnits('10', 'gwei');
  const gasLimit = 10000000;


  // const initReserveABI = [
  //   "function initReserves(tuple(address aTokenImpl, address stableDebtTokenImpl, address variableDebtTokenImpl, uint8 underlyingAssetDecimals,address interestRateStrategyAddress, address underlyingAsset, address treasury, address incentivesController, string aTokenName, string aTokenSymbol, string variableDebtTokenName, string variableDebtTokenSymbol, string stableDebtTokenName, string stableDebtTokenSymbol, bytes params)[] input) external"
  // ];
  // const poolConfiguratorAddress = "0x8Af2496be337886c843816d969bD3F2a7A8c2d3E";
  // const poolConfiguratorContract = new ethers.Contract(poolConfiguratorAddress, initReserveABI, signer);

  // // Prepare the input for initReserves
  // const initReserveInput = [
  //   {
  //     aTokenImpl: '0x89B2343A535e97f651251184E94a68B998cB1F8b',
  //     stableDebtTokenImpl: '0x7B6dA53e31570f09c0BC468a4398Aa778B79A7d9',
  //     variableDebtTokenImpl: '0xbAfFe3a49359095915222AC2FA089Eda5C73b744',
  //     underlyingAssetDecimals: 18,
  //     interestRateStrategyAddress: '0xeAe2e6d9e5f2847515Fe4b471DB96AfE82b6b9A5',
  //     underlyingAsset: '0x4B6bcCA9a8D707DaCA69485d14836779AeD947E5',
  //     treasury: '0x5fab43F1414aBb62d33597687DF3e67Edf1C14a3',
  //     incentivesController: '0x37861B6B5bC02026b05476d527a92B72116C12b5',
  //     underlyingAssetName: 'WBFT',
  //     aTokenName: 'Lendfinity Bitfinity WBFT',
  //     aTokenSymbol: 'aBftWBFT',
  //     variableDebtTokenName: 'Lendfinity Bitfinity Variable Debt WBFT',
  //     variableDebtTokenSymbol: 'variableDebtBftWBFT',
  //     stableDebtTokenName: 'Lendfinity Bitfinity Stable Debt WBFT',
  //     stableDebtTokenSymbol: 'stableDebtBftWBFT',
  //     params: '0x10'
  //   }
  // ];

  // const tx = await waitForTx(
  //   await poolConfiguratorContract.initReserves(initReserveInput, { gasLimit, gasPrice })
  // )

  // ----------------------------

  const { ReservesConfig, ReserveAssets, ATokenNamePrefix, StableDebtTokenNamePrefix, VariableDebtTokenNamePrefix, SymbolPrefix } = LuksoMarket

  const treasuryAddress = await getTreasuryAddress(LuksoMarket, eLuksoNetwork.testnet);

  await initReservesByHelper(
    ReservesConfig,
    ReserveAssets?.["lukso-testnet"]!,
    ATokenNamePrefix,
    StableDebtTokenNamePrefix,
    VariableDebtTokenNamePrefix,
    SymbolPrefix,
    signer.address,
    treasuryAddress,
    "0x0096876099884f89df4c0Cbf061e646bCC59f5A8"
  );

  // ----------------------------

  // try {
  //   const tx = await func(hre)


  //   console.log(tx)
  // } catch (error) {
  //   console.log(error)
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


