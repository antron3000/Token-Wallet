var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/wYbAQ0x0FE5CdA81154AfB2EadaafAe3e320127F88F171eDRWhCcYpGOaSK9e'));


var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];


var privateKey;


importwallet('moment into test brave cover add life candy situate seat crumble lunch');

//importwallet('moment into resemble brave cover add life candy situate seat crumble lunch');
try2send(privateKey);

web3.eth.getBalance('0x0FE5CdA81154AfB2EadaafAe3e320127F88F171e', function (error, result) {
    if (!error) {
      console.log(result.toString());
      console.log("test");
    } else {
      console.error(error);
    }
  })

//var balance = web3.eth.getBalance('0x0FE5CdA81154AfB2EadaafAe3e320127F88F171e');
//console.log(balance);

function try2send(privateKey) {

  const EthereumTx = require('ethereumjs-tx')
  const Wallet = require('ethereumjs-wallet');
  const wallet = Wallet.fromPrivateKey(privateKey);


  const txParams = {
    nonce: '0x10',
    gasPrice: '0x19184e72a0',
    gasLimit: '0xDF642',
    to: '0x0FE5CdA81154AfB2EadaafAe3e320127F88F171e',
    value: '1000000',
    data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
    // EIP 155 chainId - mainnet: 1, ropsten: 3
    chainId: 3
  }

  const tx = new EthereumTx(txParams)
  tx.sign(privateKey)
  const serializedTx = tx.serialize()


   web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
   .on('receipt', console.log);




 }

 function generatewallet() {
   var bip39 = require('bip39')
   var mnemonic = bip39.generateMnemonic()

   const hdkey = require('ethereumjs-wallet/hdkey')
    privateKey = hdkey.fromMasterSeed(mnemonic)._hdkey._privateKey
   const Wallet = require('ethereumjs-wallet')
   const wallet = Wallet.fromPrivateKey(privateKey)
   console.log(wallet.getChecksumAddressString());
    console.log("privateKey");
    console.log(wallet.getPrivateKeyString());



 }

 function importwallet(mnemonic) {

   const hdkey = require('ethereumjs-wallet/hdkey')

    privateKey = hdkey.fromMasterSeed(mnemonic)._hdkey._privateKey

console.log(privateKey);

   const Wallet = require('ethereumjs-wallet')
   const wallet = Wallet.fromPrivateKey(privateKey);

   console.log(wallet.getChecksumAddressString());
    console.log(wallet.getPrivateKeyString());

 }
