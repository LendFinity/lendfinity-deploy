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
      "0xfd4de66eca49799bdde66eb33654e2198ab7bba4",
      "0x51ccde9ca75d95bb55ece1775fcbff91324b18a6",
      "0x56bf74ef5d4ad161d2d8d5d576e70108f152cd35",
      "0x3662afef38c94a6184cdfce8dcc60e7c305b8299"

    ], 
    // This is the list of assets' sources
    [
      "0x93c52eDAE4d4307703568d213ADbD6Ff0e87a5b8",
      "0x0A2e2AaB8809764dbF2479d9119463eD185Af3B6",
      "0x14895FeF32DC208443F2C2A097E0608f4479809e",
      "0x736A31927Ef907C47173aD591113f131Bcc849af",
    ], 
    { gasLimit, gasPrice });

  await tx.wait();

  console.log("Function called, result:", tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });