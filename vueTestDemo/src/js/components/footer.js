var view = require("../../views/footer.html");

var Footer = {
    template : view,
    data : function(){
        return {
            navList : [
                {
                    className : "it-navNews",
                    navName : "资讯",
                    path : "/news"
                },
                {
                    className : "it-navHot",
                    navName : "辣品",
                    path : "/hot"
                },
                {
                    className : "it-navIt",
                    navName : "IT圈",
                    path : "/it"
                },
                {
                    className : "it-navUser",
                    navName : "我",
                    path : "/me"
                }
            ]
        }
    }
}

module.exports = Footer;