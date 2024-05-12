import { ethers } from 'ethers';
import fs from 'fs';

const abiPath = './deployments/bitfinity/PoolDataProvider-Aave.json';
const abi = JSON.parse(fs.readFileSync(abiPath, 'utf8')).abi;
const abiPool = JSON.parse(fs.readFileSync('./deployments/bitfinity/Pool-Implementation.json', 'utf8')).abi;
const abiFaucet = JSON.parse(fs.readFileSync('./deployments/bitfinity/Faucet-Aave.json', 'utf8')).abi;
const abiUiV3 = JSON.parse(fs.readFileSync('./deployments/bitfinity/UiPoolDataProviderV3.json', 'utf8')).abi;

const dataProvider: string = '0x02df3a3F960393F5B349E40A599FEda91a7cc1A7';
const poolAddress: string = '0x081F08945fd17C5470f7bCee23FB57aB1099428E';
const recipientAddress: string = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const faucetAddress: string = '0xA002B84Ca3c9e8748209F286Ecf99300CA50161A';
 
// Mint 5 tokens to the recipient address
async function mintTokens(): Promise<void> {

    let provider = new ethers.providers.JsonRpcProvider("https://testnet.bitfinity.network/");

    let mnemonic = "test test test test test test test test test test test junk";
    let wallet = ethers.Wallet.fromMnemonic(mnemonic);
    let signer = wallet.connect(provider);

    let faucetContract = new ethers.Contract(faucetAddress, abiFaucet, signer);
    let dataContract = new ethers.Contract(dataProvider, abi, signer);
    let poolContract = new ethers.Contract(poolAddress, abiPool, signer);
    let uiv3contract = new ethers.Contract("0x77e6Bd5c1988d8d766698F9CeEa5C24559b999f8", abiUiV3, signer);

    //let tx = await faucetContract.mint("0xA7240bcff60Eef40F31B8eD5d921BaD6DB13B199","0xA8C59966B26309173780ca8f4a118a84Dfb4775B", ethers.utils.parseUnits("40", 18));

    //let tx = await uiv3contract.getReservesData("0x286B8DecD5ED79c962b2d8F4346CD97FF0E2C352");
    //let tx = await uiv3contract.networkBaseTokenPriceInUsdProxyAggregator();
    //let tx2 = await uiv3contract.marketReferenceCurrencyPriceInUsdProxyAggregator();
    //let tx = await poolContract.ADDRESSES_PROVIDER();
    let tx = await faucetContract.mint(
        "0xA7240bcff60Eef40F31B8eD5d921BaD6DB13B199", 
        "0x081F08945fd17C5470f7bCee23FB57aB1099428E",
        ethers.utils.parseUnits("3", 20)
    );
    
    //const tx = await faucetContract.mint("0x70bDA08DBe07363968e9EE53d899dFE48560605B", recipientAddress, 50000000000);
    //await tx.wait();

    console.log('done - ', tx);
    // console.log('done2 -', tx2);
    // console.log('done3 -', tx3);


}

mintTokens()
 .then(() => process.exit(0))
 .catch((error: Error) => {
    console.error(error);
    process.exit(1);
 });
