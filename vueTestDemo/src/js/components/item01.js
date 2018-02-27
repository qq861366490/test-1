var view = require("../../views/newsItem01.html");

var newsItem = {
    template : view,
    props : ["imgSrc" , "title" , "date" , "num"]
}

module.exports = newsItem;