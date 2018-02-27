import AppDispathcer from "../dispatcher/appDistpatcher.js";


var actions = {
    newsInit : function(){
        //向dispatch发送一个action
        AppDispathcer.dispatch({
            type : "NEWS_PAGEINIT"
        })
    }
}

export default actions;