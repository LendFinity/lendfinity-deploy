import {
  rateStrategyStableTwo,
  rateStrategyVolatileOne,
} from "./../aave/rateStrategies";
import { eContractid, IReserveParams } from "../../helpers/types";

export const strategyWTARA: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "8050",
  liquidationThreshold: "8300",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "10000000",
  borrowCap: "5000000",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableTwo,
  baseLTVAsCollateral: "7500",
  liquidationThreshold: "7800",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "100000",
  borrowCap: "90000",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyUSDT: IReserveParams = {
  strategy: rateStrategyStableTwo,
  baseLTVAsCollateral: "7500",
  liquidationThreshold: "7800",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "100000",
  borrowCap: "90000",
  debtCeiling: "0",
  borrowableIsolation: false,
};
