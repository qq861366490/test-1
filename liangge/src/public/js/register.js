requirejs(['config'],function(){
	requirejs(['jquery','regist','header'],function($,regist,header){
		$('.register-head').load('./header.html',function(){
			header.init($('.register-head'));
		});
		$('.register-footer').load('./footer.html');
	});
});
