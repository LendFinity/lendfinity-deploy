import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  configureReservesByHelper,
  eBitfinityNetwork,
  getTreasuryAddress,
  initReservesByHelper,
  waitForTx,
} from "../helpers";
import BitfinityMarket from "../markets/bitfinity";
import {
  strategyCKUSDC,
  strategyWBFT,
} from "../markets/bitfinity/reservesConfigs";

// import func from '../deploy/02_market/09_init_reserves'

declare var hre: HardhatRuntimeEnvironment;

// This script adds a new reserve to the market

// https://explorer.testnet.bitfinity.network/address/0x4f397754f18B5d54E4BdfB34DaCfb63E4c61D4aB

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const gasPrice = hre.ethers.utils.parseUnits("1", "gwei");
  const gasLimit = 10000000;

  const {
    ReservesConfig,
    ReserveAssets,
    ATokenNamePrefix,
    StableDebtTokenNamePrefix,
    VariableDebtTokenNamePrefix,
    SymbolPrefix,
  } = BitfinityMarket;

  await configureReservesByHelper(
    {
      WBFT: strategyWBFT,
      RICH: strategyWBFT,
      ICP: strategyWBFT,
      ckBTC: strategyWBFT,
      ckUSDC: strategyCKUSDC,
    },
    {
      WBFT: "0x4B6bcCA9a8D707DaCA69485d14836779AeD947E5",
      RICH: "0xfd4de66eca49799bdde66eb33654e2198ab7bba4",
      ICP: "0x51ccde9ca75d95bb55ece1775fcbff91324b18a6",
      ckBTC: "0x56bf74ef5d4ad161d2d8d5d576e70108f152cd35",
      ckUSDC: "0x3662afef38c94a6184cdfce8dcc60e7c305b8299",
    }
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
