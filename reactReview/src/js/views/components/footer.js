var Footer = React.createClass({
    render : function(){
        var liDOM = this.props.navList.map(function(item , index){
            return (
                <li key={index}>
                    <a href="javascript:;">
                        <div className={"iconfont " + item.className}></div>
                        <p>{item.navName}</p>
                    </a>
                </li>
            );
        });

        return (
            <footer>
                <nav>
                    <ul>
                        {liDOM}
                    </ul>
                </nav>
            </footer>
        );
    }
})

export default Footer;