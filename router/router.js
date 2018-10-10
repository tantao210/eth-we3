var express = require('express');

// var bodyParser = require('body-parser');
// var urlendcodedParser = bodyParser.urlencoded({extended: false}); // for parsing application/x-www-form-urlencoded
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var app = new express();

// get 请求
app.get('/', function(req, res) {
    res.send('eth web3');
});

var account = require('./../account/account');

app.use('/account', account);

var transaction = require('./../transaction/index');

app.use('/transaction', transaction);

module.exports = app;