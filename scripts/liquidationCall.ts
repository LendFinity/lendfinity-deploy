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
    "user_id": "0x436ab2FD9C7b53f384d7A284c598f6fdd9d593aa",
    "max_collateralSymbol": "WBFT",
    "max_borrowedSymbol": "ckUSDC",
    "max_borrowedPrincipal": "1000339",
    "max_borrowedPriceInEth": "105103117",
    "max_collateralBonus": 601350548658736800,
    "max_collateralPriceInEth": "13253313"
}


  const assetAddresses = {
    ICP: "0x51ccde9ca75d95bb55ece1775fcbff91324b18a6",
    GLDT: "0x1a2b233715cb798d15c8e125a736f26fc7f079dd",
    WBFT: "0x4B6bcCA9a8D707DaCA69485d14836779AeD947E5",
    RICH: "0xfd4de66eca49799bdde66eb33654e2198ab7bba4",
    ckBTC: "0x56bf74ef5d4ad161d2d8d5d576e70108f152cd35",
    ckUSDC: "0x3662afef38c94a6184cdfce8dcc60e7c305b8299",
    CHAPX: "0xb37B60166AC1677a50D0ef158541c441bFf3D09A",
  };

  const tx = await waitForTx(
    await poolContract.liquidationCall(
      assetAddresses[userData.max_collateralSymbol],
      assetAddresses[userData.max_borrowedSymbol],  
      userData.user_id,                             
      ethers.utils.parseUnits(userData.max_borrowedPrincipal, 6),
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
