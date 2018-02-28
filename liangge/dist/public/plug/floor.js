define(['jquery'],function(){
	(function creatFloor(){
		var str = '';
			for(var i=0; i<8; i++){
				str += `
						<div class="floor-item floor${i+1} clearfix">
							<h3></h3>
							<h2></h2>
							<div class="floor-ban">
								<div class="ban-con">
									<a href="goods.html"><img src="imgs/floor/${i+1}-1.jpg"></a>
									<a href="goods.html"><img src="imgs/floor/${i+1}-2.jpg"></a>
									<a href="goods.html"><img src="imgs/floor/${i+1}-3.jpg"></a>
								</div>
								<div class="lis-con">
									<ol>
										<li><span></span></li>
										<li><span></span></li>
										<li><span></span></li>
									</ol>
								</div>
							</div>
						</div>
					`;
			};
			var str1 = `
						<div class="floor-main">
							<div class="floor-maint">
								<div class="floor-imgw1">
									<a href="goods.html">
										<img src="imgs/floor1/507295612.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor1/575747325.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor1/326908771.jpg">
									</a>
								</div>
							</div>
							<div class="floor-mainb">
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor1/1497886070.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor1/1462126143.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor1/2066876044.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor1/1195374221.jpg">
									</a>
								</div>
							</div>
						</div>
						
						`;
			var str2 = `
						<div class="floor-main">
							<div class="floor-maint">
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor2/1165970256.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor2/1208320786.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor2/1210634352.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor2/1231633186.jpg">
									</a>
								</div>
							</div>
							<div class="floor-mainb">
								<div class="floor-mainb_t">
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor2/1280601873.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor2/1529390883.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor2/614403471.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor2/1205396420.jpg">
										</a>
									</div>
								</div>
								<div class="floor-mainb_b">
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor2/135044956.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor2/941129199.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor2/2049910330.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor2/res17353.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor2/res17804.jpg">
										</a>
									</div>
								</div>
								
							</div>
						</div>
						
						`;
			var str3 = `
						<div class="floor-main">
							<div class="floor-maint">
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor3/240359155.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor3/623763615.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor3/1046051717.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor3/1203852078.jpg">
									</a>
								</div>
							</div>
							<div class="floor-mainb">
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor3/467257849.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor3/646880134.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor3/1288214409.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor3/1477438473.jpg">
									</a>
								</div>
							</div>
						</div>
						
						`;
			var str4 = `
						<div class="floor-main">
							<div class="floor-maint">
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor4/205871468.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor4/1002802326.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor4/1321149351.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor4/1715778933.jpg">
									</a>
								</div>
							</div>
							<div class="floor-mainb">
								<div class="floor-mainb_t">
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor4/363230899.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor4/597460742.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor4/863531413.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor4/1516688284.jpg">
										</a>
									</div>
								</div>
								<div class="floor-mainb_b">
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor4/192211116.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor4/286010882.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor4/1893441264.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor4/1958271687.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor4/res17807.jpg">
										</a>
									</div>
								</div>
								
							</div>
						</div>
						
						`;
			var str5 = `
						<div class="floor-main">
							<div class="floor-maint">
								<div class="floor-imgw1">
									<a href="goods.html">
										<img src="imgs/floor5/1195564733.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor5/1927621072.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor5/434640678.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor5/1469953278.jpg">
									</a>
								</div>
							</div>
							<div class="floor-mainb">
								<div class="floor-mainb_t">
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor5/289197208.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor5/345162804.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor5/1188024571.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor5/670912581.jpg">
										</a>
									</div>
								</div>
								<div class="floor-mainb_b">
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor5/res17789.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor5/res17795.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor5/res17803.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor5/res17806.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor5/res17809.jpg">
										</a>
									</div>
								</div>
								
							</div>
						</div>
						
						`;
			var str6 = `
						<div class="floor-main">
							<div class="floor-maint">
								<div class="floor-imgw1">
									<a href="goods.html">
										<img src="imgs/floor6/174178623.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor6/1769379721.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor6/829664619.jpg">
									</a>
								</div>
								<div class="floor-imgw3">
									<a href="goods.html">
										<img src="imgs/floor6/1946126212.jpg">
									</a>
								</div>
							</div>
							<div class="floor-mainb">
								<div class="floor-mainb_t">
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor6/423208432.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor6/1025290681.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor6/1418717210.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor6/1513709037.jpg">
										</a>
									</div>
								</div>
								<div class="floor-mainb_b">
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor6/res4737.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor6/res6960.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor6/res17788.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor6/res17790.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor6/res17793.jpg">
										</a>
									</div>
								</div>
								
							</div>
						</div>
						
						`;
			var str7 = `
						<div class="floor-main">
							<div class="floor-maint">
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor7/733381336.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor7/res17019.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor7/1346109702.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor7/1762843148.jpg">
									</a>
								</div>
							</div>
							<div class="floor-mainb">
								<div class="floor-mainb_t">
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor7/728804015.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor7/1784931056.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor7/2065493634.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor7/1903759289.jpg">
										</a>
									</div>
								</div>
								<div class="floor-mainb_b">
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor7/res14542.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor7/863100407.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor7/590032876.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor7/res17805.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor7/415503454.jpg">
										</a>
									</div>
								</div>
								
							</div>
						</div>
						
						`;
			var str8 = `
						<div class="floor-main">
							<div class="floor-maint">
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor8/813977968.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor8/1133812048.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor8/1420590166.jpg">
									</a>
								</div>
								<div class="floor-imgw2">
									<a href="goods.html">
										<img src="imgs/floor8/2110551407.jpg">
									</a>
								</div>
							</div>
							<div class="floor-mainb">
								<div class="floor-mainb_t">
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor8/156762597.png">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor8/244604833.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor8/790857687.jpg">
										</a>
									</div>
									<div class="floor-imgw4">
										<a href="goods.html">
											<img src="imgs/floor8/2106203871.jpg">
										</a>
									</div>
								</div>
								<div class="floor-mainb_b">
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor8/640507708.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor8/1795233836.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor8/961089812.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor8/res17791.jpg">
										</a>
									</div>
									<div class="floor-imgw5">
										<a href="goods.html">
											<img src="imgs/floor8/res18451.jpg">
										</a>
									</div>
								</div>
								
							</div>
						</div>
						
						`;
			$('.floor .floor-con').html(str);
			
			var floor1 = $('.floor-con .floor1'),
				floor2 = $('.floor-con .floor2'),
				floor3 = $('.floor-con .floor3'),
				floor4 = $('.floor-con .floor4'),
				floor5 = $('.floor-con .floor5'),
				floor6 = $('.floor-con .floor6'),
				floor7 = $('.floor-con .floor7'),
				floor8 = $('.floor-con .floor8');
			var htm1 = floor1.html(),
				htm2 = floor2.html(),
				htm3 = floor3.html(),
				htm4 = floor4.html(),
				htm5 = floor5.html(),
				htm6 = floor6.html(),
				htm7 = floor7.html(),
				htm8 = floor8.html();
			
			floor1.html(htm1+str1);
			floor2.html(htm2+str2);
			floor3.html(htm3+str3);
			floor4.html(htm4+str4);
			floor5.html(htm5+str5);
			floor6.html(htm6+str6);
			floor7.html(htm7+str7);
			floor8.html(htm8+str8);
	})();
	
	function Floor(elem,time){
		this.floor = elem;
		this.floorBan = this.floor.find('.floor-ban');
		this.banCon = this.floorBan.find('.ban-con');
		this.a = this.banCon.find('a');
		this.imgs = this.banCon.find('img');
		this.lis = this.floorBan.find('li');
		this.spans = this.lis.find('span');
		this.width = this.floorBan.width();
		this.len = null;
		this.time = time;
		this.next = 0;
		this.timer1 = null;
		this.timer2 = null;
	}
	Floor.prototype = {	
		init: function(){
			var a = this.a.eq(0).clone();
			this.banCon.append(a);
			this.a = this.banCon.find('a');
			this.len = this.a.length;
			this.banCon.width(this.len * this.width);
			
			this.autoPlay();
			this.imgSwitch();
			this.lisHover();
			this.banconHover();
			
		},
		imgSwitch: function(){
			var _this = this;
			if(this.next >= this.len){
				this.banCon.css({
					left: 0
				});
				this.next = 1;
			};
			var num = this.next;
			num = num > this.len -2 ? 0 : num;
			this.lis.eq(num).find('span').stop(true).animate({
				width: 31
			},this.time,function(){
				$(this).css({
					width: 0
				});
				_this.banCon.stop(true).animate({
					left: -_this.next * _this.width
				});
				
			})
		},
		Switch: function(){
			this.banCon.stop(true).animate({
				left: -this.next * this.width
			});
		},
		autoPlay: function(){
			var _this = this;
			this.timer1 = setInterval(function(){
				_this.next++;
				_this.imgSwitch();
			},this.time);
		},
		lisHover: function(){
			var _this = this;
			this.lis.hover(function(){
				var index = $(this).index();
				_this.next = index;
				_this.Switch();
				$(this).siblings().find('span').stop(true).css({
					width: 0
				});
				$(this).find('span').stop(true).css({
					width: 31
				});
				
			},function(){
				var index = $(this).index();
				_this.next = index;
				_this.spans.css({
					width: 0
				})
				var num = _this.next;
				num = num > _this.len -2 ? 0 : num;
				_this.lis.eq(num).find('span').stop(true).animate({
					width: 31
				},_this.time,function(){
					$(this).css({
						width: 0
					});
					_this.banCon.stop(true).animate({
						left: -(_this.next+1) * _this.width
					});
					
				})
			})
		},
		
		banconHover: function(){
			var _this = this;
			this.floorBan.hover(function(){
				clearInterval(_this.timer1);
				clearInterval(_this.timer2);
			},function(){
				_this.autoPlay();
			});
		}
	
	};
	new Floor($('.floor1'),1500).init();
	new Floor($('.floor2'),2500).init();
	new Floor($('.floor3'),3500).init();
	new Floor($('.floor4'),2500).init();
	new Floor($('.floor5'),3500).init();
	new Floor($('.floor6'),1500).init();
	new Floor($('.floor7'),2500).init();
	new Floor($('.floor8'),3500).init();
	
	var lift = {
		floorCon: $('.floor .floor-con'),
		floorItems: $('.floor .floor-con .floor-item'),
		lift: $('.floor .lift'),
		liftCon: $('.floor .lift .lift-con'),
		height: $('.floor .floor-con .floor1').height(),
		backTopbtn: null,
		lis: null,
		init: function(){
			this.createLift();
			this.resize();
			this.scroll();
			this.backTop();
			this.lisClick();
		},
		createLift: function(){
			var str = '';
			for(var i=0; i<8; i++){
				str += `
						<li class="lift${1+1}"></li>
					`;
			}
			str += '<li class="backTop"></li>';
			this.liftCon.html(str);
			this.lis = this.liftCon.find('li');
			this.backTopbtn = $('.floor .lift .lift-con .backTop');
			var left = this.floorCon.offset().left,
				width = this.lift.width();
			this.lift.css({
				left: left - width - 10
			});
		},
		resize: function(){
			var _this = this;
			$(window).resize(function(){
				var left = _this.floorCon.offset().left,
					width = _this.lift.width();
				_this.lift.css({
					left: left - width - 10
				});
			})
		},
		scroll: function(){
			var _this = this;
			$(window).on('scroll',function(){
				var Wheight = $(window).height(),
					scrollTop = $(document).scrollTop();
				_this.floorItems.each(function(index){
					var self = $(this);
					var top = self.offset().top,
	 					height = self.height();
	 				
	 				if(scrollTop+Wheight/2 > top && scrollTop+Wheight/2 < top+height ){
	 					_this.lis.eq(index).addClass('active').siblings().removeClass('active');
	 				}
				})
				if(_this.floorItems.eq(0).offset().top - 250 > scrollTop){
					_this.lift.hide();
					return;
				}
				_this.lift.show();
			})
		},
		backTop: function(){
			var _this = this;
			this.backTopbtn.on('click',function(){
				$(document.body).stop(true).animate({
					scrollTop: 0
				})
				
			})
		},
		lisClick: function(){
			var _this = this;
			this.liftCon.on('click','li:not(:last-child)',function(){
				var self = $(this),
					index = self.index(),
					Top = _this.floorItems.eq(index).offset().top;
				$(window).off('scroll');
				self.addClass('active').siblings().removeClass('active');
				$(document.body).stop(true).animate({
					scrollTop: Top
				},800,function(){
					$(window).on('scroll',function(){
						var Wheight = $(window).height(),
							scrollTop = $(document).scrollTop();
						_this.floorItems.each(function(index){
							var self = $(this);
							var top1 = self.offset().top,
			 					height = self.height();
			 				
			 				if(scrollTop+Wheight/2 > top1 && scrollTop+Wheight/2 < top1+height ){
			 					_this.lis.eq(index).addClass('active').siblings().removeClass('active');
			 				}
						})
						if(_this.floorItems.eq(0).offset().top - 250 > scrollTop){
							_this.lift.hide();
							return;
						}
						_this.lift.show();
					})
				})
			})
		}
	
	}
	lift.init();
	
	(function createBottom(){
		var data = [
				['imgs/bottom/65441130_200x200.jpg','十六盏 海鲜酱饕餮4瓶(瑶柱酱干贝酱+扇贝酱+海胆酱）组合装礼','98.0'],
				['imgs/bottom/SP_2000_20000924987001_01_10006.jpg','宏民 土老帽 麻辣美味豆筋 100g','3.9'],
				['imgs/bottom/SP_3020_302000611472_01_10006.jpg','索尼（SONY）PCM-D100 数码录音棒','3999.0'],
				['imgs/bottom/SP_2000_20000328104001_01_10006.jpg','湾仔码头 长崎猪软骨拉面 325g','14.0'],
				['imgs/bottom/1301981256_200x200.jpg','戴森(Dyson) HD01 电吹风 紫红色','2998.0'],
				['imgs/bottom/SP_1000_100027044266_01_10006.jpg','维尼卡女包紫色30*8*18cm','283.0'],
				['imgs/bottom/SP_3020_302001535000_01_10006.jpg','苹果（Apple）iPhone7 Plus 128G 黑色 移动联通电信4G 手机','6888.0'],
				['imgs/bottom/SP_2000_20000844425001_01_10006.jpg','护舒宝(whisper) 甜睡瞬洁 超长夜用卫生巾 360mm*6片','13.0'],
				['imgs/bottom/SP_2000_20000238746001_01_10006.jpg','护舒宝(Whisper) 甜睡瞬洁 贴身 加长夜用卫生巾 400mm*6片','18.0'],
				['imgs/bottom/SP_3030_303001533919_01_10006.jpg','狮王（LION）Between软毛牙刷（标准） 单只装 日本进口','12.0'],
				['imgs/bottom/SP_3030_303001536419_01_10006.jpg','古今 女式上薄下厚定型杯文胸 杏色C75','98.0'],
				['imgs/bottom/SP_3020_302001535078_01_10006.jpg','日本进口 花王/Merries 妙而舒婴儿纸尿裤 特大号【12-22kg】 ','45.0'],
				['imgs/bottom/SP_3030_303001469952_01_10006.jpg','凌美（LAMY）恒星系列钢笔 F笔尖 蓝绿色 德国进口','98.0'],
				['imgs/bottom/SP_2000_20000267338001_01_10006.jpg','丽丽贝尔（Lily Bell）超薄柔软化妆棉 150枚 纯棉天然洁面双面三','23.0'],
				['imgs/bottom/SP_1000_100027024469_01_10006.jpg','Cozy Latex颈椎乳胶枕CL101 60*36*10/12 泰国进口','68.0'],
				['imgs/bottom/SP_1000_100027055755_01_10006.jpg','古今 女式立体上托定型杯文胸 杏肤色C75','68.0'],
				['imgs/bottom/SP_3030_303000437239_01_10006.jpg','妮飘/Nepia 抽取式面纸二层 180抽*3包','88.0'],
				['imgs/bottom/SP_2000_20000115085001_01_10006.jpg','益昌老街 香滑奶茶 南洋风味速溶奶茶饮品 精选锡兰红茶 200g/盒 ','198.0'],
				['imgs/bottom/SP_2000_20000771951001_01_10006.jpg','Dyson 圆筒吸尘器DC46CF 金色','298.0'],
				['imgs/bottom/SP_1000_100027052778_01_10006.jpg','泰蓝 金枕头榴莲冰鲜果肉 泰国进口 500g','34.0'],
				['imgs/bottom/SP_2000_20000793424001_01_10006.jpg','日本进口 花王/Merries 妙而舒婴儿纸尿裤 特大号【12-22kg】 ','38.0'],
				['imgs/bottom/SP_3030_303001453271_01_10006.jpg','桂冠 芝士年糕 192g 新西兰芝士 芝心年糕','28.0'],
				['imgs/bottom/SP_3030_303001472966_01_10006.jpg','依云（Evian）天然矿泉水1.5L 法国进口','3.0'],
				['imgs/bottom/1388669439_200x200.jpg','湾仔码头 鲜虾云吞面 155g','5.0'],
				['imgs/bottom/SP_1000_100027015917_01_10006.jpg','桂冠 奶香刀切馒头 320g','2.0'],
				['imgs/bottom/SP_3020_302001534982_01_10006.jpg','安纳舒 天然乳胶中软舒适两用型可拆洗床垫 舒雅C526 ','60.0'],
				['imgs/bottom/SP_3020_302001199105_01_10006.jpg','佳惠 红方腐乳 500g','3.0'],
				['imgs/bottom/SP_2000_20000060973001_01_10006.jpg','徐福记 芝麻沙琪玛 320g/袋','1.0'],
				['imgs/bottom/SP_3020_302001460170_01_10006.jpg','大昌 粟米粒 400g','2.0'],
				['imgs/bottom/SP_2000_20000769110001_01_10006.jpg','北大荒 五常稻花香米 4KG','68.0']
		
			];
		var str = '';
		for(var i=0,len=data.length; i<len; i++) {
			str += `
					<div class="bottom-item item${i+1}">
						<div class="bottom-item-img">
							<a href="goods.html">
								<img src="${data[i][0]}">
							</a>
						</div>
						<div class="bottom-item-title">
							<a href="goods.html">${data[i][1]}</a>
						</div>
						<div class="bottom-item-price">
							￥<span>${data[i][2]}</span>
						</div>
					</div>
		
				`;
		}
		var htm = $('.bottom .bottom-con').html();
		
		$('.bottom .bottom-con').html(htm+str)
	})();
	
	
	
	
})
