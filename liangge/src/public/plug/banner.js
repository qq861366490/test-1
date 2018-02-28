define(['jquery'],function(){
	
	var banner = {
		banner: $('.banner'),
		banCon: $('.banner .ban-con'),
		container: $('.banner .container'),
		width: $('.banner .container').width(),
		imgCon: $('.banner .container .img-con'),
		imgs: $('.banner .container .img-show'),
		len: null,
		arrowL: $('.banner .container .arrowLeft'),
		arrowR: $('.banner .container .arrowRight'),
		lis: $('.banner .container ul li'),
		next: 0,
		timer: null,
		init: function(){
			var img = $('.banner .container .img-show:eq(0)').clone();
			this.imgCon.append(img);
			this.len = $('.banner .container .img-show').size();
			this.imgCon.css({
				width: this.len * this.width
			}); 
			
			this.arrowHover();
			this.arrowRclick();
			this.arrowLclick();
			this.autoPlay();
			this.bannerHover();
			this.lisHover();
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
				_this.imgSwitch();
			})
		},
		arrowLclick: function(){
			var _this = this;
			this.arrowL.click(function(){
				_this.next--;
				_this.imgSwitch();
			})
		},
		imgSwitch: function(){
			if(this.next > this.len-1){
				this.imgCon.css({
					left: 0
				});
				this.next = 1;
			}
			if(this.next < 0){
				this.imgCon.css({
					left: -(this.len-1) * this.width
				});
				this.next = this.len-2;
			}
			this.imgCon.stop(true).animate({
				left: -this.next * this.width
			});
			var num = this.next;
			num = num > this.len-2 ? 0 : num;
			this.lis.eq(num).addClass('active').siblings().removeClass('active');
		},
		autoPlay: function(){
			var _this = this;
			this.timer = setInterval(function(){
				_this.next++;
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
		lisHover: function(){
			var _this = this;
			this.lis.hover(function(){
				var index = $(this).index();
				_this.next = index;
				_this.imgSwitch();
			})
		}
	}
	banner.init();
	
})
