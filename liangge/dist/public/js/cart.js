requirejs(['config'],function(){
	requirejs(['jquery','car','header','sideBar'],function($,goods,header,sideBar){
		$('.cart-head').load('header.html',function(){
			header.init($('.cart-head'));
		});
		$('.cart-footer').load('footer.html');
		$('.cart-sideBar').load('sideBar.html',function(){
			sideBar.init($('.cart-sideBar'));
		});
	});
});
