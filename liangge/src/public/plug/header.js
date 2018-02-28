define(['jquery'],function(){
	
	var head = {
		header: null,
		subnav: null,
		ul: null,
		ul2: null,
		lis: null,
		ul2lis: null,
		navcon: null,
		navRightfirsta: null,
		searchInput: null,
		searchBtn: null,
		headCar: null,
		headCarcon: null,
		htm: null,
		
		init: function(elem){
			this.header = elem;
			this.navcon = this.header.find('.nav-con');
			this.subnav = this.header.find('.subnav');
			this.ul = this.subnav.find('.ul');
			this.lis = this.ul.find('li');
			this.ul2 = this.subnav.find('.ul2');
			this.ul2lis = this.ul2.find('li');
			this.navRightfirsta = this.navcon.find('.nav-right li:eq(0) a');
			this.searchInput = this.header.find('.searchInput');
			this.searchBtn = this.header.find('.header-searchBtn');
			this.headCar = this.header.find('.head-car');
			this.headCarcon = this.header.find('.head-carcon');
			
			this.lisHover();
			this.subnavShow();
			this.searchInputF();
			this.loadCookie();
			this.showCar();
		},
		showCar: function(){
			var _this = this;
			$.ajax({
				url: 'http://192.168.55.44/PC-Project-Admin/cartList.php',
				dataType: 'jsonp',
				success: function(data){
					var result = data.data,
						num = 0;
					if(result){
						$('#head-carcon').css({
							opacity: 0
						});
						for(i=0,len=result.length; i<len; i++) {
							num += parseInt( result[i].amount );
						}
						$('#head-carnum').html(num);
						return;
					}else if(!result){
						$('#head-carcon').css({
							opacity: 1
						});
					}
					
				}
			});
		},
		lisHover: function(){
			var _this = this;
			this.lis.hover(function(){
				var self = $(this),
					index = $(this).index();
				_this.ul2lis.eq(index).stop(true).fadeIn(300).siblings().stop(true).fadeOut(300);
			})
		},
		subnavShow: function(){
			if(this.navRightfirsta.hasClass('active')){
				this.subnav.show();
			}
		},
		searchInputF: function(){
			var _this = this,v;
			this.searchInput.on('focus',function(){
				v = _this.searchInput.val();
				_this.searchInput.val('');
			});
			this.searchInput.on('blur',function(){
				_this.searchInput.val(v);
			});
			this.searchInput.on('input',function(){
				v = _this.searchInput.val();
				_this.searchInput.off('focus');
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
		loadCookie: function(){
			var username = this.readCookie('userAccount');
			this.htm = $('#nameCon').html();
			if(!username){
				return;
			}
			$('#nameCon').html();
			var str = '<li id="li5"><span class="loginin-1" >您好'+username+'！</span><span class="loginout-1"><a href="login.html" id="cancel">退出</a></span></li>'
			$('#nameCon').html(str);
			$('#cancel').on('click',function(){
				$('#nameCon').html(this.htm);
				var date = new Date();
				date.setDate(date.getDate() - 1);
				expires = date.toGMTString();
				document.cookie = 'userAccount='+username+';expires='+expires;
			});
		}
	}
	return head;
})