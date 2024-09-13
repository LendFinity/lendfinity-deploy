import { ethers } from 'ethers';
import fs from 'fs';
import hre from 'hardhat';


const user: string = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

async function mintTokens(): Promise<void> {

    let provider = new ethers.providers.JsonRpcProvider("https://testnet.bitfinity.network/");

    let mnemonic = "test test test test test test test test test test test junk";
    let wallet = ethers.Wallet.fromMnemonic(mnemonic);
    let signer = wallet.connect(provider);

    const ContractFactory = await hre.ethers.getContractFactory("MockAggregator");
    const contract = await ContractFactory.connect(signer).deploy(1);

    //await tx.wait();
    console.log('done', await contract.address);

}

mintTokens()
 .then(() => process.exit(0))
 .catch((error: Error) => {
    console.error(error);
    process.exit(1);
 });
