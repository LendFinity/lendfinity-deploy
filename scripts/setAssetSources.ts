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
      "0x491016BF872D35a798c601d53442775c621BF91A",
    ],
    // This is the list of assets' sources
    [
      "0x6f96b634A1A3E3991E46308325863128684ebab3",
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