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
      "0x4B6bcCA9a8D707DaCA69485d14836779AeD947E5",
      "0xfd4de66eca49799bdde66eb33654e2198ab7bba4",
      "0x51ccde9ca75d95bb55ece1775fcbff91324b18a6",
      "0x56bf74ef5d4ad161d2d8d5d576e70108f152cd35",
      "0x3662afef38c94a6184cdfce8dcc60e7c305b8299",
      "0x1a2b233715cb798d15c8e125a736f26fc7f079dd",
      "0xb37B60166AC1677a50D0ef158541c441bFf3D09A",
      "0x2a78a5f819393105a54f21adeb4a8b68c5030b02",
      "0x242bbcb4f4f1b752ae30757dc9ae9c24d9a9b640",
      "0xe613ebd1eae99d824da8a6c33ec833a62bc04b5a",
      "0x6286e8464E2817818EF8c3353e91824f680354d2",
      "0x491016BF872D35a798c601d53442775c621BF91A"
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
