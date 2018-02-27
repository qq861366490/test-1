import fetch from "isomorphic-fetch";
import $ from "jquery";

var reducer = (state = {}, action = {}) => {
    var {type} = action;

    switch (type) {
        case "NEWS_PAGEINIT":
            var bannerList = null,
                classList = null; 
            //开始请求数据

            $.ajax({
                url : "./data/classList.json",
                type : "get",
                async : false,
                success : function(data){
                    bannerList = data.bannerList;
                    classList = data.classList;
                }
            })

            return {
                bannerList :bannerList,
                classList : classList
            }
            /*
            fetch("./data/classList.json").then(function (res) {
                return res.json();
            }).then(function (data) {
                //在请求到数据之后,修改store
                newsStore.setBannerList(data.bannerList);
                newsStore.setClassList(data.classList);
                
                //完成修改后,通知store更新视图
                newsStore.updateView();
            })*/
            break;
    }
}

export default reducer;