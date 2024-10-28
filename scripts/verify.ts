import { HardhatRuntimeEnvironment } from "hardhat/types";

declare var hre: HardhatRuntimeEnvironment;

async function main() {
  await hre.run("verify:verify", {
    address: "0x6eC0959Fa6AbaB7D312a061cb6b55329f47AA707",
    constructorArguments: [
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      [
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      ],
      [
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      ],
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "1000000000000000000",
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
