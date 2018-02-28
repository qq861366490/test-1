/*!
 	require.js
 	require 的配置文件
 */

//避免压缩JS时与GULP的require冲突 require换成requirejs
requirejs.config({
	baseUrl: 'public',
	paths: {
		jquery: 'lib/jquery-1.11.3',
		header: 'plug/header',
		banner: 'plug/banner',
		floor: 'plug/floor',
		sideBar: 'plug/sideBar',
		regist: 'plug/regist',
		login: 'plug/login',
		goods: 'plug/goods',
		car: 'plug/car'
	}
})