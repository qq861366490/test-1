define(['jquery','sideBar'],function(){
	var goods = {
		imgsCon: $('.goods .goods-left .details-con .imgs-con'),
		goodstype: $('.goods-con-left .goods-con-right .lexing .goodstype'),
		price: $('#price'),
		goodsId: $('#goods-id'),
		goodsStock: $('#goods-stock'),
		red: $('#red'),
		add: $('#add'),
		input: $('#input'),
		goodstypeItem: null,
		goumai: $('#goumai'),
		jiaru: $('#jiaru'),
		lis: $('.goodsl-item ul li'),
		goodslCon: $('.goods-con-left .goodsl-con'),
		midImgCon: $('.goodsl-con .midimg'),
		midImgs: $('.goodsl-con .midimg img'),
		larImgCon: $('.goodsl-con .largeimg'),
		larImgs: $('.goodsl-con .largeimg img'),
		glass: $('.goodsl-con .glass'),
		arrL: $('.goodsl-item-arrL'),
		arrR: $('.goodsl-item-arrR'),
		consultCon: $('.ul .consult-con'),
		commentCon: $('.ul .comment-con'),
		detailsCon: $('.goods-left-details .details-con'),
		con0: $('.goods-left-details .con0'),
		lis2: $('.ul li'),
		num: 0,
		timer: null,
		init: function(){
			this.createimg();
			this.creategoodstype();
			this.goodstypeItemClick();
			this.addClick();
			this.redClick();
			this.inputBlur();
			this.jiaruClick();
			this.goumaiClick();
			this.lisClick();
			this.arrRClick();
			this.arrLClick();
			this.lishover();
			this.goodslConHover();
			this.lis2Click();
			this.collectionClick();
		},
		lisClick: function(){
			var _this = this;
			this.lis.on('click',function(){
				var self = $(this),
					index = self.index();
				self.addClass('active').siblings().removeClass('active');
				_this.midImgs.eq(index).addClass('active').siblings().removeClass('active');
				_this.larImgs.eq(index).addClass('active').siblings().removeClass('active');
				_this.num = index;
			});
		},
		lishover: function(){
			var _this = this;
			this.lis.hover(function(){
				var self = $(this),
					index = self.index();
				self.addClass('active').siblings().removeClass('active');
				_this.midImgs.eq(index).addClass('active').siblings().removeClass('active');
				_this.larImgs.eq(index).addClass('active').siblings().removeClass('active');
				_this.num = index;
			});
		},
		swtich: function(){
			if(this.num > this.lis.size()-1){
				this.num = 0;
			};
			if(this.num <0 ) {
				this.num = this.lis.size() - 1;
			};
			this.lis.eq(this.num).addClass('active').siblings().removeClass('active');
			this.midImgs.eq(this.num).addClass('active').siblings().removeClass('active');
			this.larImgs.eq(this.num).addClass('active').siblings().removeClass('active');
		},
		arrRClick: function(){
			var _this = this;
			this.arrR.on('click',function(){
				_this.num++;
				_this.swtich();
			});
		},
		arrLClick: function(){
			var _this = this;
			this.arrL.on('click',function(){
				_this.num--;
				_this.swtich();
			});
		},
		goodslConHover: function(){
			var _this = this;
			this.goodslCon.on('mouseenter',function(){
				var self = $(this);
				self.on('mousemove',function(e){
					var l = e.clientX - self.offset().left - _this.glass.width()/2,
						t = e.clientY - self.offset().top - _this.glass.height()/2 + $(document.body).scrollTop();
					l = l < 0 ? 0 : (l>_this.goodslCon.width()-_this.glass.width() ? _this.goodslCon.width()-_this.glass.width() : l);
					t = t < 0 ? 0 : (t>_this.goodslCon.height()-_this.glass.height() ? _this.goodslCon.height()-_this.glass.height() : t);
					_this.glass.css({
						left: l,
						top: t
					});
					_this.larImgs.css({
						left: -l*(_this.larImgCon.width()/_this.glass.width()),
						top: -t*(_this.larImgCon.height()/_this.glass.height())
					});
				});
			});
		},
		lis2Click: function(){
			var _this = this;
			this.lis2.on('click',function(){
				var self = $(this),
					index = self.index();
				self.addClass('active').siblings().removeClass('active');
				_this.con0.eq(index).show().siblings().not('.ul').hide();
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
		collectionClick: function(){
			var _this = this;
				
			var i = parseInt( this.readCookie('goodsnum') ) || 0;
			$('#collection').click(function(){
				var str = '<div class="addshoucang"><span>收藏成功</span></div>',
					div = document.createElement('div');
				div.innerHTML = str;
				$(document.body).append(div);
				setTimeout(function(){
					div.remove();
				},1000);
				var 
					src = $('.goodsl-item li.active a img')[0].src,
					content = $('.goods-con-right .goods-con-r-title h1').html();
				var date = new Date();
					i++;
				date.setDate(date.getDate() + 30);
				expires = date.toGMTString();
				document.cookie = 'goodsrc'+i+'='+src+';expires='+expires;
				document.cookie = 'goodsnum='+i+';expires='+expires;
				document.cookie = 'goodcontent'+i+'='+content+';expires='+expires;
				var str = '';
					str = `
							<ol>
								<li>
									<a href="goods.html"><img src="${src}"></a>
								</li>
								<li>
									<a href="goods.html" class="data-content">${content}</a>
								</li>
								<li>
									<a href="javascript:;" class="del">移除</a>
								</li>
							</ol>
						`;
				var	htm = $('#shoucanglist').html();
				$('#shoucanglist').html(htm+str);
			});
		
		},
		createimg: function(){
			str = '';
			for(var i=1; i<=20; i++){
				str += '<img src="imgs/goods/'+i+'.jpg">'
			}
			this.imgsCon.html(str);
		},
		creategoodstype: function(){
			$.ajax({
				url: 'http://192.168.55.44/PC-Project-Admin/goods.php',
				dataType: 'jsonp',
				success: function(data){
					create(data);
				}
			});
			var _this = this;
			function create(data){
				var str = '';
				for(var i=0,len=data.length; i<len; i++){
					str += `
							<div class="goodstype-item clearfix" data-id="${data[i].id}" data-type="${data[i].goods_type}" data-stock="${data[i].goods_stock}" data-src="${data[i].goods_pic_s}" data-price="${data[i].goods_price}">
								<img src="${data[i].goods_pic_s}">
								<span>${data[i].goods_type}</span>
							</div>
							`;
				};
				var goodstype = $('#goodstype'); 
				goodstype.html(str);
				_this.goodstypeItem = goodstype.find('.goodstype-item');
				_this.goodstypeItem.eq(0).addClass('active');
				var price = _this.goodstypeItem.eq(0).data('price');
				$('#price').html( parseFloat(price).toFixed(2) );
				$('#goods-id').html(_this.goodstypeItem.eq(0).data('id'));
				$('#goods-stock').html(_this.goodstypeItem.eq(0).data('stock'));
			};
		},
		goodstypeItemClick: function(){
			var _this = this;
			$('#goodstype').on('click','.goodstype-item',function(){
				var self = $(this)
				self.addClass('active').siblings().removeClass('active');
				_this.price.html( parseFloat(self.data('price')).toFixed(2) );
				_this.goodsId.html(self.data('id'));
				_this.goodsStock.html(self.data('stock'));
				var v = _this.input.val(),
					t = parseInt(_this.goodsStock.html());
				if(v >= t){
					_this.input.val(t);
					return;
				}
			})
		},
		addClick: function(){
			var _this = this;
			this.add.on('click',function(){
				var self = $(this),
					v = parseInt(self.prev().val()),
					t = parseInt(_this.goodsStock.html());
				
				if(v >= t){
					self.prev().val(t);
					return;
				};
				v++;
				self.prev().val(v);
				
			});
		},
		redClick: function(){
			var _this = this;
			this.red.on('click',function(){
				var self = $(this),
					v = parseInt(self.next().val());
				if(v <= 1){
					self.next().val(1);
					return;
				}
				v--;
				self.next().val(v);
			});
		},
		inputBlur: function(){
			var _this = this;
			this.input.on('blur',function(){
				var self = $(this),
					v = parseInt( self.val() ),
					t = parseInt(_this.goodsStock.html()),
					reg = /\d+/;
				var num = reg.exec(self.val());
				if(num[0] >= t){
					self.val(t);
					return;
				}
				self.val(num[0]);
			});
		},
		jiaruClick: function(){
			var _this = this;
			var clientW = document.documentElement.clientWidth;
			this.jiaru.on('click',function(e){
				
				var m = e.clientX , n = e.clientX;
				var v = _this.input.val(),
					id = _this.goodsId.html();
				$.ajax({
					url: 'http://192.168.55.44/PC-Project-Admin/addToCart.php',
					data: {
						id: id,
						amount: v
					},
					dataType: 'jsonp',
					success: function(data,m,n){
						if(data.status){
//							var str = '<div class="jiarucart"><span>加入购物车成功！</span></div>',
//								div = document.createElement('div');
//							div.innerHTML = str;
//							$(document.body).append(div);
//							var num = parseInt($('#sideCarnum').html()),
//								num2 = parseInt($('#head-carnum').html());
//							$('#sideCarnum').html(parseInt(v)+num);
//							$('#head-carnum').html(parseInt(v)+num2);
//							setTimeout(function(){
//								div.remove();
//							},1000);

							
							var 
								src = $('#goodstype .goodstype-item.active').data('src'),
								img = document.createElement('img');
							img.src = src;
							img.className = 'move';
							img.id = 'move';
							$('#jiaru').append(img);
							var r = clientW - $('#sideCarnum').offset().left-75,
								t1 = $('#sideCarnum').offset().top-180;

							$('#move').stop(true).animate({
								width: 40,
								height: 40
							},500);
							var x = -(clientW - e.clientX - (r+100) ),
							    y = -(e.clientY- (t1-100) );
		
							var a = (100*y/x+100)/(100*x-10000),
							    b = (-100 - 10000*a)/100;
		
							a = a.toFixed(4);
							b = b.toFixed(4);
							var l = x,
								t = y;
							clearInterval(timer);
							var timer = setInterval(function(){
								l += 10;
								t = a * l * l + b * l;
								if(l >= r+165){   
									l = r;
									t = -r;
									$('#move').stop(true).animate({
										width: 10,
										height: 10
									},500);
									var num = parseInt($('#sideCarnum').html()),
										num2 = parseInt($('#head-carnum').html());
									$('#sideCarnum').html(parseInt(v)+num);
									$('#head-carnum').html(parseInt(v)+num2);
									img.remove();
									clearInterval(timer);
								};
								$('#move').css({
									left: clientW + l - (r+100) - 80,
									top: (t1-100) - t
								});
								
							},13);
							
							$.ajax({
								url: 'http://192.168.55.44/PC-Project-Admin/cartList.php',
								dataType: 'jsonp',
								success: function(data){
									if(data.data.length){
										createlist(data);
										return;
									}else if(!data.data.length){
										
									}
								}
							});
							function createlist(data){
								var str = '',
										result = data.data,
										i;
									for(i=0,len=result.length; i<len; i++){
										str += `
												<ol data-id="${result[i].id}" data-src="${result[i].goods_pic_m}" class="clearfix">
													<li>
														<a href="goods.html"><img src="${result[i].goods_pic_m}"></a>
													</li>
													<li>
														<a href="goods.html" class="data-content">${result[i].goods_name}</a>
														<span>${result[i].goods_type}</span>
													</li>
													<li>单价￥<span class="price">${result[i].goods_price}</span></li>
													<li>
														<span class="reduce">-</span>
														<input type="text" class="num" value="${result[i].amount}" data-stock="${result[i].goods_stock}"/>
														<span class="add">+</span>
													</li>
													<li>
														小计￥<span class="xiaoji">${parseFloat(result[i].amount*result[i].goods_price).toFixed(2)}</span>
													</li>
													<li>
														<a href="javascript:;" class="del">删除</a>
													</li>
												</ol>
												`;
									};
								$('#gouwuche-con').html(str);
							
								var xiaoji = $('#gouwuche-con').find('.xiaoji'),
									price = 0;
								xiaoji.each(function(index){
									price += parseInt( xiaoji.eq(index).html() );
								});
								$('#totalprice').html(parseFloat(price).toFixed(2));
								var input = $('#gouwuche-con').find('.num'),
									num2 = 0;
								input.each(function(index){
									num2 += parseInt( input.eq(index).val() );
								});
								$('#carintotalnum').html(num2);
								$('#carintotalprice').html(price.toFixed(2));
								$('#head-carcon').css({
									opacity: 0
								});
							
							}
						
						}else{
							var str = '<div class="jiarucart"><span>'+data.info+'</span></div>',
								div = document.createElement('div');
							div.innerHTML = str;
							$(document.body).append(div);
							setTimeout(function(){
								div.remove();
							},1000);
						}
					}
				});
			});
		},
		goumaiClick: function(){
			var _this = this;
			this.goumai.on('click',function(){
				var v = _this.input.val(),
					id = _this.goodsId.html();
				$.ajax({
					url: 'http://192.168.55.44/PC-Project-Admin/addToCart.php',
					data: {
						id: id,
						amount: v
					},
					dataType: 'jsonp',
					success: function(data){
						if(data.status){
							location.href = "cart.html";
						}else{
							var str = '<div class="jiarucart"><span>未登录</span></div>',
								div = document.createElement('div');
							div.innerHTML = str;
							$(document.body).append(div);
							setTimeout(function(){
								div.remove();
							},1000);
						}
					}
				});
			});
		}
		
			
		
		
	}
	goods.init();
});
