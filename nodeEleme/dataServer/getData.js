var http = require('https');
//url https里的limit=22,数字可以改,代表一次获取多少条数据,默认20
var url = 'https://mainsite-restapi.ele.me/shopping/restaurants?latitude=30.41903&longitude=114.42921&offset=0&limit=22&extras[]=activities&terminal=h5';
var db = require('./mongo.js');
var event = require('./events.js');


http.get(url, response => {
    var html = "";
    response.on("data", data => {
    	
        html += data;//将获取的数据变为字符串
    });
    response.on("end", () => {
        getData(html);//调用将从url里获取的数据存入数据库的方法
        
    });
    response.on("error", err => {
        console.log(err);
    });
});
//将从url里获取的数据存入数据库
function getData(html) {
    var jpeg = 'jpeg',png = 'png';//获取的数据里,图片格式有两种jpeg,png
    data = JSON.parse(html);//html是JSON字符串格式,需要转换为JSON格式(数组Array)
    data.map(function(value, index){
        var obj = {};
        obj.type = 'shop';//将存入的数据做标记,代表是带店铺的数据集合
        obj.name = value.name;//店铺名字
        obj.is_new = value.is_new;//店铺是否为新店铺
        obj.is_premium = value.is_premium;//店铺是否为品牌店铺
        obj.rating = value.rating;//店铺的评分
        obj.recent_order_num = value.recent_order_num;//店铺的多少元起送
        obj.float_delivery_fee = value.float_delivery_fee;//店铺的配送费
        obj.float_minimum_order_amount = value.float_minimum_order_amount;//店铺的月销售数量
        obj.order_lead_time = value.order_lead_time;//店铺的配送时间
        //店铺的图片地址,图片地址需要经过以下处理
        var str = value.image_path;
        var a = str.substr(0,1), b = str.substr(1,2), c = str.substr(3);
        if(c.indexOf(jpeg) > -1){
            str = '//fuss10.elemecdn.com/'+a+'/'+b+'/'+c+'.jpeg?imageMogr/format/webp/';
        }else if(c.indexOf(png) > -1){
            str = '//fuss10.elemecdn.com/'+a+'/'+b+'/'+c+'.png?imageMogr/format/webp/';
        }
        obj.image_path = str;//店铺的图片地址
        
        //店铺的距离米数,需要经过以下处理
        var num1 = value.distance;
        if(num1>1000){
        	num1 = (num1/1000).toFixed(2) + 'km';
        }else{
        	num1 += 'm';
        };
        
        obj.distance = num1;//店铺的距离米数
        
        
        //数据库查找数据成功
        event.once('DB_FIND_SUCCESS', function (data) {
            if (!data.length) {
                db.insert(obj);//调用数据库的插入数据方法
                console.log('插入成功');
            } else {
                console.log('数据已存在');
            };
        });
        db.find(value.name);//调用数据库查找数据方法
    });
    
}





