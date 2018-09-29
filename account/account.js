var fs = require('fs');
// 获取余额
var balance = function(req, res) {
    if (!req.body) return res.sendStatus(400);
    // console.log(req.body);
    var address = req.body.address;
    // 验证地址是否有效
    var addressReg = /^0x[a-z0-9]{40}$/; // 验证地址是否有效的正则
    if (!addressReg.test(address)) {
        var result = {ret: 1, message: "address 输入有误!~" + address};
        // console.log(result);
        res.send(result);
        return;
    }
    var balance = web3.eth.getBalance(address);
    // console.log(address.length);
    // web3.eth.getBalance('address');
    // res.send(balance.toString(10));
    var result = {ret: 0, balance: balance.toString(10), message: 'success'};
    res.send(result);
};

// 获取余额 View
var getBalance = function(req, res) {
    fs.readFile(__dirname + '/../view/account/balance.html', 'utf8', function(err, data) {
        console.log(err);
        res.send(data);
    });
};

// 创建账号
var createAccount = function(req, res) {
    // console.log(web3.personal);

    var address = web3.personal.newAccount()
    // console.log(result);
    if (address && address != '') {

    } else {
        
    }
};


exports.balance = balance;
exports.getBalance = getBalance;
exports.createAccount = createAccount;