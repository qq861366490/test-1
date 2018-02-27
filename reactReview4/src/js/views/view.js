var View = React.createClass({
    render : function(){
        var domList = this.props.dataList.map(function(item , index){
            return (<li key={index}>{item}</li>);
        });

        return (
            <div>
                <ul>
                    {domList}
                </ul>
                <a href="javascript:;" onClick={this.props.clickFun}>添加</a>
            </div>
        );
    }
});

export default View;