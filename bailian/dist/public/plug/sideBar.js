define(['jquery'],function(){
	
	var side = {
		sideBar: $('.side-bar'),
		carout: $('.side-bar .carout'),
		carin: $('.side-bar .carin'),
		ulis: $('.side-bar .carout ul li'),
		lis: $('.side-bar .carout li'),
		backT: $('.side-bar .carout .backT'),
		flag: false,
		i: null,
		init: function(){
			this.sideshow();
			this.backTop();
		},
		sideshow: function(){
			var _this = this;
			this.ulis.on('click',function(){
				var self = $(this),
					index = self.index();
				if(_this.flag && self.hasClass('current') ){
					_this.sideBar.stop(true).animate({
						right: -270
					});
					self.removeClass('active');
					self.removeClass('current');
					self.siblings().removeClass('active');
					self.siblings().removeClass('current');
					_this.flag = false;
					return;
				}
			
				_this.sideBar.stop(true).animate({
						right: 0
					});
					self.addClass('active');
					self.siblings().removeClass('active');
					self.addClass('current');
					self.siblings().removeClass('current');
					_this.flag = true;
				});
			
			
		},
		backTop: function(){
			var _this = this;
			this.backT.on('click',function(){
				$(document.body).stop(true).animate({
					scrollTop: 0
				})
				
			})
		}
	}
	side.init();
});
