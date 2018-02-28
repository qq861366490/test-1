define(['jquery'],function(){
	
	var regist = {
		account: $('.register-container .register-left .account'),
		password: $('.register-container .register-left .password'),
		passwordCheck: $('.register-container .register-left .passwordCheck'),
		phone: $('.register-container .register-left .phone'),
		verify1: $('.register-container .register-left .verify'),
		verifyCon: $('.register-container .register-left .verify-con'),
		verifyChange: $('.register-container .register-left .verify-change'),
		checkbox: $('.register-container .register-left .checkbox'),
		registerBtn: $('.register-container .register-left .registerBtn'),
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
		flag1: false,
		flag2: false,
		flag3: false,
		flag4: false,
		init: function(){
			this.verifyChan();
			this.userName();
			this.passWord();
			this.passWord2();
			this.userphone();
			this.verify();
			this.userBtn();
			this.checked();
			this.focusinput();
		},
		usernameerror: function(){
			$('#username').css({
						border: '2px solid #f77799',
						boxShadow: '0px 0px 3px #f77799'
					});
			$('#usernameb').css({
				opacity: 1
			}).removeClass().addClass('error');
			this.flag1 = false;
			
		},
		checkusername: function(account){
			var num = /^\w[\w\.\@\_]{5,19}$/;
			if(account.trim() == ''){
				$('#usernameb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#usernamep').show().html('请输入用户名');
				this.usernameerror();
				return;
			}
			if(account.trim().length<6 || account.trim().length>20 ){
				$('#usernameb').css({
					opacity: 1
				}).removeClass().addClass('error');
				$('#usernamep').show().html('用户名长度只能在6-20位字符之间');
				this.usernameerror();
				return;
			}
			if(!num.test(account.trim())){
				$('#usernameb').css({
					opacity: 1
				}).removeClass().addClass('error');
				$('#usernamep').show().html('登录账号只能由字母和数字组合');
				this.usernameerror();
				return;
			}
			this.flag1 = true;
			$.ajax({
				url : 'http://192.168.55.44/PC-Project-Admin/checkAccount.php',
				data: {
					account: account
				},
				dataType: 'jsonp',
				success: function(data){
					if(data.status){
						$('#username').css({
							border: '2px solid #f77799',
							boxShadow: '0px 0px 3px #f77799'
						});
						$('#usernameb').css({
							opacity: 1
						}).removeClass().addClass('error');
						this.flag1 = false;
						$('#usernamep').show().html('登录账号已存在').css({
							color: 'red'
						});
						return this.flag1;
					}
					$('#username').css({
						border: '1px solid #ccc',
						boxShadow: '0px 0px 0px #ccc'
					});
					$('#usernameb').css({
						opacity: 1
					}).removeClass().addClass('ok');
					$('#usernamep').show().html('该登录账号可用');
					this.flag1 = true;
					setTimeout(function(){
						$('#usernamep').hide();
					},3000);
					return this.flag1;
				}
			});
		},
		userName: function(){
			var _this = this;
			this.account.on('blur',function(){
				var account = _this.account.val()
				_this.checkusername(account);
			});
			
			this.account.on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
				$('#usernameb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#usernamep').show().html('请输入用户名');
			});
		},
		passworderror: function(){
			this.password.css({
						border: '2px solid #f77799',
						boxShadow: '0px 0px 3px #f77799'
					});
			$('#userpswb').css({
				opacity: 1
			}).removeClass().addClass('error');
			
		},
		passwordok: function(){
			this.password.css({
						border: '1px solid #ccc',
						boxShadow: '0px 0px 0px #ccc'
					});
			$('#userpswb').css({
				opacity: 1
			}).removeClass().addClass('ok');
		},
		checkpassword: function(password){
			var character = /[\u4e00-\u9fff]/,
				num = /^\d{6,20}$/,
				cha = /^[a-zA-Z]{6,20}$/,
				chanum = /^\w{6,20}$/,
				chanumH = /^\w[\w-\.=\/*&~!@#$%^\\_]{5,19}$/;
				
			if(password.trim() == ''){
				$('#userpswb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#userpswp').show().html('请输入密码');
				$('#lower').css({
					backgroundColor: '#ccc'
				});
				$('#middle').css({
					backgroundColor: '#ccc'
				});
				$('#high').css({
					backgroundColor: '#ccc'
				});
				this.passworderror();
				return;
			};
			if(character.test(password.trim())){
				$('#userpswb').css({
					opacity: 1
				}).removeClass().addClass('error');
				$('#userpswp').show().html('密码不能有汉字');
				$('#lower').css({
					backgroundColor: '#ccc'
				});
				$('#middle').css({
					backgroundColor: '#ccc'
				});
				$('#high').css({
					backgroundColor: '#ccc'
				});
				this.passworderror();
				return;
			};
			if(password.trim().length<6 || password.trim().length>20){
				$('#userpswb').css({
					opacity: 1
				}).removeClass().addClass('error');
				$('#userpswp').show().html('密码必须是6-20位字符');
				this.passworderror();
				return;
			};
			
			
			if(num.test(password.trim()) || cha.test(password.trim())){
				$('#userpswb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#userpswp').hide();
				$('#lower').css({
					backgroundColor: '#f00'
				});
				$('#middle').css({
					backgroundColor: '#ccc'
				});
				$('#high').css({
					backgroundColor: '#ccc'
				});
				this.passwordok();
				return;
			};
			if(chanum.test(password.trim())){
				$('#userpswb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#userpswp').hide();
				$('#lower').css({
					backgroundColor: '#ccc'
				});
				$('#middle').css({
					backgroundColor: '#f90'
				});
				$('#high').css({
					backgroundColor: '#ccc'
				});
				this.passwordok();
				return;
			};
			
			if(chanumH.test(password.trim())){
				$('#userpswb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#userpswp').hide();
				$('#lower').css({
					backgroundColor: '#ccc'
				});
				$('#middle').css({
					backgroundColor: '#ccc'
				});
				$('#high').css({
					backgroundColor: '#3c0'
				});
				this.passwordok();
				return;
			};
		},
		passWord: function(){
			var _this = this;
			this.password.on('blur',function(){
				var password = _this.password.val()
				_this.checkpassword(password);
			});
			
			this.password.on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
				$('#userpswb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#userpswp').show().html('请输入密码');
			});
		},
		password2error: function(){
			$('#userpswcheck').css({
						border: '2px solid #f77799',
						boxShadow: '0px 0px 3px #f77799'
					});
			$('#userpswcheckb').css({
				opacity: 1
			}).removeClass().addClass('error');
			$('#userpswcheckp').show().html('密码不一致').css({
				color: 'red'
			});
			this.flag2 = false;
		},
		password2ok: function(){
			$('#userpswcheck').css({
				border: '1px solid #ccc',
				boxShadow: '0px 0px 0px #ccc'
			});
			$('#userpswcheckb').css({
				opacity: 1
			}).removeClass().addClass('ok');
			$('#userpswcheckp').hide();
			this.flag2 = true;
		},
		password2check: function(p){
			if(p == ''){
				this.password2error();
				return ;
			}
			if(p == this.password.val()){
			 	this.password2ok();
			 	return;
			 }
			this.password2error();
			
		},
		passWord2: function(){
			var _this = this;
			$('#userpswcheck').on('blur',function(){
				 var p = $('#userpswcheck').val();
				 _this.password2check(p);
			});
			$('#userpswcheck').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
				$('#userpswcheckb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#userpswcheckp').show().css({
					color: '#333'
				}).html('请再次输入密码');
			});
		},
		userphoneerror: function(){
			$('#userphone').css({
						border: '2px solid #f77799',
						boxShadow: '0px 0px 3px #f77799'
					});
			$('#userphoneb').css({
				opacity: 1
			}).removeClass().addClass('error');
			$('#userphonep').show().html('请填写正确的手机号').css({
				color: 'red'
			});
			this.flag3 = false;
		},
		userphonecheck: function(phone){
			var phonenum = /^1(3|5|7|8)\d{9}$/;
			if(!phonenum.test(phone)){
				this.userphoneerror();
				return;
			};
			$.ajax({
				url : 'http://192.168.55.44/PC-Project-Admin/checkPhone.php',
				data: {
					phone: phone
				},
				dataType: 'jsonp',
				success: function(data){
					if(data.status){
						$('#userphone').css({
									border: '2px solid #f77799',
									boxShadow: '0px 0px 3px #f77799'
								});
						$('#userphoneb').css({
							opacity: 1
						}).removeClass().addClass('error');
						$('#userphonep').show().html('该手机号已被使用').css({
							color: 'red'
						});
						this.flag3 = false;
						return this.flag3;
					}
					$('#userphone').css({
						border: '1px solid #ccc',
						boxShadow: '0px 0px 0px #ccc'
					});
					$('#userphoneb').css({
						opacity: 1
					}).removeClass().addClass('ok');
					$('#userphonep').html('该手机号可用').show();
					setTimeout(function(){
						$('#userphonep').hide()
					},3000);
					this.flag3 = true;
					return this.flag1;
				}
			});
			this.flag3 = true;
		},
		userphoneok: function(){
			$('#userphone').css({
				border: '1px solid #ccc',
				boxShadow: '0px 0px 0px #ccc'
			});
			$('#userphoneb').css({
				opacity: 1
			}).removeClass().addClass('ok');
			$('#userphonep').hide();
			setTimeout(function(){
				$('#userphonep').hide()
			},3000);
			this.flag3 = true;
		},
		userphone: function(){
			var _this = this;
			$('#userphone').on('blur',function(){
				 var phone = $('#userphone').val();
				 _this.userphonecheck(phone);
			});
			$('#userphone').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
				$('#userphoneb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#userphonep').show().css({
					color: '#333'
				}).html('请输入手机号');
			});
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
			$('#inputverifyb').css({
				opacity: 1
			}).removeClass().addClass('error');
			$('#inputverifyp').show().html('验证码不正确').css({
				color: 'red'
			});
			this.flag4 = false;
		},
		verifyok: function(){
			$('#inputverify').css({
						border: '1px solid #ccc',
						boxShadow: '0px 0px 0px #ccc'
					});
			$('#inputverifyb').css({
				opacity: 1
			}).removeClass().addClass('ok');
			$('#inputverifyp').hide();
			this.flag4 = true;
		},
		verifycheck: function(v){
			if(v.toLowerCase() == this.verifyimgs[this.num][1].toLowerCase()){
					this.verifyok();
					return true;
				}
				this.verifyerror();
				return false;
		},
		focusinput: function(){
			$('#li4').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
			});
			$('#li5').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
			});
			$('#li8').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
			});
			$('#li4').on('blur',function(){
				$(this).css({
					border: '1px solid #ccc',
					boxShadow: '0px 0px 0px #ccc'
				});
			});
			$('#li5').on('blur',function(){
				$(this).css({
					border: '1px solid #ccc',
					boxShadow: '0px 0px 0px #ccc'
				});
			});
			$('#li8').on('blur',function(){
				$(this).css({
					border: '1px solid #ccc',
					boxShadow: '0px 0px 0px #ccc'
				});
			});
		},
		verify: function(){
			var _this = this;
			$('#inputverify').on('blur',function(){
				var v = $('#inputverify').val();
				_this.verifycheck(v);
			});
			$('#inputverify').on('focus',function(){
				$(this).css({
					border: '2px solid #7fcbfe',
					boxShadow: '0px 0px 3px #7fcbfe'
				});
				$('#inputverifyb').css({
					opacity: 1
				}).removeClass().addClass('text');
				$('#inputverifyp').show().css({
					color: '#333'
				}).html('请输入验证码不区分大小写');
			});
		},
		checked: function(){
			if($('#usercheckde').prop('checked')){
				$('#usercheckdep').hide();
				return;
			}
			$('#usercheckdep').show();
			
		},
		userBtn: function(){
			var _this = this;
			$('#userBtn').on('click',function(){
				var a = _this.account.val()
				_this.checkusername(a);
				var password = _this.password.val()
				_this.checkpassword(password);
				var p = $('#userpswcheck').val();
				 _this.password2check(p);
				var phone = $('#userphone').val();
				 _this.userphonecheck(phone);
				var v = $('#inputverify').val();
				_this.verifycheck(v);
				_this.checked();
				console.log(_this.flag1,_this.flag2,_this.flag3,_this.flag4);
				if(!$('#usercheckde').prop('checked') || !_this.flag1 || !_this.flag2 || !_this.flag3 || !_this.flag4){
					return;
				}else{
					$.ajax({
						url: 'http://192.168.55.44/PC-Project-Admin/register.php',
						data: {
							account: a,
							password: password,
							phone: phone
						},
						dataType: 'jsonp',
						success: function(data){
							if(data.status){
								var div = document.createElement('div');
								var str = '<div class="okcon"><span><em></em>注册成功！</span><p>即将跳转到登录页面……</p></div>';
								div.innerHTML = str;
								$(document.body).append(div);
								setTimeout(function(){
									div.remove();
									window.location.href = "login.html";
								},2000);
							}else{
								var div = document.createElement('div');
								var str = '<div class="errorcon"><span><em></em>注册失败！</span><p>'+data.info+'</p></div>';
								div.innerHTML = str;
								$(document.body).append(div);
								setTimeout(function(){
									div.remove();
								},2000);
							}
						}
					});
				}
				
			});
		}
		
		
	}
	//#f00  #F90 #3c0
	regist.init();
});
