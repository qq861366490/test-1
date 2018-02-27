import View from "./news.js";
import Action from "../../action/newsAction.js";
import Store from "../../store/reduxStore.js";

var NewsCon = React.createClass({
    getInitialState : function(){
        return {
            classList : [],
            bannerList : []
        }
    },
    componentDidMount : function(){
        //绑定更新事件
        Store.subscribe(this.updateView);

        //发送初始化页面的action
        Store.dispatch({type : "NEWS_PAGEINIT"});

    },
    updateView : function(){//更新视图方法
        //从store内获取数据
        var dataObj = Store.getState();
        console.log(dataObj);
        
        //将数据赋到组件状态中,以完成刷新视图的目的
        this.setState({
            classList : dataObj.classList,
            bannerList : dataObj.bannerList
        });
    },
    componentWillUnmount : function(){
        Store.removeListener(this.updateView);
    },
    render : function(){
        return (
            <View classList={this.state.classList} bannerList = {this.state.bannerList} swiperClassName="zhuiszhu" />
        );
    }
});

export default NewsCon;