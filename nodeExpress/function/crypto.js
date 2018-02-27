//提供加密功能

//载入crypto模块
var crypto = require("crypto");

var funObj = {
    md5 : function(text){
        //创建加密算法
        var md5 = crypto.createHash("md5");

        //注入需要加密的字符串
        md5.update(text);

        //返回密文
        return md5.digest("hex");
    }
}

module.exports = funObj;