import { HardhatRuntimeEnvironment } from "hardhat/types";
import { waitForTx } from "../helpers";

declare var hre: HardhatRuntimeEnvironment;

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const mintToTreasuryABI = [
    "function mintToTreasury(address[] assets) external",
  ];

  const poolAddress = "0x8Af2496be337886c843816d969bD3F2a7A8c2d3E";
  const poolContract = new ethers.Contract(
    poolAddress,
    mintToTreasuryABI,
    signer
  );

  const tx = await waitForTx(
    await poolContract.mintToTreasury([
      "0x3662afef38c94a6184cdfce8dcc60e7c305b8299",
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
