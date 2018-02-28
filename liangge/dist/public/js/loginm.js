requirejs(['config'],function(){
	requirejs(['jquery','login','header'],function($,login,header){
		$('.login-head').load('./header.html',function(){
			header.init($('.login-head'));
		});
		$('.login-footer').load('./footer.html');
	});
});
