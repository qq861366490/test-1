

/**
 	主模块myApp
 */
var app = angular.module('myApp', ['ui.router']);

/**
 	路由配置,分页
 */
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when("" ,"/home");
	$stateProvider
		.state('main',{
			url: '',
			templateUrl: './page/main.html',
			
		})
		.state('login',{
			url: '/login',
			templateUrl: './page/login.html',
			controller: 'login'
		})
		.state('regist',{
			url: '/regist',
			templateUrl: './page/regist.html',
			controller: 'regist'
		})
		.state('regist2',{
			url: '/regist2',
			templateUrl: './page/regist2.html',
			controller: 'regist2'
		})
		.state('regist3',{
			url: '/regist3',
			templateUrl: './page/regist3.html',
			controller: 'regist3'
		})
		.state('main.home',{
			url: '/home',
			templateUrl: './page/home.html',
			controller: 'home'
		})
		.state('main.nitashuo',{
			url: '/nitashuo',
			templateUrl: './page/nitashuo.html',
			controller: 'nitashuo'
		})
		.state('main.category',{
			url: '/category',
			templateUrl: './page/category.html',
			controller: 'category'
		})
		.state('main.nearby',{
			url: '/nearby',
			templateUrl: './page/nearby.html',
			controller: 'nearby'
		})
		.state('main.member',{
			url: '/member',
			templateUrl: './page/member.html',
			controller: 'member'
		})
		.state('cart',{
			url: '/cart',
			templateUrl: './page/cart.html',
			controller: 'cart'
		})
		.state('category-list',{
			url: '/category/category-list',
			templateUrl: './page/category-list.html',
			controller: 'category-list'
		})
		.state('goods-detail',{
			url: '/goods-detail',
			templateUrl: './page/goods-detail.html',
			controller: 'goods-detail'
		})
}]);

/**
 	自定义过滤器,将现价转换成原价
 */
app.filter('oldPrice', function() {
	return function(price, discount) {
		var pri = price * 1,
			dis = discount * 1,
			oldPrice = pri;
		if(isNaN(pri) || isNaN(dis)) { //数据不对,原样返回数据
			return oldPrice;
		} else if(dis == 0) { //折扣为0,返回现价,即原价
			oldPrice = "¥" + pri.toFixed(2);
		} else {
			//将现价处理成原价
			var pri2 = pri * 10 / dis;
			oldPrice = "¥" + pri2.toFixed(2);
		}
		return oldPrice;
	}
});












