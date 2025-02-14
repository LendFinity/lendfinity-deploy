import { IAaveConfiguration, eBitfinityNetwork } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWLYX, strategyCHILL, strategyUSDC } from "./reservesConfigs";

export const BitfinityMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 41,
  WrappedNativeTokenSymbol: "WLYX",
  MarketId: "Lukso Lendfinity Market",
  ATokenNamePrefix: "Lukso",
  StableDebtTokenNamePrefix: "Lukso",
  VariableDebtTokenNamePrefix: "Lukso",
  SymbolPrefix: "Lyx",
  ReservesConfig: {
    WLYX: strategyWLYX,
    CHILL: strategyCHILL,
    USDC: strategyUSDC,
  },
  ReserveAssets: {
    [eBitfinityNetwork.main]: {
      WLYX: "0x2dB41674F2b882889e5E1Bd09a3f3613952bC472",
      CHILL: "0x5b8b0e44d4719f8a328470dccd3746bfc73d6b14",
    },
    [eBitfinityNetwork.testnet]: {
      WLYX: "",
      USDC: "0xc5966895Be96BE5cc6DE336B63fD41F60c75B917",
    },
  },
  // ReserveFactorTreasuryAddress: {
  //   [eBitfinityNetwork.main]: "",
  // },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: [],
    },
  },
  ChainlinkAggregator: {
    [eBitfinityNetwork.main]: {
      WLYX: "0x3153e4d03Cf97B230fc9c9d0ECCE5b2F0834d130",
      CHILL: "0xc675A8d220E1ba6d14a77C9FbcFDd5f9474BD07A",
    },
    [eBitfinityNetwork.testnet]: {
      WLYX: "",
      USDC: "",
    },
  },
};

export default BitfinityMarket;
