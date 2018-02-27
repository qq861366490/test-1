import View from "./view.js";
import Action from "../action/actionFactory.js";
import Store from "../store/listStore.js";

var ViewCon = React.createClass({
    getInitialState : function(){
        return {
            list : ["初始数据1","初始数据2"]
        }
    },
    componentDidMount : function(){
        Store.addListener(this.updateView);
    },
    updateView : function(){//更新视图
        this.setState({
            list : Store.getAll()
        })
    },
    cFun : function(){
        Action.addNewItem("添加新的数据");
    },
    render : function(){
        return (
            <View dataList={this.state.list} clickFun={this.cFun} />
        )
    }
})

export default ViewCon;