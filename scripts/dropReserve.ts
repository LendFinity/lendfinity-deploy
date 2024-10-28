import { HardhatRuntimeEnvironment } from "hardhat/types";
import { waitForTx } from "../helpers";

declare var hre: HardhatRuntimeEnvironment;

// Drop reserve
// This script is used to remove a reserve from the pool

const reserveToDrop = "0x3662afef38c94a6184cdfce8dcc60e7c305b8299";

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const gasPrice = hre.ethers.utils.parseUnits('10', 'gwei');
  const gasLimit = 10000000;

  const dropReserveABI = [
    "function dropReserve(address asset) external"
  ];
  const setReserveActiveABI = [
    "function setReserveActive(address asset, bool active) external"
  ]
  const setReservePauseABI = [
    "function setReservePause(address asset, bool paused) external"
  ]
  const setReserveFreezeABI = [
    "function setReserveFreeze(address asset, bool freeze) external"
  ]

  const poolConfiguratorAddress = "0xA1B7b44E49d6F4ef019729d2d3Ade51Fc1433C91";
  const poolConfiguratorContract = new ethers.Contract(poolConfiguratorAddress, dropReserveABI, signer);


  const tx = await waitForTx(
    await poolConfiguratorContract.dropReserve(reserveToDrop, { gasLimit, gasPrice })
    // await poolConfiguratorContract.setReservePause(reserveToDrop, false, { gasLimit, gasPrice })
    // await poolConfiguratorContract.setReserveFreeze(reserveToDrop, true, { gasLimit, gasPrice })
    
  )

  console.log("Function called, result:", tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });