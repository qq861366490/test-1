import View from "./main.js";

var MainCon = React.createClass({
    getInitialState : function(){
        return {
            HeaderTxt : "IT之家",
            navList : [
                {
                    className : "it-navNews",
                    navName : "资讯"
                },
                {
                    className : "it-navHot",
                    navName : "辣品"
                },
                {
                    className : "it-navIt",
                    navName : "IT圈"
                },
                {
                    className : "it-navUser",
                    navName : "我"
                }
            ]
        }
    },
    render : function(){
        return <View HeaderTxt = {this.state.HeaderTxt} navList = {this.state.navList}  children={this.props.children} />;
    }
});

export default MainCon;