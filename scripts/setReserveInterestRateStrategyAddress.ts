import { HardhatRuntimeEnvironment } from "hardhat/types";

declare var hre: HardhatRuntimeEnvironment;

// Set reserve interest rate strategy address

// https://explorer.testnet.bitfinity.network/address/0xA1B7b44E49d6F4ef019729d2d3Ade51Fc1433C91

// rateStrategyStableOne: 0x143129dA13F9D31e6eefE586e6Ab73b2cAb82a42
// rateStrategyStableTwo: 0xe7Eb22A9fD575D8969b530f6b82F52c4ACdaF2AC
// rateStrategyVolatileOne: 0xeAe2e6d9e5f2847515Fe4b471DB96AfE82b6b9A5

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const setStrategyABI = [
    "function setReserveInterestRateStrategyAddress(address asset, address newRateStrategyAddress) external"
  ];

  const poolConfiguratorAddress = "0xA1B7b44E49d6F4ef019729d2d3Ade51Fc1433C91";
  const poolConfiguratorContract = new ethers.Contract(
    poolConfiguratorAddress,
    setStrategyABI,
    signer
  );

  const tx = await poolConfiguratorContract.setReserveInterestRateStrategyAddress(
    "0x3662afef38c94a6184cdfce8dcc60e7c305b8299", // Token
    "0xe7Eb22A9fD575D8969b530f6b82F52c4ACdaF2AC" // Strategy
  );

  await tx.wait();

  console.log("Function called, result:", tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });