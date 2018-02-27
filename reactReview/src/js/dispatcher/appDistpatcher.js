import Store from "../store/listStore.js";

var Dispatcher = require("flux").Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action){
    switch(action.type){
        case "ADD_ITEM" : 
            //操作store
            Store.addItem(action.content);
            //调用store的更新视图方法
            Store.updateView();
            break;
    }
});

export default AppDispatcher;