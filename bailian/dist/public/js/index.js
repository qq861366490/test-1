/*!
 	require.js
 	require 入口文件
 */
//避免压缩JS时与GULP的require冲突 require换成requirejs
requirejs(['config'],function(){
	requirejs(['jquery','top','advert','banner','floor','sideBar'],function($,top,advert,banner,floor,sideBar){
		top.init($('.top-nav'));
		top.createConlis.call(banner,$('.banner'));
		top.lisHover.call(banner);
		top.navHover.call(banner);
	})
})