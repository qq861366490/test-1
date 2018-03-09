mui.init({
	pullRefresh: {
		container: '.mui-content', //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
		up: {
			height: 50, //可选.默认50.触发上拉加载拖动距离
			auto: true, //可选,默认false.自动上拉加载一次
			contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
			contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
			callback: pullfreshup //上拉加载获取数据的调用方法
		},
		down: {
			height: 30, //可选,默认50.触发下拉刷新拖动距离,
			auto: false, //可选,默认false.自动下拉刷新一次
			contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
			contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
			contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
			callback: pullfreshdown //下拉刷新获取数据的调用方法
		}
	}
});

var total = 0;//页面已有数据总条数    
var show = 'show',hide = 'hide';//要增加的class隐藏或显示

//上拉加载获取数据的调用方法
function pullfreshup() {
	var _this = this;
	$.ajax({
		url: "http://localhost:3000/",//请求数据的地址
		type: "GET",
		success: function(data) {
			data = JSON.parse(data);//ajax请求过来的是JSON字符串,需要转化为JSON格式(数组Array)
			var li = '',len = 6;//li字符串拼接的li元素,len一次刷新加载的数据总条数

			for(var i = 0; i < len; i++) {//每次刷新,循环结束后可以获取的数据条数为len

				li = `
					<li class="mui-table-view-cell mui-media">
	        	        <a href="javascript:;">
	        	        	<div class="imgcon">
	        	        		<div class="img">
	        	            		<img class="mui-media-object mui-pull-left" src="http:${data[total].image_path}">
	        	        		</div>
	        	        		<div class="xindian ${data[total].is_new}">
	        	        			<span>新店</span>
	        	        		</div>
	        	        	</div>
	        	            <div class="mui-media-body">
	        	                <h4 class="${data[total].is_premium}">${data[total].name}</h4>
	        	                <div class="middle mui-clearfix">
	        	                	<span class="jRate${total}"></span>
	        	                	<span class="pinfen">${data[total].rating}</span>
	        	                	<span class="yueshou">月售${data[total].recent_order_num}单</span>
	        	                </div>
	        	                <div class="bottom mui-clearfix">
	        	                	<span class="qisong">¥${data[total].float_minimum_order_amount}起送</span>
	        	                	<span class="xian">/</span>
	        	                	<span class="peisong">配送费¥${data[total].float_delivery_fee}</span>
	        	                	<div class="juli">
		        	                	<span class="mi ${parseInt(data[total].distance) > 0 ? show : hide}">${data[total].distance}</span>
		        	                	<span class="xian ${data[total].order_lead_time > 0 && parseInt(data[total].distance) > 0 ? show : hide}">/</span>
		        	                	<span class="fenzhong ${data[total].order_lead_time>0?show:hide}">${data[total].order_lead_time}分钟</span>
	        	                	</div>
	        	                </div>
	        	            </div>
	        	        </a>
	        	    </li>
					`;
				$('#ul').append(li);//每次循环将li加入到ul
				//五角星评分
				$(".jRate" + total).jRate({
					rating: data[total].rating,//评分
					startColor: "#ffaa0c",//开始的填充颜色
					endColor: "#ffaa0c",//结束的填充颜色
					width: 12,
					height: 12,
					backgroundColor: 'lightgray'//没有填充的背景底色
				});
				//判断上拉加载获取数据库的数据结束,已经把数据库数据都加载完毕
				if(total >= data.length - 1) {//已经获取的数据总条数大于等于数据库的总条数时
					_this.endPullupToRefresh(true);//显示没有更多数据
					setTimeout(function() {
						mui('#refreshContainer').pullRefresh().disablePullupToRefresh();
					}, 2000);//2s后执行禁止上拉加载
					return;//数据库数据都已加载完毕,中断循环
				}
				total++;//数据总条数每次加1
			};
			
			_this.endPullupToRefresh(false);//数据库数据还没有被全部加载完,可以继续上拉加载

		},
		error: function(){
			$.getJSON("js/data.json",function(data){
				// data = JSON.parse(data);//ajax请求过来的是JSON字符串,需要转化为JSON格式(数组Array)
				var li = '',len = 6;//li字符串拼接的li元素,len一次刷新加载的数据总条数

				for(var i = 0; i < len; i++) {//每次刷新,循环结束后可以获取的数据条数为len

					li = `
						<li class="mui-table-view-cell mui-media">
		        	        <a href="javascript:;">
		        	        	<div class="imgcon">
		        	        		<div class="img">
		        	            		<img class="mui-media-object mui-pull-left" src="http:${data[total].image_path}">
		        	        		</div>
		        	        		<div class="xindian ${data[total].is_new}">
		        	        			<span>新店</span>
		        	        		</div>
		        	        	</div>
		        	            <div class="mui-media-body">
		        	                <h4 class="${data[total].is_premium}">${data[total].name}</h4>
		        	                <div class="middle mui-clearfix">
		        	                	<span class="jRate${total}"></span>
		        	                	<span class="pinfen">${data[total].rating}</span>
		        	                	<span class="yueshou">月售${data[total].recent_order_num}单</span>
		        	                </div>
		        	                <div class="bottom mui-clearfix">
		        	                	<span class="qisong">¥${data[total].float_minimum_order_amount}起送</span>
		        	                	<span class="xian">/</span>
		        	                	<span class="peisong">配送费¥${data[total].float_delivery_fee}</span>
		        	                	<div class="juli">
			        	                	<span class="mi ${parseInt(data[total].distance) > 0 ? show : hide}">${data[total].distance}</span>
			        	                	<span class="xian ${data[total].order_lead_time > 0 && parseInt(data[total].distance) > 0 ? show : hide}">/</span>
			        	                	<span class="fenzhong ${data[total].order_lead_time>0?show:hide}">${data[total].order_lead_time}分钟</span>
		        	                	</div>
		        	                </div>
		        	            </div>
		        	        </a>
		        	    </li>
						`;
					$('#ul').append(li);//每次循环将li加入到ul
					//五角星评分
					$(".jRate" + total).jRate({
						rating: data[total].rating,//评分
						startColor: "#ffaa0c",//开始的填充颜色
						endColor: "#ffaa0c",//结束的填充颜色
						width: 12,
						height: 12,
						backgroundColor: 'lightgray'//没有填充的背景底色
					});
					//判断上拉加载获取数据库的数据结束,已经把数据库数据都加载完毕
					if(total >= data.length - 1) {//已经获取的数据总条数大于等于数据库的总条数时
						_this.endPullupToRefresh(true);//显示没有更多数据
						setTimeout(function() {
							mui('#refreshContainer').pullRefresh().disablePullupToRefresh();
						}, 2000);//2s后执行禁止上拉加载
						return;//数据库数据都已加载完毕,中断循环
					}
					total++;//数据总条数每次加1
				};
				_this.endPullupToRefresh(false);//数据库数据还没有被全部加载完,可以继续上拉加载
			})
		}
	});

}

