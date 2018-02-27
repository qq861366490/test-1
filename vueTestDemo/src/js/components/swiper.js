var view = require("../../views/swiper.html");
var Swiper = require("swiper");
require("swiper/dist/css/swiper.css");

var SwiperComponent = {
    template : view,
    // props : ["className" , "bannerList"],
    props : {
        className : {},
        bannerList : {},
        loop : {
            default : false
        },
        autoplay : {
            default : 2000
        },
        speed : {
            default : 1000
        }
    },
    mounted : function(){
        var thisObj = this;
        var swiper = new Swiper("."+this.className ,{
            loop : thisObj.loop,
            autoplay : thisObj.autoplay,
            pagination : ".swiper-pagination",
            speed : thisObj.speed
        })
    }    
}

module.exports = SwiperComponent;