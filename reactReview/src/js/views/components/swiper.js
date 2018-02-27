var Swiper = require("swiper");
require("swiper/dist/css/swiper.css");

var SwiperCom = React.createClass({
    getDefaultProps : function(){
        return {
            loop : true,
            autoplay : 2000,
            speed : 1000
        }
    },
    componentDidMount : function(){
        var thisObj = this;
        var swiper = new Swiper("."+this.props.className , {
            loop : this.props.loop,
            autoplay : this.props.autoplay,
            speed : this.props.speed,
            pagination : ".swiper-pagination"
        });
    },
    render : function(){
        var slideList = this.props.bannerList.map(function(item , index){
            return (
                <div className="swiper-slide" key={index}>
                    <a href={item.path} >
                        <img src={item.imgSrc} />
                        <p>{item.title}</p>
                    </a>
                </div>
            );
        })

        return (
            <div className={"swiper-container "+ this.props.className}>
                <div className="swiper-wrapper">
                    {slideList}
                </div>
                <div className = "swiper-pagination"></div>
            </div>
        );
    }
});

export default SwiperCom;