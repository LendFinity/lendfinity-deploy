import { parseUnits } from "ethers/lib/utils";
import { IInterestRateStrategyParams } from "../../helpers/types";

export const rateStrategyVolatile: IInterestRateStrategyParams = {
  name: "rateStrategyVolatileOne",
  optimalUsageRatio: parseUnits("0.45", 27).toString(), // Uoptimal
  baseVariableBorrowRate: parseUnits("0.01", 27).toString(), // R0
  variableRateSlope1: parseUnits("0.04", 27).toString(), // Rslope1
  variableRateSlope2: parseUnits("2", 27).toString(), // Rslope2
  stableRateSlope1: parseUnits("0.07", 27).toString(),
  stableRateSlope2: parseUnits("3", 27).toString(),
  baseStableRateOffset: parseUnits("0.02", 27).toString(),
  stableRateExcessOffset: parseUnits("0.05", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};

export const rateStrategyStable: IInterestRateStrategyParams = {
  name: "rateStrategyStableTwo",
  optimalUsageRatio: parseUnits("0.8", 27).toString(), // Uoptimal
  baseVariableBorrowRate: parseUnits("0.03", 27).toString(), // R0
  variableRateSlope1: parseUnits("0.06", 27).toString(), // Rslope1
  variableRateSlope2: parseUnits("0.5", 27).toString(), // Rslope2
  stableRateSlope1: parseUnits("0.005", 27).toString(),
  stableRateSlope2: parseUnits("0.75", 27).toString(),
  baseStableRateOffset: parseUnits("0.01", 27).toString(),
  stableRateExcessOffset: parseUnits("0.08", 27).toString(),
  optimalStableToTotalDebtRatio: parseUnits("0.2", 27).toString(),
};
