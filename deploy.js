const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode}= require ( './compile');
const provider = new HDWalletProvider (
  'bean bird daughter menu join door quote trap twelve flag grass company',
'https://rinkeby.infura.io/v3/e12c18c442a64d9c80b88b7ec6c4b287'
);
let result;
const web3 = new Web3 (provider);
const deploy = async () =>{
  const accounts= await web.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data:  '0x' + bytecode , arguments: ['Hi there!'] })
  .send({ gas: ' 1000000 ', from: accounts[0]});
  console.log('Contract deployed to:',result.options.address);

};
deploy();
