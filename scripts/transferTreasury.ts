import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseUnitsFromToken, waitForTx } from "../helpers";

declare var hre: HardhatRuntimeEnvironment;

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const treasuryControllerAddress =
    "0x6426200ae3eCF4160C804969d577cB9D9972e3F8";
  const treasuryAddress = "0x29898A7135fe9030162b685FdE58A41b48813Ea2";

  const treasuryContract = new ethers.Contract(
    treasuryControllerAddress,
    treasuryAbi,
    signer
  );

  const assetAddresses = {
    WBFT: "0xDf5253c4bC09e0e3FFa160C6346D0781b8dA1789",
    ICP: "0x48EC6A9Bc2EEEe2E13ff7e4A5E6634F7Fe46dabc",
    ckBTC: "0x49268A71865d659a7d9219B42ea3b3cF57600a6a",
    ckUSDC: "0x042C10b817CD1f97C0F66ffccb333856e43a2dFa",
    GLDT: "",
    CHAPX: "",
    nICP: "0xb584d157bb8C3cbAf0A5Ce3CB8689e82412dE5B4",
    ckETH: "0xb778521A78E6339000B8f5a147BaF18C82da9FB1",
    ckUSDT: "0x828E13498b39D17976063541ECc4aF5D97aD863C",
    DKP: "0xfF6E2409cd15a9F01fAc600215E09FC5fA8bc6BF",
    SONIC: "0xf71044DE59F16b3B1951842528db2aaBA346Dee1",
    RICH: "",
  };

  const tokenAddress = assetAddresses["ckUSDT"];

  const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, signer);
  const decimals = await tokenContract.decimals();

  const treasuryBalance = await tokenContract.balanceOf(treasuryAddress);
  console.log("balance:", ethers.utils.formatUnits(treasuryBalance, decimals));

  const tx = await waitForTx(
    await treasuryContract.transfer(
      treasuryAddress,
      tokenAddress,
      "0xb29423Ff11d409D6A9fe58b8E97437E4371356a5",
      treasuryBalance
    )
  );
  // const tx = await treasuryContract.getFundsAdmin();

  // const tx = await waitForTx(
  //   await treasuryContract.createStream(
  //     "0xb29423Ff11d409D6A9fe58b8E97437E4371356a5",
  //     375,
  //     assetAddresses["WBFT"],
  //     1737986084,
  //     1737986086
  //   )
  // );

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

const treasuryAbi = [
  {
    inputs: [],
    name: "getFundsAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  // {
  //   "inputs": [
  //     {
  //       "internalType": "contract IERC20",
  //       "name": "token",
  //       "type": "address"
  //     },
  //     {
  //       "internalType": "address",
  //       "name": "recipient",
  //       "type": "address"
  //     },
  //     {
  //       "internalType": "uint256",
  //       "name": "amount",
  //       "type": "uint256"
  //     }
  //   ],
  //   "name": "transfer",
  //   "outputs": [],
  //   "stateMutability": "nonpayable",
  //   "type": "function"
  // },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stopTime",
        type: "uint256",
      },
    ],
    name: "createStream",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const erc20Abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];
