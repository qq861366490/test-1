define(['jquery'],function(){
	var top = {
		top: null,
		topNav: null,
		topIcon: null,
		nav: null,
		ul: null,
		lis: null,
		navCon: null,
		off: null,
		ul2: null,
		conlis: null,
		init: function(elem){
			this.createConlis(elem);
			this.topnavHover();
			this.scroll();
			this.lisHover();
		},
		createConlis: function(elem){
			var str = '';
			for(var i=0; i<14; i++){
				str += `
						<li class="li clearfix">
								<div class="show-left1">
									<div class="h230 clearfix">
										<div class="show-23">
											<div class="show-title">
												<a href="#">进口美容护理</a>
											</div>
											<div class="show-font">
												<a href="#">面霜</a>
												<a href="#">套装</a>
												<a href="#">面膜</a>
												<a href="#">精华</a>
												<a href="#">洁面</a>
												<a href="#">化妆水</a>
												<a href="#">身体乳</a>
												<a href="#">防嗮</a>
												<a href="#">彩妆</a>
												<a href="#">卸妆</a>
												<a href="#">洗护发</a>
												<a href="#">沐浴</a>
												<a href="#">卫生巾</a>
												<a href="#">口腔</a>
												<a href="#">男士护理</a>
											</div>
										</div>
										<div class="show-23">
											<div class="show-title">
												<a href="#">进口休闲零食、进口糖果巧克力</a>
											</div>
											<div class="show-font">
												<a href="#">膨化食品</a>
												<a href="#">坚果</a>
												<a href="#">蜜饯</a>
												<a href="#">海味小食</a>
												<a href="#">饼干</a>
												<a href="#" class="active">曲奇</a>
												<a href="#">威化</a>
												<a href="#">糕点</a>
												<a href="#">糖果</a>
												<a href="#">巧克力</a>
												<a href="#">果冻/布丁</a>
												
											</div>
										</div>
										<div class="show-23">
											<div class="show-title">
												<a href="#">进口牛奶、进口冲饮、进口咖啡、进口茶</a>
											</div>
											<div class="show-font">
												<a href="#" class="active">牛奶</a>
												<a href="#">全脂</a>
												<a href="#">低脂</a>
												<a href="#">豆奶</a>
												<a href="#">奶粉</a>
												<a href="#">麦片谷物</a>
												<a href="#">速溶咖啡</a>
												<a href="#">咖啡豆</a>
												<a href="#">咖啡粉</a>
												<a href="#" class="active">蜂蜜</a>
												<a href="#">柚子茶</a>
												<a href="#">红茶</a>
												<a href="#">绿茶</a>
												<a href="#">果味茶</a>
											</div>
										</div>
										<div class="show-23">
											<div class="show-title">
												<a href="#">进口母婴</a>
											</div>
											<div class="show-font">
												<a href="#" class="active">奶粉</a>
												<a href="#">辅食</a>
												<a href="#">哺育用品</a>
												<a href="#">洗护清洁</a>
												<a href="#">安全座椅</a>
												
											</div>
										</div>
									</div>
								</div>
								<div class="show-left2">
									<div class="h230">
										<div class="show-23">
											<div class="show-title">
												<a href="#">进口粮油、进口素食调味</a>
											</div>
											<div class="show-font">
												<a href="#" class="active">橄榄油</a>
												<a href="#">意面</a>
												<a href="#">意面酱</a>
												<a href="#">大米</a>
												<a href="#">方便面</a>
												<a href="#">罐头</a>
												<a href="#">调味酱</a>
												<a href="#">调味料</a>
												<a href="#">酱油</a>
												<a href="#">果酱</a>
												
											</div>
										</div>
										<div class="show-23">
											<div class="show-title">
												<a href="#">进口酒、进口饮料、进口水</a>
											</div>
											<div class="show-font">
												<a href="#" class="active">葡萄酒</a>
												<a href="#">啤酒</a>
												<a href="#">洋酒</a>
												<a href="#">起泡酒</a>
												<a href="#">果蔬汁</a>
												<a href="#">饮用水</a>
												<a href="#">碳酸饮料</a>
												<a href="#">即饮咖啡</a>
												<a href="#">乳饮料</a>
												
											</div>
										</div>
										<div class="show-23">
											<div class="show-title">
												<a href="#">进口3C家电</a>
											</div>
											<div class="show-font">
												<a href="#" class="active">电饭煲</a>
												<a href="#">咖啡机</a>
												<a href="#">电水壶</a>
												<a href="#" class="active">空气净化</a>
												<a href="#">吸尘器</a>
												<a href="#">扫地机</a>
												<a href="#">剃须刀</a>
												<a href="#">电动牙刷</a>
												<a href="#">电吹风</a>
											</div>
										</div>
									</div>
								</div>
								<div class="show-right">
									<div class="h200">
										<a href="#">
											<img src="imgs/banner/${i+1}-1.jpg" />
										</a>
									</div>
									<div class="h200">
										<a href="#">
											<img src="imgs/banner/${i+1}-2.jpg" />
										</a>
									</div>
								</div>
							</li>
				
					`;
				
			}
			this.topNav = elem;
			this.topIcon = this.topNav.find('.top-icon') || null;
			this.nav = this.topNav.find('.nav');
			this.ul = this.nav.find('.ul');
			this.lis = this.ul.find('li');
			this.navCon = this.topNav.find('.nav-content');
			this.off = this.navCon.find('.nav-off');
			this.ul2 = this.navCon.find('.ul2');
			this.ul2.html(str);
			this.conlis = this.ul2.find('.li');
			this.top = this.topNav.parents('.top');
			for(var i=0; i<84; i++){
				if( i%5 == 0 ){
					this.conlis.find('.show-23').eq(i).remove();
				}
			}
		},
		topnavHover: function(){
			var _this = this;
			this.topNav.hover(function(){
				_this.topIcon.addClass('active');
				_this.nav.addClass('active');
			},function(){
				_this.topIcon.removeClass('active');
				_this.nav.removeClass('active');
				_this.lis.removeClass('current');
				_this.conlis.removeClass('current');
				_this.navCon.removeClass('current');
			});
		},
		navHover:function(){
			var _this = this;
			this.nav.mouseleave(function(){
				_this.lis.removeClass('current');
				_this.conlis.removeClass('current');
				_this.navCon.removeClass('current');
			})
		},
		lisHover: function(){
			var _this = this;
			_this.lis.hover(function(){
				var self = $(this),
					index = $(this).index();
				_this.navCon.addClass('current');
				self.addClass('current').siblings().removeClass('current');
				_this.navCon.addClass('current');
				_this.conlis.eq(index).stop(true).fadeIn(300).siblings().stop(true).fadeOut(300);
				_this.off.on('click',function(){
					_this.topIcon.removeClass('active');
					_this.nav.removeClass('active');
					_this.lis.removeClass('current');
					_this.conlis.removeClass('current');
					_this.navCon.removeClass('current');
				})
			})
		},
		scroll: function(){
			var _this = this;
			$(window).scroll(function(){
				
				if($(window).scrollTop() > 140) {
					_this.top.show();
				}else{
					_this.top.hide();
				}
				
			});
		}
	}
	return top;
})