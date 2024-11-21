import { HardhatRuntimeEnvironment } from "hardhat/types";
import { waitForTx } from "../helpers";
import BitfinityMarket from "../markets/bitfinity";

declare var hre: HardhatRuntimeEnvironment;

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const liquidationCallABI = [
    "function liquidationCall(address collateralAsset, address debtAsset, address user, uint256 debtToCover, bool receiveAToken) external"
  ];

  const poolAddress = "0x8Af2496be337886c843816d969bD3F2a7A8c2d3E";
  const poolContract = new ethers.Contract(
    poolAddress,
    liquidationCallABI,
    signer
  );


  const userData = {
    "user_id": "0xC9233906aF948B84d74F206ECd2761c954148f4c",
    "max_collateralSymbol": "ICP",
    "max_borrowedSymbol": "GLDT",
    "max_borrowedPrincipal": "28101",
    "max_borrowedPriceInEth": "90490000",
    "max_collateralBonus": 1065455.2211,
    "max_collateralPriceInEth": "933000000"
}


  const assetAddresses = {
    ICP: "0x51ccde9ca75d95bb55ece1775fcbff91324b18a6",
    GLDT: "0x1a2b233715cb798d15c8e125a736f26fc7f079dd"
  };


  const tx = await waitForTx(
    await poolContract.liquidationCall(
      assetAddresses[userData.max_collateralSymbol],
      assetAddresses[userData.max_borrowedSymbol],  
      userData.user_id,                             
      ethers.utils.parseUnits(userData.max_borrowedPrincipal, 18),
      true
    )
  );

  console.log(tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  // const provider = getStaticProvider();
  // const contract = new Contract(contractAddresses.pool, poolAbi, provider);

  // const collateralAddress = SYMBOL_RESERVE_MAP[loan.max_collateralSymbol];
  // const debtAddress = SYMBOL_RESERVE_MAP[loan.max_borrowedSymbol];

  // const tx = await contract.liquidationCall(
  //   collateralAddress,
  //   debtAddress,
  //   loan.user_id,
  //   loan.max_borrowedPrincipal,
  //   true
  // )
