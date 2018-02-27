import {render} from "react-dom";
import {Router , Route , hashHistory , IndexRoute , IndexRedirect} from "react-router";
import Main from "./views/mainController.js";
import News from "./views/pages/newsController.js";
require("../less/style.less");

var App = React.createClass({
    render : function(){
        return (
            <Router history={hashHistory} >
                <Route path="/" component = {Main} >
                    <IndexRedirect to="/news" />
                    <Route path="/news" component = {News} />
                    <Route path="/hot" component = {News} />
                    <Route path="/it" component = {News} />
                    <Route path="/me" component = {News} />
                </Route>
            </Router>
        )
    }
})

render(<App /> , document.getElementById("app"));