import {
  rateStrategyStableOne,
  rateStrategyVolatileOne,
} from "./../aave/rateStrategies";
import { eContractid, IReserveParams } from "../../helpers/types";

export const strategyTUSDT: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "1500",
  liquidationThreshold: "3000",
  liquidationBonus: "10500",
  liquidationProtocolFee: "500",
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "2000000000",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: true,
};

export const strategyCHAP: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "6000",
  liquidationThreshold: "7000",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "0",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyWBFT: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "6500",
  liquidationThreshold: "7000",
  liquidationBonus: "11000",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyCAL: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "5000",
  liquidationThreshold: "6500",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyCOD: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "5000",
  liquidationThreshold: "6500",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyCVA: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "5000",
  liquidationThreshold: "6500",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyCYN: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "5000",
  liquidationThreshold: "6500",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyFNS: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "5000",
  liquidationThreshold: "6500",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyINT: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "5000",
  liquidationThreshold: "6500",
  liquidationBonus: "10750",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyFNS: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "1100",
  liquidationThreshold: "3700",
  liquidationBonus: "10300",
  liquidationProtocolFee: "300",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1100",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyTUSDT: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "1100",
  liquidationThreshold: "3700",
  liquidationBonus: "10300",
  liquidationProtocolFee: "300",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1100",
  supplyCap: "0",
  borrowCap: "0",
  debtCeiling: "0",
  borrowableIsolation: false,
};