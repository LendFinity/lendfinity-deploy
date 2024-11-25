import { HardhatRuntimeEnvironment } from "hardhat/types";

declare var hre: HardhatRuntimeEnvironment;

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "borrowable",
          "type": "bool"
        }
      ],
      "name": "setBorrowableInIsolation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newDebtCeiling",
          "type": "uint256"
        }
      ],
      "name": "setDebtCeiling",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  const poolConfiguratorAddress = "0xA1B7b44E49d6F4ef019729d2d3Ade51Fc1433C91";
  const poolConfiguratorContract = new ethers.Contract(
    poolConfiguratorAddress,
    ABI,
    signer
  );
  let tx
  
  tx = await poolConfiguratorContract.setBorrowableInIsolation(
    "0xb37b60166ac1677a50d0ef158541c441bff3d09a",
    false
  );

  await tx.wait();
  console.log("Function called, result:", tx);


  // const maxDebtCeiling = BigInt(10995) * BigInt(10 ** 8);


  //  tx = await poolConfiguratorContract.setDebtCeiling(
  //   "0xb37b60166ac1677a50d0ef158541c441bff3d09a",
  //   maxDebtCeiling
  // );

  // await tx.wait();

  // console.log("Function called, result:", tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });