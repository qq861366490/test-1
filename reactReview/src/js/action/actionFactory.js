import AppDispathcer from "../dispatcher/appDistpatcher.js";


var actions = {
    addNewItem : function(text){
        //向dispatch发送一个action
        AppDispathcer.dispatch({
            type : "ADD_ITEM",
            content : text
        })
    }
}

export default actions;