import { IAaveConfiguration, eTaraxaNetwork } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  strategyWTARA,
  strategystTARA,
  strategyWETH,
  strategyUSDT,
  strategyUSDC,
} from "./reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers/constants";

export const TaraxaMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 38,
  WrappedNativeTokenSymbol: "WTARA",
  MarketId: "Taraxa Taralend Market",
  ATokenNamePrefix: "Taraxa",
  StableDebtTokenNamePrefix: "Taraxa",
  VariableDebtTokenNamePrefix: "Taraxa",
  SymbolPrefix: "Tara",
  ReservesConfig: {
    WTARA: strategyWTARA,
    stTARA: strategystTARA,
    WETH: strategyWETH,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
  },
  ReserveAssets: {
    [eTaraxaNetwork.main]: {
      WTARA: "0x4B6bcCA9a8D707DaCA69485d14836779AeD947E5",
      stTARA: "0x37Df886BE517F9c75b27Cb70dac0D61432C92FBE",
      WETH: "0x39b1fC930C43606af5C353e90a55db10bCaF4087",
      USDT: "0xfd4de66eca49799bdde66eb33654e2198ab7bba4",
      // USDC: "",
    },
    [eTaraxaNetwork.testnet]: {
      WTARA: ZERO_ADDRESS,
      stTARA: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "USDT"],
    },
  },
  ChainlinkAggregator: {
    // [eTaraxaNetwork.main]: {
    //   WTARA: "",
    //   stTARA: "",
    //   WETH: "",
    //   USDT: "",
    //   USDC: "",
    // },
  },
};

export default TaraxaMarket;
