import ClassList from "../components/classList.js";
import Swiper from "../components/swiper.js";

var News = React.createClass({
    render : function(){
        return (
            <div className="main">
                <ClassList classList={this.props.classList} />
                <Swiper className={this.props.swiperClassName} bannerList = {this.props.bannerList} />
                首页内容
            </div>
        );
    }
})

export default News;