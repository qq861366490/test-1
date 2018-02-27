var view = require("../../views/news.html");
var classList = require("../components/newsClass.js");

var News = {
    template : view,
    components : {
        "classList" : classList
    },
    data : function(){
        return {
            list : [
                {text : "最新" , path : "/news/new"},
                {text : "排行榜" , path : "/news/level"},
                {text : "苹果" , path : "/news/apple"},
                {text : "上热评" , path : "/news/goHot"},
                {text : "评测室" , path : "/news/evaluation"},
                {text : "手机" , path : "/news/phone"}
            ],
            bannerList : [
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/focus/bd556d93-0e12-4ce8-ab5d-615fc85c6be4.jpg",
                    path : "/",
                    title : "午夜惊魂!"
                },
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/focus/e0340950-5156-4895-a0b9-d884289803b0.jpg",
                    path : "/",
                    title : "Win10上手视频,极速纯粹"
                },
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/focus/a5342d98-51bd-4865-be1f-e3ac06e66d43.jpg",
                    path : "/",
                    title : "亲近自然,低价甩卖"
                },
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/focus/793f5c9e-e874-427b-90ea-f81169eea0a5.jpg",
                    path : "/",
                    title : "intel i3新品上市"
                }
            ],
            newsList : [
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/thumbnail/2017/5/307513.jpg",
                    date : "08:03",
                    num : 5,
                    title : "Win10 RS3全场关注!微软《Build 2017》 Win10 UWP/安卓/IOS版下载"
                },{
                    imgSrc : "http://img.ithome.com/newsuploadfiles/thumbnail/2017/5/307513.jpg",
                    date : "08:03",
                    num : 5,
                    title : "Win10 RS3全场关注!微软《Build 2017》 Win10 UWP/安卓/IOS版下载"
                },{
                    imgSrc : "http://img.ithome.com/newsuploadfiles/thumbnail/2017/5/307513.jpg",
                    date : "08:03",
                    num : 5,
                    title : "Win10 RS3全场关注!微软《Build 2017》 Win10 UWP/安卓/IOS版下载"
                },{
                    imgSrc : "http://img.ithome.com/newsuploadfiles/thumbnail/2017/5/307513.jpg",
                    date : "08:03",
                    num : 5,
                    title : "Win10 RS3全场关注!微软《Build 2017》 Win10 UWP/安卓/IOS版下载"
                }
            ]
        }
    }
}

module.exports = News;