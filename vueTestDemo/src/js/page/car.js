var view = require("../../views/car.html");
var btn = require("../components/btn.js");
var goodsList = require("../components/goodsList.js");

var car = {
    template : view,
    data : function(){
        return {
            goodsList : [
                {
                    goodsName : "衣服",
                    checked : false
                },
                {
                    goodsName : "鞋子",
                    checked : false
                },
                {
                    goodsName : "袜子",
                    checked : false
                }
            ]
        }
    },
    methods : {
        all : function(){
            this.goodsList.map(function(item){
                item.checked = true;
            })
        },
        opp : function(){
            this.goodsList.map(function(item){
                item.checked = !item.checked;
            })
        },
        cla : function(){
            this.goodsList.map(function(item){
                item.checked = false;
            })
        }
    },
    components : {
        "goodsList" : goodsList,
        "btn" : btn
    }
}

module.exports = car;