//下拉刷新获取数据的调用方法
function pullfreshdown() {
	$.ajax({
		url: "http://localhost:3000/",
		type: "GET",
		success: function(data) {
			data = JSON.parse(data);
			var li = '';//li字符串拼接的li元素
			//将数据排序乱序,每次下拉刷新时获取的数据就会不一样
			data.sort(function(){
				return Math.random() - 0.5;
			});
			
			for(var j = 0, len = total; j < len; j++) {//每次刷新,循环结束后可以获取的数据条数为total
				//li+=  一次性拼接数据条数为之前页面已有的数据总条数 
				li += `
					<li class="mui-table-view-cell mui-media">
	        	        <a href="javascript:;">
	        	        	<div class="imgcon">
	        	        		<div class="img">
	        	            		<img class="mui-media-object mui-pull-left" src="http:${data[j].image_path}">
	        	        		</div>
	        	        		<div class="xindian ${data[j].is_new}">
	        	        			<span>新店</span>
	        	        		</div>
	        	        	</div>
	        	            <div class="mui-media-body">
	        	                <h4 class="${data[j].is_premium}">${data[j].name}</h4>
	        	                <div class="middle mui-clearfix">
	        	                	<span class="jRate${j}"></span>
	        	                	<span class="pinfen">${data[j].rating}</span>
	        	                	<span class="yueshou">月售${data[j].recent_order_num}单</span>
	        	                </div>
	        	                <div class="bottom mui-clearfix">
	        	                	<span class="qisong">¥${data[j].float_minimum_order_amount}起送</span>
	        	                	<span class="xian">/</span>
	        	                	<span class="peisong">配送费¥${data[j].float_delivery_fee}</span>
	        	                	<div class="juli"><span class="mi ${parseInt(data[j].distance) > 0 ? show : hide}">${data[j].distance}</span><span class="xian ${data[j].order_lead_time > 0 && parseInt(data[j].distance) > 0 ? show : hide}">/</span><span class="fenzhong ${data[j].order_lead_time>0?show:hide}">${data[j].order_lead_time}分钟</span></div>
	        	                </div>
	        	            </div>
	        	        </a>
	        	    </li>
					`;
			}
			$('#ul').html(li);//将ul的内容替换为li
			//五角星评分
			for(var j = 0, len = total; j < len; j++) {
				$('.jRate' + j).jRate({
					rating: data[j].rating,
					startColor: "#ffaa0c",
					endColor: "#ffaa0c",
					width: 12,
					height: 12,
					backgroundColor: 'lightgray'
				});
			};
			//下拉刷新结束,终止正在刷新等文字动画
			mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
			
		}
	});

}

//轮播
var gallery = mui('.mui-slider');
gallery.slider({
	interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
});


//区域滚动
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005,
	indicators: false
});

//显示隐藏回到顶部
var scroll = mui('.mui-scroll-wrapper').scroll(); 
document.querySelector('.mui-scroll-wrapper' ).addEventListener('scroll', function (e ) { 
  e.preventDefault();
  if(Math.abs(scroll.y) > 200){
  	$('.backtop').fadeIn(500);
  }else{
  	$('.backtop').fadeOut(500);
  }
}) 

//回到顶部
$('.backtop').on('touchend', function() {
	mui('.mui-scroll-wrapper').pullRefresh().scrollTo(0,0,500);
	window.scrollTo(0, 0);
	$('.backtop').fadeOut(500);
});