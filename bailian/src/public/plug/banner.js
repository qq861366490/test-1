define(['jquery'],function(){
	
	var banner = {
		bgColor: ['#e81879','#fdc824','#fd1b61','#0faae0','#6b07c0','#f9a6c2','#f3dddf','#ffc2df'],
		banner: $('.banner'),
		banCon: $('.banner .ban-con'),
		container: $('.banner .container'),
		imgs: $('.banner .container img'),
		len: $('.banner .container img').size(),
		arrowL: $('.banner .container .arrowLeft'),
		arrowR: $('.banner .container .arrowRight'),
		lis: $('.banner .container ul li'),
		next: 0,
		timer: null,
		init: function(){
			this.arrowHover();
			this.arrowRclick();
			this.arrowLclick();
			this.autoPlay();
			this.bannerHover();
			this.lisClick();
		},
		arrowHover: function(){
			var _this = this;
			this.container.hover(function(){
				_this.arrowL.css({
					left: 0
				});
				_this.arrowR.css({
					right: 0
				});
			},function(){
				_this.arrowL.css({
					left: -40
				});
				_this.arrowR.css({
					right: -40
				});
			})
		},
		arrowRclick: function(){
			var _this = this;
			this.arrowR.click(function(){
				_this.next++;
				_this.next %= _this.len;
				_this.imgSwitch();
			})
		},
		arrowLclick: function(){
			var _this = this;
			this.arrowL.click(function(){
				if(_this.next < 0 ){
					_this.next = _this.len-1;
				}
				_this.next--;
				_this.imgSwitch();
			})
		},
		imgSwitch: function(){
			this.imgs.eq(this.next).stop(true).animate({
				opacity: 1
			},500).siblings().stop(true).animate({
				opacity: 0
			},500);
			this.lis.eq(this.next).addClass('active').siblings().removeClass('active');
			this.banner.css({
				backgroundColor: this.bgColor[this.next]
			})
		},
		autoPlay: function(){
			var _this = this;
			this.timer = setInterval(function(){
				_this.next++;
				_this.next %= _this.len;
				_this.imgSwitch();
			},3000)
		},
		bannerHover: function(){
			var _this = this;
			this.container.hover(function(){
				clearInterval(_this.timer);
			},function(){
				_this.autoPlay();
			})
		},
		lisClick: function(){
			var _this = this;
			this.lis.click(function(){
				var index = $(this).index();
				_this.next = index;
				_this.imgSwitch();
			})
		}
	}
	banner.init();
	
})
