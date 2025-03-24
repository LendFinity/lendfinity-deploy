import { HardhatRuntimeEnvironment } from "hardhat/types";

declare var hre: HardhatRuntimeEnvironment;

// Set asset sources
// This script should be executed after adding a new reserve

// https://explorer.testnet.bitfinity.network/address/0x2C328D592819524F741A88A18572372CCE196782

async function main() {
  const [,,,,,,signer] = await hre.ethers.getSigners();
  const gasPrice = hre.ethers.utils.parseUnits('10', 'gwei');
  const gasLimit = 10000000;

  const MyContract = await hre.ethers.getContractFactory("AaveOracle");

  const contractAddress = "0x28BcFc87425A1AE44489CC9119cF2a4162e80D80";
  const myContract = MyContract.attach(contractAddress).connect(signer);

  const tx = await myContract.setAssetSources(
    // This is the list of assets
    [
      '0x7E06c81ab59A32c2fAF8bEB784672222E8941BdD',
      '0xC6C53790B5D6D262036f5B3a37D1174106b7C2A6'
    ],
    // This is the list of assets' sources
    [
      "0x901dE303058616841136756894fFe58e3f566765",
      "0x4B24fBf4dcea9Ac820AB92e6695ADEb3BFE29b92"
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