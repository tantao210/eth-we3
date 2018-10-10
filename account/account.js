var express = require('express');

var router = express.Router();

var bodyParser = require('body-parser');

var fs = require('fs');

var resUtil = require('./../utils/response');

router.post('/balance1', bodyParser.json(), function(req, res) {
    // var address = req.params["address"];
    // console.log(address);
    // console.log(req.params);
    // console.log(req.body.address);
    // res.send(address);
    var address = req.body.address;
    var balance = web3.eth.getBalance(address);
    res.send(balance.toString(10));
});

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

// 所有账号的余额
var allAccountBalance = function(req, res) {
    var accounts = web3.eth.accounts;
    var data = [];
    accounts.forEach(function(item, i) {
        var balance = web3.eth.getBalance(item);
        // plan 1
        data[i] = {address: item, balance: balance};
        // plan 2
        // data[i] = {};
        // data[i].address = item;
        // data[i].balance = balance;
    });
    
    res.send(resUtil.success(data));
};

// 获取余额
router.post('/balance', bodyParser.json(), balance);

// 获取余额界面
router.get('/balance', getBalance);

router.get('/create', createAccount);

router.get('/balance/all', allAccountBalance);

module.exports = router;