import View from "./news.js";

var NewsCon = React.createClass({
    getInitialState : function(){
        return {
            classList : [
                {
                    text : "分类1"
                },
                {
                    text : "分类2"
                },
                {
                    text : "分类3"
                }
            ],
            bannerList : [
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/focus/bd556d93-0e12-4ce8-ab5d-615fc85c6be4.jpg",
                    path : "/",
                    title : "午夜惊魂!"
                },
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/focus/e0340950-5156-4895-a0b9-d884289803b0.jpg",
                    path : "/",
                    title : "Win10上手视频,极速纯粹"
                },
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/focus/a5342d98-51bd-4865-be1f-e3ac06e66d43.jpg",
                    path : "/",
                    title : "亲近自然,低价甩卖"
                },
                {
                    imgSrc : "http://img.ithome.com/newsuploadfiles/focus/793f5c9e-e874-427b-90ea-f81169eea0a5.jpg",
                    path : "/",
                    title : "intel i3新品上市"
                }
            ],
        }
    },
    render : function(){
        return (
            <View classList={this.state.classList} bannerList = {this.state.bannerList} swiperClassName="zhuiszhu" />
        );
    }
});

export default NewsCon;