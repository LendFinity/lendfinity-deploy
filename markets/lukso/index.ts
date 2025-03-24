import { IAaveConfiguration, eBitfinityNetwork, eLuksoNetwork } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWLYX, strategyCHILL, strategyUSDC, strategySLYX } from "./reservesConfigs";

export const LuksoMarket: IAaveConfiguration = {
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
    // SLYX: strategySLYX,
    // CHILL: strategyCHILL,
    // USDC: strategyUSDC,
  },
  ReserveAssets: {
    [eLuksoNetwork.main]: {
      WLYX: "0x2dB41674F2b882889e5E1Bd09a3f3613952bC472",
      CHILL: "0x5b8b0e44d4719f8a328470dccd3746bfc73d6b14",
    },
    [eLuksoNetwork.testnet]: {
      WLYX: "0x1244985EAb2fC01d07f20Af014b21BdA52a8379E",
      // SLYX: "0x17945B83a73c8036849727df50F6a579287F6A09",
    },
    hardhat: {
      WLYX: "0x1244985EAb2fC01d07f20Af014b21BdA52a8379E",
      // SLYX: "0x17945B83a73c8036849727df50F6a579287F6A09",
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
    [eLuksoNetwork.main]: {
      WLYX: "0x3153e4d03Cf97B230fc9c9d0ECCE5b2F0834d130",
      CHILL: "0xc675A8d220E1ba6d14a77C9FbcFDd5f9474BD07A",
    },
    [eLuksoNetwork.testnet]: {
      WLYX: "0x901dE303058616841136756894fFe58e3f566765",
      SLYX: "0x4B24fBf4dcea9Ac820AB92e6695ADEb3BFE29b92",
      // CHILL: "0xc675A8d220E1ba6d14a77C9FbcFDd5f9474BD07A",
      // USDC: "0x3153e4d03Cf97B230fc9c9d0ECCE5b2F0834d130",
    },
    hardhat: {
      WLYX: "0x901dE303058616841136756894fFe58e3f566765",
      SLYX: "0x4B24fBf4dcea9Ac820AB92e6695ADEb3BFE29b92",
    },
  },
};

export default LuksoMarket;
