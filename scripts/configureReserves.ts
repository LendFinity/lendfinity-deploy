import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  configureReservesByHelper,
  eBitfinityNetwork,
  getTreasuryAddress,
  initReservesByHelper,
  waitForTx,
} from "../helpers";
import BitfinityMarket from "../markets/bitfinity";
import { strategyCKUSDC, strategyICP, strategyWBFT } from "../markets/bitfinity/reservesConfigs";

// import func from '../deploy/02_market/09_init_reserves'

declare var hre: HardhatRuntimeEnvironment;

// This script adds a new reserve to the market

// https://explorer.testnet.bitfinity.network/address/0x4f397754f18B5d54E4BdfB34DaCfb63E4c61D4aB

async function main() {
  const { ReservesConfig, ReserveAssets, ATokenNamePrefix, StableDebtTokenNamePrefix, VariableDebtTokenNamePrefix, SymbolPrefix } = BitfinityMarket

  await configureReservesByHelper(ReservesConfig, ReserveAssets?.bitfinity || {});

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
