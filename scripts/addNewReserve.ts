import { HardhatRuntimeEnvironment } from "hardhat/types";
import { waitForTx } from "../helpers";

// import func from '../deploy/02_market/09_init_reserves'


declare var hre: HardhatRuntimeEnvironment;


// This script adds a new reserve to the market

// https://explorer.testnet.bitfinity.network/address/0x4f397754f18B5d54E4BdfB34DaCfb63E4c61D4aB

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const gasPrice = hre.ethers.utils.parseUnits('10', 'gwei');
  const gasLimit = 10000000;


  const initReserveABI = [
    "function initReserves(tuple(address aTokenImpl, address stableDebtTokenImpl, address variableDebtTokenImpl, uint8 underlyingAssetDecimals,address interestRateStrategyAddress, address underlyingAsset, address treasury, address incentivesController, string aTokenName, string aTokenSymbol, string variableDebtTokenName, string variableDebtTokenSymbol, string stableDebtTokenName, string stableDebtTokenSymbol, bytes params)[] input) external"
  ];
  const poolConfiguratorAddress = "0x4f397754f18B5d54E4BdfB34DaCfb63E4c61D4aB";
  const poolConfiguratorContract = new ethers.Contract(poolConfiguratorAddress, initReserveABI, signer);

  // Prepare the input for initReserves
  const initReserveInput = [
    {
      aTokenImpl: '0xD1586f4624775920121A0D58A785F46e9f91500d',
      stableDebtTokenImpl: '0xe28041BF5e9f8fC51dc84bFc39757557a70dC860',
      variableDebtTokenImpl: '0x549286e5CdafFDAb91b78b0ee8A670Af12E35F23',
      underlyingAssetDecimals: 18,
      interestRateStrategyAddress: '0x9505e8b8546cc9015b2c015826d25821cc48c153',
      underlyingAsset: '0x1Be94873D881ABC9c45Be654e3491728292ff8C7',
      treasury: '0x1Fb0D426927Dab092Def63b73E1397b3F29E7b33',
      incentivesController: '0x5d0352475e1884D72169d0ccf91272321787BE61',
      underlyingAssetName: 'MNX',
      aTokenName: 'Lendfinity Bitfinity MNX',
      aTokenSymbol: 'aBftMNX',
      variableDebtTokenName: 'Lendfinity Bitfinity Variable Debt MNX',
      variableDebtTokenSymbol: 'variableDebtBftMNX',
      stableDebtTokenName: 'Lendfinity Bitfinity Stable Debt MNX',
      stableDebtTokenSymbol: 'stableDebtBftMNX',
      params: '0x10'
    }
  ];

  const tx = await waitForTx(
    await poolConfiguratorContract.initReserves(initReserveInput, { gasLimit, gasPrice })
  )

  // ----------------------------

  // const { ReservesConfig, ReserveAssets, ATokenNamePrefix, StableDebtTokenNamePrefix, VariableDebtTokenNamePrefix, SymbolPrefix } = BitfinityMarket

  // const treasuryAddress = await getTreasuryAddress(BitfinityMarket, eBitfinityNetwork.main);

  // await initReservesByHelper(
  //   ReservesConfig,
  //   ReserveAssets?.bitfinity!,
  //   ATokenNamePrefix,
  //   StableDebtTokenNamePrefix,
  //   VariableDebtTokenNamePrefix,
  //   SymbolPrefix,
  //   signer.address,
  //   treasuryAddress,
  //   "0x393ceb0230827066485267508A21Bf4A5f83C685"
  // );

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


