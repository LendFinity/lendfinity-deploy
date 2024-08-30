import { IAaveConfiguration, eBitfinityNetwork } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  strategyWBFT,
  strategyCHAP,
  strategyINT,
  strategyCOD,
  strategyCAL,
  strategyCVA,
  strategyCYN,
  strategyFNS,
  strategyTUSDT,
} from "./reservesConfigs";

export const BitfinityMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 40,
  WrappedNativeTokenSymbol: "WBFT",
  MarketId: "Bitfinity Lendfinity Market",
  ATokenNamePrefix: "Bitfinity",
  StableDebtTokenNamePrefix: "Bitfinity",
  VariableDebtTokenNamePrefix: "Bitfinity",
  SymbolPrefix: "Bft",
  ReservesConfig: {
    WBFT: strategyWBFT,
    CHAP: strategyCHAP,
    INT: strategyINT,
    COD: strategyCOD,
    CAL: strategyCAL,
    CVA: strategyCVA,
    CYN: strategyCYN,
    FNS: strategyFNS,
    TUSDT: strategyTUSDT,
  },
  ReserveAssets: {
    [eBitfinityNetwork.testnet]: {
      CHAP: "0x9581aa53E089F4E8f0B3c566f00121DF7c83c83B",
      WBFT: "0x7938ACd297d53bD743c3926E3C24e7262C18AEc3",
      COD: "0xc489778CD7DB9427a730F30BD66a57762DE96628",
      CVA: "0x42AbC7B10224E2e7Ea721FC5e002BAe561BA6659",
      CYN: "0x1bBB2533Dcd95D7E347bC278c5b6398b5f7c83EC",
      CAL: "0xaFD885e805B78C13DF22118695ef3F4dc582656D",
      FNS: "0xD89E302C8ac7AbAa4eC6016961e04692cccb6039",
      INT: "0xa9449C8E42D5D49a2B5031A843747B342816dC13",
      TUSDT: "0xbd9A5c1d9fBbBEC84633ec9Cb046C01fB79809f2",
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["TUSDT"],
    },
  },
  ChainlinkAggregator: {
    [eBitfinityNetwork.testnet]: {
      CHAP: "0xcFe2E020E3e4DC28Ee29A601CbE7551364fC7AD4",
      WBFT: "0x7beFdBbbf4d686C2c67bcb958cF542f1a2146d91",
      CAL: "0x17a8dED9bAC8CB69aeCF8BF44Dc5A16f2eB1bf03",
      COD: "0x886A8673bF39d258F0bF494c5F4ff4D34ac27657",
      CVA: "0x52AA7928063b4B685E197c6567D850781498a7d0",
      CYN: "0x6865D26541F3582028C6596194bBBE77aD296847",
      FNS: "0x8F1A47187e07f3fadC561f40f82eb4FE20468bb8",
      INT: "0x8fB5F54dAEB90e124D3EDc0Ba3132Fe03af0a0De",
    },
  },
};

export default BitfinityMarket;
