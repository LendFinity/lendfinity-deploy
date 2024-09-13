import { HardhatRuntimeEnvironment } from "hardhat/types";

declare var hre: HardhatRuntimeEnvironment;

// Set asset sources
// This script should be executed after adding a new reserve

// https://explorer.testnet.bitfinity.network/address/0x2C328D592819524F741A88A18572372CCE196782

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const gasPrice = hre.ethers.utils.parseUnits('10', 'gwei');
  const gasLimit = 10000000;

  const MyContract = await hre.ethers.getContractFactory("AaveOracle");

  const contractAddress = "0x2C328D592819524F741A88A18572372CCE196782";
  const myContract = MyContract.attach(contractAddress).connect(signer);

  const tx = await myContract.setAssetSources(
    // This is the list of assets
    ["0xb7FBeB1d175C05b30FB45c57cA4B272767C1C65C"], 
    // This is the list of assets' sources
    ["0xA10e1eCBC6Bd1DcE07C0189D9461C84E1BFfA55E"], 
    { gasLimit, gasPrice });

  await tx.wait();

  console.log("Function called, result:", tx);
}