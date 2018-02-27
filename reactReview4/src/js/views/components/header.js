var Header = React.createClass({
    getDefaultProps : function(){
        return {
            title : ""
        }
    },
    render : function(){
        return (
            <header>
                <div className="btn-box btn-box-left">
                    <a href="javascript:;" className="iconfont it-headDate btn"></a>
                </div>
                <h3>{this.props.title}</h3>
                <div className="btn-box btn-box-right">
                    <a href="javascript:;" className="iconfont it-headSearch btn"></a><a href="javascript:;" className="iconfont it-headAdd btn"></a>
                </div>
            </header>
        );
    }
})

export default Header;