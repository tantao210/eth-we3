
function EthAccount(){}

var account = new EthAccount();

EthAccount.prototype.checkAddress = function(address) {
    // console.log(address + '----->' + address.length);
    var regex = /^0x[0-9a-fA-F]{40}$/;
    // var result = regex.test(address);
    // console.log(result);
    // return result;
    return regex.test(address);
};

module.exports = account;