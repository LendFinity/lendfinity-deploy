import { HardhatRuntimeEnvironment } from "hardhat/types";
import { waitForTx } from "../helpers";



declare var hre: HardhatRuntimeEnvironment;


// This script mints to the treasury

// https://explorer.testnet.bitfinity.network/address/0xD8B9c8934049Ed80f497489f9eE5139aa044FC0e

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const gasPrice = hre.ethers.utils.parseUnits('10', 'gwei');
  const gasLimit = 10000000;


  const mintToTreasuryABI = [
    "function mintToTreasury(address[] assets) external"
  ];
  
  const poolAddress = "0xD8B9c8934049Ed80f497489f9eE5139aa044FC0e";
  const poolContract = new ethers.Contract(poolAddress, mintToTreasuryABI, signer);


  const tx = await waitForTx(
    await poolContract.mintToTreasury(["0x7938ACd297d53bD743c3926E3C24e7262C18AEc3"])
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


