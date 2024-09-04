async function main() {
  const [signer] = await hre.ethers.getSigners();

  const MyContract = await ethers.getContractFactory("ReservesSetupHelper");

  const contractAddress = "0x4D5D3FaE9b08a4FA2aEB9Bc0d86E3dB3b3126438";
  const myContract = await MyContract.attach(contractAddress).connect(signer);

  const tx = await myContract.configureReserves(
    "0x4f397754f18b5d54e4bdfb34dacfb63e4c61d4ab",
    [
      [
        "0xb7779646a29d3510076DFDd7e60C203fa7093a29",
        "6500",
        "7000",
        "11000",
        "2000",
        "0",
        "0",
        "false",
        "true",
        "true",
      ],
    ]
  );

  await tx.wait();

  console.log("Function called, result:", tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
