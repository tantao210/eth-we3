

var Web3 = require("../index.js");

// if (typeof web3 !== 'undefined') {
// }

// console.log(Web3);

// var    web3 = new Web3(Web3.currentProvider);
// var    web3 = new Web3();
// console.log(web3)
// web3.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var version = Web3.version;

console.log(version);
// 
web3.eth.getBlock(60, function(error, result){
    if(!error)
        console.log(result)
    else
        console.error(error);
});


// 
var coinbase = web3.eth.coinbase;

console.log("coinbase: " + coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log("balance: " + balance.toString(10));