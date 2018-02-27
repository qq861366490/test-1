/**
 	主控制器main
 */
app.controller('main', ["$scope", "$location", "$rootScope",function($scope,$location,$rootScope) {
	//跳转分页
	var active = $location.url();
	$rootScope.active = active;
	
	$scope.goPage = function(url){
		$location.path(url);
		$rootScope.active = url;
	};
	
}]);


/**
 	首页控制器home
 */
app.controller('home', ["$scope","$rootScope" ,"$location", function($scope,$rootScope,$location) {
	$rootScope.title = '首页';
	$rootScope.active = '/home';
	//获取banner图

	var p = new Promise(function(resolve,reject){
		$.getJSON('./data/banner.json',function(data){
			$scope.$apply(function(){
				$scope.banner = data;
			});
			resolve();
		})
	});
	p.then(function(){
		var swiper = new Swiper(".swiper-container", {
			autoplay: 3000,
			loop: true,
			pagination: ".swiper-pagination",
			autoplayDisableOnInteraction:false
		});
	});
	//跳转详情页
	$scope.goDetail = function(id) {
		console.log(id);
	};
	//跳转分类页
	$scope.goList = function(id) {
		console.log(id);
	};
	//跳转店铺页
	$scope.goStore = function(id) {
		console.log(id);
	};
	//获取热销商品
	$.getJSON('./data/pic1.json',function(data){
		$scope.$apply(function(){
			$scope.picHot = data.hot;
			$scope.picPutong = data.putong;
		})

	});
	
	//获取抢购商品
	$.getJSON('./data/pic2.json',function(data){
		$scope.$apply(function(){
			$scope.qia = data.qianggou;
			$scope.put = data.putong;
		})

	});
	//获取pic3商品
	$.getJSON('./data/pic3.json',function(data){
		$scope.$apply(function(){
			$scope.pic3 = data;
		})

	});
	//获取好店数据
	$.getJSON('./data/store.json',function(data){
		$scope.$apply(function(){
			$scope.store0 = data[0];
			$scope.goods0 = data[0].goods;
		})
	});
	//获取为你推荐数据
	
	$.getJSON('./data/pic5.json',function(data){
		$scope.$apply(function(){
			$scope.pic5 = data;
		})

	});
	
	//地图
	$scope.map = function(){
		
	};
	//扫一扫
	$scope.sao = function(){
		
	};
}]);

/**
 * 你他说页 控制器nitashuo
*/
app.controller('nitashuo', ["$scope","$rootScope" ,"$location", function($scope,$rootScope,$location) {
	$rootScope.title = '你他说';
	$rootScope.active = '/nitashuo';
	//头部导航显示隐藏
	$scope.show = false;
	$scope.isShow = function(){
		$scope.show = !$scope.show;
	};
	
	//模拟数据
	$.getJSON('./data/nita0.json',function(data){
		$scope.$apply(function(){
			$scope.nita = data;
		})

	});
	//列表选中
	
	$scope.index = 0;
	
	$scope.showList=function (num){
		$scope.index = num;
		//模拟数据
		$.getJSON('./data/nita'+num+'.json',function(data){
			$scope.$apply(function(){
				$scope.nita = data;
				
			})
			
		});
	}
	
}]);

/**
 * 分类页 控制器category
*/

app.controller('category', ["$scope","$rootScope" ,"$location", function($scope,$rootScope,$location) {
	$rootScope.title = '分类';
	$rootScope.active = '/category';
	//头部导航显示隐藏
	$scope.show = false;
	$scope.isShow = function(){
		$scope.show = !$scope.show;
	};
	//模拟数据
	$.getJSON('./data/list0.json',function(data){
		$scope.$apply(function(){
			$scope.list = data;
			
		})
		
	});
	var listName = ["母婴用品","保健养生","休闲零食","面部护理","底妆彩妆","身体护理","个人护理","生活用品","3C电子"]
	//列表选中
	$scope.index = 0;
	$scope.listName = listName;
	$scope.liName = listName[0];
	$scope.showCon = function (num){
		$scope.index = num;
		$scope.liName = listName[num];
		//模拟数据
		$.getJSON('./data/list'+num+'.json',function(data){
			$scope.$apply(function(){
				$scope.list = data;
				
			})
			
		});
	};
	
	
}]);

