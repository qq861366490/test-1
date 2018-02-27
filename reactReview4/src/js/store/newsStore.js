var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var listStore = assign({},EventEmitter.prototype , {
    state : {
        classList : [],
        bannerList : []
    },
    getAll : function(){
        return this.state;
    },
    setClassList : function(list){//更新classList
        this.state.classList = list;
    },
    setBannerList : function(list){//更新bannerList
        this.state.bannerList = list;
    },
    addListener : function(callback){//将传入进来的函数添加到update事件监听当中
        this.on("update" , callback);
    },
    updateView : function(){//更新视图
        this.emit("update");
    },
    removeListener : function(){//当组件被卸载,则删除事件监听
        this.removeListener("update" , callback);
    }
});

export default listStore;