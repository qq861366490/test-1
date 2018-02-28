define(['jquery'],function(){
	var login = {
		account: $('.login-container .login-right .account'),
		password: $('.login-container .login-right .password'),
		verify: $('.login-container .login-right .verify'),
		verifyCon: $('.login-container .login-right .verify-con'),
		verifyChange: $('.login-container .login-right .verify-change'),
		verifyimgs: [
						['imgs/verify/01AE.png','01ae'],
						['imgs/verify/1B01.bmp','1B01'],
						['imgs/verify/22D3.png','22D3'],
						['imgs/verify/30DB.png','30DB'],
						['imgs/verify/33A3.bmp','33A3'],
						['imgs/verify/1604.png','1604'],
						['imgs/verify/6561.png','6561'],
						['imgs/verify/A61E.png','A61E'],
						['imgs/verify/AE40.png','AE40'],
						['imgs/verify/B152.bmp','B152'],
						['imgs/verify/B200.bmp','B200'],
						['imgs/verify/BC63.bmp','BC63'],
						['imgs/verify/ECDA.bmp','ECDA']
					],
		num: parseInt( Math.random()*13 ),
		flag4: false,
		init: function(){
			this.verifyChan();
			this.focusinput();
			this.userBtnClick();
			this.RememberAccount();
		},
		verifyChan: function(){
			var _this = this;
			this.verifyCon.attr('src',this.verifyimgs[this.num][0]);
			this.verifyChange.on('click',function(){
				_this.num = parseInt( Math.random()*_this.verifyimgs.length );
				_this.verifyCon.attr('src',_this.verifyimgs[_this.num][0]);
			});
		},
		verifyerror: function(){
			$('#inputverify').css({
				border: '2px solid #f77799',
				boxShadow: '0px 0px 3px #f77799'
			});
			
			$('#userverifyp').show();
			this.flag4 = false;
		},
		verifyok: function(){
			$('#inputverify').css({
				border: '1px solid #ccc',
				boxShadow: '0px 0px 0px #ccc'
			});
			$('#userverifyp').hide();
			this.flag4 = true;
		},
		verifycheck: function(v){
			if(v.toLowerCase() == this.verifyimgs[this.num][1].toLowerCase()){
					this.verifyok();
					return;
				}
				this.verifyerror();
			
		},
		focusinput: function(){
			$('#username').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
			});
			$('#userpsw').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
			});
			$('#inputverify').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
			});
			$('#username').on('blur',function(){
				$(this).css({
					border: '1px solid #ccc',
					boxShadow: '0px 0px 0px #ccc'
				});
			});
			$('#userpsw').on('blur',function(){
				$(this).css({
					border: '1px solid #ccc',
					boxShadow: '0px 0px 0px #ccc'
				});
			});
			$('#inputverify').on('blur',function(){
				$(this).css({
					border: '1px solid #ccc',
					boxShadow: '0px 0px 0px #ccc'
				});
			});
		},
		userBtnClick: function(){
			var _this = this;
			$('#userBtn').on('click',function(){
				var account = $('#username').val(),
				password = $('#userpsw').val(),
				v = $('#inputverify').val();
				_this.verifycheck(v);
				if(!_this.flag4){
					return;
				}
				if(account.trim() == '' || password.trim() ==''){
					var div = document.createElement('div');
					var str = '<div class="errorcon"><span><em></em>登录失败</span><p>用户名或密码不能为空</p></div>';
					div.innerHTML = str;
					$(document.body).append(div);
					setTimeout(function(){
						div.remove();
					},2000);
					return;
				}
				$.ajax({
					url: 'http://192.168.55.44/PC-Project-Admin/login.php',
					data: {
						account: account,
						password: password
					},
					dataType: 'jsonp',
					success: function(data){
						if(data.status){
							var t;
							if($('#userliangzhou').prop('checked')){
								t = 14;
								
							}else{
								t = 0.1;
							}
							var date = new Date();
							date.setDate(date.getDate() + t);
							expires = date.toGMTString();
							document.cookie = 'userAccount='+account+';expires='+expires;
							if($('#usercheckde').prop('checked')){
								document.cookie = 'userRemember='+1+';expires='+expires;
								document.cookie = 'userName='+account+';expires='+expires;
							}else{
								document.cookie = 'userRemember='+0+';expires='+expires;
							}
							
							var div = document.createElement('div');
							var str = '<div class="okcon"><span><em></em>登录成功</span><p>即将跳转到之前浏览的页面</p></div>';
							div.innerHTML = str;
							$(document.body).append(div);
							setTimeout(function(){
								div.remove();
								location.href="goods.html";
							},3000);
						}else{
							var div = document.createElement('div');
							var str = '<div class="errorcon"><span><em></em>登录失败</span><p>用户名或密码错误</p></div>';
							div.innerHTML = str;
							$(document.body).append(div);
							setTimeout(function(){
								div.remove();
							},3000);
						}
					}
				});
				
			});
		},
		readCookie: function(cookieName){
			var cookie = document.cookie;
			var arr = cookie.split('; ');
			for(var i=0; i<arr.length; i++){
				var item = arr[i].split('=');
				if(item[0] == cookieName){
					return item[1];
				}
			}
		},
		RememberAccount: function(){
			var v = this.readCookie('userName') || '';
			var n = this.readCookie('userRemember');
			if(n == 1){
				$('#username').val(v);
				$('#usercheckde').attr('checked',true);
			}else if(n == 0){
				$('#username').val();
				$('#usercheckde').attr('checked',false);
			}
		}
	
	}
	login.init();
		
});
