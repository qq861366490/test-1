var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var listStore = assign({},EventEmitter.prototype , {
    state : [],
    getAll : function(){
        return this.state;
    },
    addItem : function(text){
        this.state.push(text);
    },
    addListener : function(callback){//将传入进来的函数添加到update事件监听当中
        this.on("update" , callback);
    },
    updateView : function(){//更新视图
        this.emit("update");
    }
});

export default listStore;