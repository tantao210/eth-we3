
function EthResponse() {}
EthResponse.prototype.success = function(data, params) {
    var result = {ret: 0, message: 'success'};
    if (data) result.data = data;
    if (params) {
        params.forEach(function(item, i) {
            result[item] = params[item];
        });
    }
    return result;
};

EthResponse.prototype.fail = function(message) {
    if (!message || message == "") {
        message = '您提交的请求处理失败';
    } 
    var result = {ret: 1, message: message};
    return result;
};

var res = new EthResponse();
module.exports = res;