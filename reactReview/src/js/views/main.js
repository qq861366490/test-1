import Header from "./components/header.js";
import Footer from "./components/footer.js";

var Main = React.createClass({
    render : function(){
        return (
            <div>
                <Header title={this.props.HeaderTxt} />
                {this.props.children}
                <Footer navList={this.props.navList} />
            </div>
        );
    }
});

export default Main;