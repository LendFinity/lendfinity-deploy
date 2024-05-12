### open the console
npx hardhat console --network bitfinity

#### create contract instance
let dai=await ethers.getContractAt("MintableERC20", "0x70bDA08DBe07363968e9EE53d899dFE48560605B");
(await ethers.getSigner()).address

await dai.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")



let signer = await ethers.getSigners();
const tx = await contract.connect(signer).transfer("0xRecipientAddressHere", amount);



npx hardhat run scripts/deployAggregatorMock.ts --network bitfinity
HARDHAT_NETWORK=bitfinity npx hardhat deploy




# Last error:
deploying "ACLManager-Bitfinity" (tx: 0x5c8d33142872018c41f33ea2b656b0278b3d1704be921e67edab5a0ead46a00a)...: deployed at 0x7Ce73F8f636C6bD3357A0A8a59e0ab6462C955B0 with 1155533 gas
An unexpected error occurred:

Error: ERROR processing /Users/jaimebarrancos/Documents/repos/icp/deploy/aave-v3-deploy/deploy/02_market/03_init_acl.ts:



# changed for reusing contracts

deploy/02_market/01a_pool_implementation.ts
deploy/02_market/08_tokens_implementations.ts