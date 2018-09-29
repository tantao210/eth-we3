// var http = require("http");
var express = require("express");

var Web3 = require('./index.js');

var account = require('./account/account.js');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');

var upload = multer(); // for parsing multipart/form-data

var urlendcodedParser = bodyParser.urlencoded({extended: false}); // for parsing application/x-www-form-urlencoded


var app = express();
var PORT = 8200;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}


// http.createServer(function(request, response) {

// }).listen(PORT);

// console.log(app);

// static file
app.use(express.static('public')); // 静态文件

// get 请求
app.get('/', function(req, res) {
    res.send('eth web3');
});

app.post('/balance1', bodyParser.json(), function(req, res) {
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
app.post('/balance', bodyParser.json(), account.balance);

// 获取余额界面
app.get('/balance', account.getBalance);

app.get('/account/create', account.createAccount);

var server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app url http://%s:%s', host, port);
});