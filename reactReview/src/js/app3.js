import {render} from "react-dom";
require("../less/style.less");

var App = React.createClass({
    getInitialState : function(){
        return {
            title : "it之家--首页",
            name : "zhuiszhu"
        }
    },
    changeFun : function(data){
       this.state.title = "react之家";
       this.forceUpdate();//强制更新视图
    },
    render : function(){
        return (
        <div>
            {this.state.title}<br/>
            {this.state.name}<br/>
            <a href="javascript:;" onClick={this.changeFun}>修改</a>
            <Sub text={this.changeFun} title={this.state.title}></Sub>
        </div>
        );
    }
})

// 装载期,
    // getDefaultProps : 组件被加载,最先执行初始化组件属性
    // getInitialState : 然后执行初始化组件状态
    // 装载前 :　componentWillMount
    // 组件渲染: render()
    // 装载后 : componentDidMount

// 更新期,
    // 属性更新 : componentWillReceiveProps
    // 允许更新 : shouldComponentUpdate
    // 更新前 : componentWillUpdate
    // 更新后 : componentDidUpdate
// 卸载期
    // 卸载前 : componentWillUnmount
var Sub = React.createClass({
    getDefaultProps : function(){//初始化组件状态
        console.log("初始化组件属性");
        return {
            text : null,
            txt : "abc"
        }
    },
    getInitialState : function(){
        console.log("初始化组件状态");
        return {}
    },
    componentWillMount : function(){
        console.log("组件被加载前componentWillMount");
    },
    componentDidMount : function(){
        console.log("组件被加载后componentDidMount");
    },
    propTypes : {
        text : React.PropTypes.func
    },
    componentDidUpdate : function(oldProps , oldState){
        console.log("componentDidUpdate");
    },
    componentWillUpdate : function(newProps , newState){
        console.log("componentWillUpdate");
    },
    shouldComponentUpdate : function(newProps , newState){
        console.log("shouldComponentUpdate");
        return true;
    },
    componentWillReceiveProps : function(newProps , newState){
        console.log("componentWillReceiveProps");
    },
    inChange : function(event){
        this.setState({
            txt : event.target.value
        })
        
        console.log(this.refs.input.value);
        
    },
    render : function(){
        console.log("render方法执行了!")

        return (
            <div className="sub">
                {this.state.txt}
                <input type="text" value={this.state.txt} onChange={this.inChange} ref="input"/>
                {this.props.title}
            </div>
        );
    }
})

render( <App /> , document.getElementById("app"));