/**
 * 附近页 控制器nearby
*/

app.controller('nearby', ["$scope","$rootScope" ,"$location", function($scope,$rootScope,$location) {
	$rootScope.title = '附近';
	$rootScope.active = '/nearby';
	//模拟数据
	$.getJSON('./data/store.json',function(data){
		$scope.$apply(function(){
			$scope.store = data;
		})
	});

	//消息公告框点击隐藏显示
	$('.nearby-content').on('click','.note',function(){
		$(this).next().show();
		$(this).hide();
	});
	$('.nearby-content').on('click','.note2',function(){
		$(this).prev().show();
		$(this).hide();
	});
	
	
	//列表选中
	
	$scope.index = 0;
	
	$scope.showStore=function (num){
		$scope.index = num;
	
	}
	
}]);
/**
 * 我的页 控制器member
*/

app.controller('member', ["$scope","$rootScope" ,"$location", function($scope,$rootScope,$location) {
	$rootScope.title = '我的';
	$rootScope.active = '/member';
}]);

/**
 	登录页 控制器login
 */
app.controller('login', ["$scope", "$location", "$rootScope",function($scope,$location,$rootScope) {
	$rootScope.title = '登录';
	$('html,body').css({
		backgroundColor: '#f2f2f2'
	});
	
}]);
/**
 	注册页 控制器regist
 */
app.controller('regist', ["$scope", "$location", "$rootScope",function($scope,$location,$rootScope) {
	$rootScope.title = '注册';
	$('html,body').css({
		backgroundColor: '#f2f2f2'
	});
	
}]);
/**
 	注册页 控制器regist2
 */
app.controller('regist2', ["$scope", "$location", "$rootScope",function($scope,$location,$rootScope) {
	$rootScope.title = '注册';
	$('html,body').css({
		backgroundColor: '#f2f2f2'
	});
	
}]);
/**
 	注册页 控制器regist3
 */
app.controller('regist3', ["$scope", "$location", "$rootScope",function($scope,$location,$rootScope) {
	$rootScope.title = '注册';
	$scope.text = 'password';
	$scope.show = function(){
		if($scope.text == 'password'){
			$scope.text = 'text';
			return;
		}
		$scope.text = 'password';
	};
	$('html,body').css({
		backgroundColor: '#f2f2f2'
	});
}]);
/**
 	购物车页控制器 cart
 */
app.controller('cart', ["$scope", "$location", "$rootScope",function($scope,$location,$rootScope) {
	$rootScope.title = '购物车';
	$('html,body').css({
		backgroundColor: '#fff'
	});
}]);

/**
 	分类列表页控制器 category-list
 */
app.controller('category-list', ["$scope", "$location", "$rootScope",function($scope,$location,$rootScope) {
	$rootScope.title = '商品列表';
	$('html,body').css({
		backgroundColor: '#f2f2f2'
	});
	//头部导航显示隐藏
	$scope.show = false;
	$scope.isShow = function(){
		$scope.show = !$scope.show;
	};
	//模拟数据
	$.getJSON('./data/list0.json',function(data){
		$scope.$apply(function(){
			$scope.list = data;
			
		})
		
	});
}]);

/**
 	商品详情页控制器 goods-detail
 */
app.controller('goods-detail', ["$scope", "$location", "$rootScope",function($scope,$location,$rootScope) {
	$rootScope.title = '商品详情';
	$('html,body').css({
		backgroundColor: '#f2f2f2'
	});
}]);