import VueRoute from "vue-router";
var Main = require("./components/main.js");
var newsClass = require("./components/newsClass.js");
var swiper = require("./components/swiper.js");
var newsList = require("./components/newsList01.js");
var Hot = require("./page/hot.js");
var News = require("./page/news.js");
var Car = require("./page/car.js");
require("../less/style.less");

Vue.use(VueRoute);

Vue.component("classList" , newsClass);//全局定义组件

Vue.component("swiper",swiper);
Vue.component("newsList",newsList);

var It = {
    template : "<div class='main'>这是IT圈页面</div>"
}

var Me = {
    template : "<div class='main'>这是用户中心页面</div>"
}
var routes = [
    {path : "/" , component : Main , redirect : "/news" , children : [
        {path : "news" , component : News},
        {path : "hot" , component : Hot},
        {path : "it" , component : Car},
        {path : "me" , component : Me}
    ]}
]

var router = new VueRoute({
    routes : routes,
    linkActiveClass : "on" //设置路由链接备选中的class名
})

var app = new Vue({
    el : "#app",
    data : {},
    router : router
})
