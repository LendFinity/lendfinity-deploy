import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { BigNumber } from "ethers";

async function main() {
  // Interface matching the Solidity struct
  interface ConfigureReserveInput {
    asset: string;
    baseLTV: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
    reserveFactor: BigNumber;
    borrowCap: BigNumber;
    supplyCap: BigNumber;
    stableBorrowingEnabled: boolean;
    borrowingEnabled: boolean;
    flashLoanEnabled: boolean;
  }

  const { ethers } = hre;

  const [signer] = await ethers.getSigners();

  const contractAddress = "0x8870102892AC88E9a29F59113e676e5012bEe04B";
  const MyContract = await ethers.getContractFactory("ReservesSetupHelper");
  const poolConfigurator = MyContract.attach(contractAddress).connect(signer);

  // Example configuration for assets
  const assets = ["0x1A2b233715cb798d15c8e125A736f26Fc7F079DD"];
  const reserveInputs: ConfigureReserveInput[] = assets.map((asset) => ({
    asset: asset,
    baseLTV: ethers.utils.parseUnits("0.5", 18),
    liquidationThreshold: ethers.utils.parseUnits("0.75", 18),
    liquidationBonus: ethers.utils.parseUnits("1.05", 18),
    reserveFactor: ethers.utils.parseUnits("0.1", 18),
    borrowCap: ethers.utils.parseUnits("0", 18),
    supplyCap: ethers.utils.parseUnits("0", 18),
    stableBorrowingEnabled: false,
    borrowingEnabled: true,
    flashLoanEnabled: false,
  }));

  console.log(reserveInputs);

  console.log("Configuring reserves...");

  try {
    const tx = await poolConfigurator.configureReserves(
      "0x8Af2496be337886c843816d969bD3F2a7A8c2d3E",
      reserveInputs
    );
    console.log("Transaction hash:", tx.hash);
    await tx.wait();
    console.log("Reserves configured successfully!");

    // Log configuration details
    for (const input of reserveInputs) {
      console.log("\nAsset configured:", input.asset);
      console.log("Base LTV:", ethers.utils.formatUnits(input.baseLTV, 18));
      console.log(
        "Liquidation Threshold:",
        ethers.utils.formatUnits(input.liquidationThreshold, 18)
      );
      console.log(
        "Liquidation Bonus:",
        ethers.utils.formatUnits(input.liquidationBonus, 18)
      );
      console.log(
        "Reserve Factor:",
        ethers.utils.formatUnits(input.reserveFactor, 18)
      );
      console.log("Borrow Cap:", ethers.utils.formatUnits(input.borrowCap, 18));
      console.log("Supply Cap:", ethers.utils.formatUnits(input.supplyCap, 18));
      console.log("Stable Borrowing Enabled:", input.stableBorrowingEnabled);
      console.log("Borrowing Enabled:", input.borrowingEnabled);
      console.log("Flash Loan Enabled:", input.flashLoanEnabled);
    }
  } catch (error) {
    console.error("Error configuring reserves:", error);
    throw error;
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
