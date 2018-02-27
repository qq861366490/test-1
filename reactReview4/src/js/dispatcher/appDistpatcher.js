import newsStore from "../store/newsStore.js";
import fetch from "isomorphic-fetch";

var Dispatcher = require("flux").Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action){
    switch(action.type){
        case "NEWS_PAGEINIT" : 
            //开始请求数据
            fetch("./data/classList.json").then(function(res){
                return res.json();
            }).then(function(data){
                //在请求到数据之后,修改store
                newsStore.setBannerList(data.bannerList);
                newsStore.setClassList(data.classList);

                //完成修改后,通知store更新视图
                newsStore.updateView();
            })
            
            //调用store的更新视图方法
            break;
    }
});

export default AppDispatcher;