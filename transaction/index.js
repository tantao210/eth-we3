var express = require('express')
var router = express.Router();

var ethAccount = require('./../utils/account');

var respUtil = require('./../utils/response');

var bodyParser = require('body-parser');

var sendTransaction = function(req, res) {
    if (!req.body) return res.sendStatus(400);
    // console.log(req.body);
    var from = req.body.from;
    var to = req.body.to;
    var value = req.body.value;
    if (from == '') {
        result = respUtil.fail();
        res.send(result);
        // console.log(result);
        return;
    }
    if (!ethAccount.checkAddress(from)) {
        result = respUtil.fail('from 地址格式不正确!');
        res.send(result);
        // console.log(result);
        return;
    }
    if (to == '') {
        result = respUtil.fail();
        res.send(result);
        // console.log(result);
        return;
    }
    if (!ethAccount.checkAddress(to)) {
        result = respUtil.fail('to 地址格式不正确!');
        res.send(result);
        // console.log(result);
        return;
    }
    if (value == '') {
        result = respUtil.fail();
        res.send(result);
        // console.log(result);
        return;
    }

    web3.personal.unlockAccount(from, '123456');// unlock account

    var result = web3.eth.sendTransaction({from: from, to: to, value: value}, function(err, address) {
        if (!err) 
            console.log(address);
        else 
            console.log(err);
    });

    console.log(result);

    result = respUtil.success();
    res.send(result);
};

router.post('/send',bodyParser.json(), sendTransaction);

module.exports = router;