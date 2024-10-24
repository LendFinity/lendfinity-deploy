import { HardhatRuntimeEnvironment } from "hardhat/types";
import { waitForTx } from "../helpers";

declare var hre: HardhatRuntimeEnvironment;

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const mintToTreasuryABI = [
    "function mintToTreasury(address[] assets) external",
  ];

  const poolAddress = "0xD8B9c8934049Ed80f497489f9eE5139aa044FC0e";
  const poolContract = new ethers.Contract(
    poolAddress,
    mintToTreasuryABI,
    signer
  );

  const tx = await waitForTx(
    await poolContract.mintToTreasury([
      "0xCaC121dd65ed6C4Fe5f204E11f389d9171cEDAfE",
    ])
  );

  console.log(tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
