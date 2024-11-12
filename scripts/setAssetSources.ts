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

  const contractAddress = "0x6eC0959Fa6AbaB7D312a061cb6b55329f47AA707";
  const myContract = MyContract.attach(contractAddress).connect(signer);

  const tx = await myContract.setAssetSources(
    // This is the list of assets
    [
      "0x1a2b233715cb798d15c8e125a736f26fc7f079dd",
    ],
    // This is the list of assets' sources
    [
      "0x431c6Cada46B4c480c61590433bBc5F2B3d2404b",
    ]);

  await tx.wait();

  console.log("Function called, result:", tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });