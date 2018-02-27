import {render} from "react-dom";
import {Router , Route , hashHistory , IndexRedirect , Redirect , IndexRoute} from "react-router";

var Main = React.createClass({
    render : function(){
        return (
            <div>首页页面

                {this.props.children}
            </div>
        )
    }
})

var List = React.createClass({
    render : function(){
        return (
            <div>列表页面</div>
        )
    }
})

var Sub = React.createClass({
    render : function(){
        return (
            <div>子组件</div>
        )
    }
})

var TestMixin = {
    getInitialState : function(){
        return {
            txt : "mixin 内的组件状态"
        }
    }
}

var Sub1 = React.createClass({
    mixins : [TestMixin],
    render : function(){
        return (
            <div>{this.state.txt}</div>
        )
    }
})


var App = React.createClass({
    render : function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main} >
                    <Redirect from="/list" to="/home"/>
                    <IndexRoute component={Sub1} />
                    <Route path="/home" component={Sub} ></Route>
                </Route>
                <Route path="/list" component={List} ></Route>
            </Router>
        )
    }
})

render(<App /> , document.getElementById("app"));