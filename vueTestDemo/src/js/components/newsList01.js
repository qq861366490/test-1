var view = require("../../views/newsList01.html");
var item = require("./item01.js");

var newList01 = {
    template : view,
    props : ["newsList"],
    components : {
        "newsItem" : item
    }
}

module.exports = newList01;