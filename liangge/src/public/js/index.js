/*!
 	require.js
 	require 入口文件
 */
//避免压缩JS时与GULP的require冲突 require换成requirejs
requirejs(['config'],function(){
	requirejs(['jquery','header','banner','floor','sideBar'],function($,header,banner,floor,sideBar){
		$('.index-head').load('./header.html',function(){
			$('.index-head .nav-con .nav-right li:eq(0) a').addClass('active');
			header.init($('.index-head'));
			
		});
		$('.index-sideBar').load('./sideBar.html',function(){
			sideBar.init($('.index-sideBar'));
		});
		$('.index-footer').load('./footer.html');
	})
})