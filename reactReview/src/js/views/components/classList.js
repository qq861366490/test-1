var ClassList = React.createClass({
    render : function(){
        var liDOM = this.props.classList.map(function(item , index){
            return (
                <li key={index}>
                    <a href="javascript:;">
                        {item.text}
                    </a>
                </li>
            );
        })
        return (
            <nav className="newsClass">
                <div className="listBox">
                    <ul>
                        {liDOM}
                    </ul>
                </div>
                <div className="iconfont it-conDown"></div>
            </nav>
        );
    }
})

export default ClassList;