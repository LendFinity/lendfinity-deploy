import { IAaveConfiguration, eTaraxaNetwork } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWTARA, strategyUSDT, strategyUSDC } from "./reservesConfigs";

export const TaraxaMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 42,
  WrappedNativeTokenSymbol: "WTARA",
  MarketId: "Taraxa Lendfinity Market",
  ATokenNamePrefix: "Taraxa",
  StableDebtTokenNamePrefix: "Taraxa",
  VariableDebtTokenNamePrefix: "Taraxa",
  SymbolPrefix: "Tara",
  ReservesConfig: {
    WTARA: strategyWTARA,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
  },
  ReserveAssets: {
    [eTaraxaNetwork.main]: {
      WTARA: "0x4B6bcCA9a8D707DaCA69485d14836779AeD947E5",
      USDT: "0xfd4de66eca49799bdde66eb33654e2198ab7bba4",
      USDC: "0x51ccde9ca75d95bb55ece1775fcbff91324b18a6",
    },
    [eTaraxaNetwork.testnet]: {
      WTARA: "0xb7FBeB1d175C05b30FB45c57cA4B272767C1C65C",
      USDT: "0x7938ACd297d53bD743c3926E3C24e7262C18AEc3",
      USDC: "0x9581aa53E089F4E8f0B3c566f00121DF7c83c83B",
    },
  },
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
    [eTaraxaNetwork.main]: {
      WBFT: "0x6c457F0014BcD42562ca156c819803864780e5f6",
      RICH: "0x93c52eDAE4d4307703568d213ADbD6Ff0e87a5b8",
      ICP: "0x0A2e2AaB8809764dbF2479d9119463eD185Af3B6",
    },
  },
};

export default TaraxaMarket;
