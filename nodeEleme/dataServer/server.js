//用户页面(前端)的ajax请求的服务器页面(后端)
//只要有用户访问这个页面就会触发response.write(data),即传输数据给访问者,模拟路由
var http = require("http");
var db = require('./mongo.js');
var event = require('./events.js');

	http.createServer(function(request, response) {
			response.writeHead(200, { "Content-Type": 'text/plain', 'charset': 'utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' }); //可以解决跨域的请求
			//数据获取成功事件
			event.once('DB_GET_SUCCESS', function(data) {
				//将获取的数据转为JSON字符串
				data = JSON.stringify(data);
				//将数据传输给ajax请求,response.write只支持传输字符串格式
				response.write(data);
				response.end();//传输结束
			});
			//调用数据库获取方法
			db.get();

			// var reqUrl = request.url;
		 //    reqUrl = reqUrl.replace(/\//,'');
		 //    if(reqUrl !== 'favicon.ico'){
		 //        try{
		 //            router[reqUrl](response);
		 //        }catch(err){
		 //            router.error(response);
		 //        }
		 //    };
		 //    var router = {
			//     home : function(res){
			//         html(res,"<a href='/list'>游戏列表</a>");
			//     },
			//     list : function(res){
			//         list2(res,ulHtml);
			//     },
			//     error: function(res){
			//         res.write('<h1 style="width: 100%; margin: 300px 500px;">404,访问的页面的不存在</h1>');
			//         res.end();
			//     }
			// };
			
	}).listen(3000, function() {//用户页面(前端)的ajax请求的服务地址http://localhost:3000,或者本机地址http://192.168.55.6:3000
			console.log('数据服务器开启');
	});


	