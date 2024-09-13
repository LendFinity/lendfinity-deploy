import { HardhatRuntimeEnvironment } from "hardhat/types";

declare var hre: HardhatRuntimeEnvironment;


async function main() {
  await hre.run("verify:verify", {
    address: "0x2C328D592819524F741A88A18572372CCE196782",
    constructorArguments: [
      "0x5FbDB2315678afecb367f032d93F642f64180aa3", 
      [ 
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        "0x5FbDB2315678afecb367f032d93F642f64180aa3"
      ],
      [ 
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        "0x5FbDB2315678afecb367f032d93F642f64180aa3"
      ],
      "0x5FbDB2315678afecb367f032d93F642f64180aa3", 
      "0x5FbDB2315678afecb367f032d93F642f64180aa3", 
      "1000000000000000000"
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });