define(['jquery'],function(){
	var cart = {
		goodslitItem: $('#goodslist'),
		totalnum: $('#totalnum'),
		totalprice: $('#totalprice'),
		clearGoods: $('#clear-Goods'),
		carconempty: $(".car-con-empty"),
		carcongoodslist: $('.car-con-goodslist'),
		init: function(){
			this.createGoodlist();
			this.addClick();
			this.redClick();
			this.inputBlur();
			this.delClick();
			this.clearGoodsClick();
			this.shoucang();
			this.addcang();
		},
		createGoodlist: function(){
			var _this = this;
			$.ajax({
				url: 'http://192.168.55.44/PC-Project-Admin/cartList.php',
				dataType: 'jsonp',
				success: function(data){
					if(data.data.length){
						createlist(data);
						return;
					}else if(!data.data.length){
						$('#car-con-empty').show();
						$('#car-con-goodslist').hide();
					}
					
				}
			});
			function createlist(data){
				var str = '',
						result = data.data,
						i;
					for(i=0,len=result.length; i<len; i++){
						str += `
								<ol data-id="${result[i].id}" data-src="${result[i].goods_pic_m}">
									<li>
										<a href="goods.html"><img src="${result[i].goods_pic_m}"></a>
									</li>
									<li>
										<a href="goods.html" class="data-content">${result[i].goods_name}</a>
										<span>${result[i].goods_type}</span>
									</li>
									<li>￥<span class="price">${result[i].goods_price}</span></li>
									<li>
										<span class="reduce">-</span>
										<input type="text" class="num" value="${result[i].amount}" data-stock="${result[i].goods_stock}"/>
										<span class="add">+</span>
									</li>
									<li>￥0.00</li>
									<li>-</li>
									<li>
										￥<span class="xiaoji">${parseInt(result[i].goods_price*result[i].amount).toFixed(2)}</span>
									</li>
									<li>
										<a href="javascript:;" class="shoucang">收藏</a>
										<span>|</span>
										<a href="javascript:;" class="del2">移除</a>
									</li>
								</ol>
								`;
					};
				$('#goodslist').html(str);
				var xiaoji = $('#goodslist').find('.xiaoji'),
					price = 0;
				xiaoji.each(function(index){
					price += parseInt( xiaoji.eq(index).html() );
				});
				$('#totalprice').html(parseFloat(price).toFixed(2));
				var input = $('#goodslist').find('.num'),
					num2 = 0;
				input.each(function(index){
					num2 += parseInt( input.eq(index).val() );
				});
				$('#totalnum').html(num2);
				
				}
		},
		updatecart: function(id,v,price){
			var ol2 = $('#gouwuche-con').find('ol'),
				num2 = 0,
				price2 = 0;
			ol2.each(function(index){
				if( ol2.eq(index).data('id') == id){
					ol2.eq(index).find('.num').val(v);
					ol2.eq(index).find('.xiaoji').html((parseFloat(v)*price).toFixed(2));
				}
				num2 += parseInt( ol2.eq(index).find('.num').val() );
				price2 += parseInt( ol2.eq(index).find('.xiaoji').html())
			});
			$('#carintotalnum').html(num2);
			$('#carintotalprice').html(parseFloat(price2).toFixed(2));
		},
		updateCartdel: function(id){
			var ol2 = $('#gouwuche-con').find('ol');
			ol2.each(function(index){
				if( ol2.eq(index).data('id') == id){
					ol2.eq(index).remove();
				}
			});
		},
		addClick: function(){
			var _this = this;
			this.goodslitItem.on('click','.add',function(){
				var self = $(this),
					v = parseInt(self.prev().val()),
					price = self.parents('li').siblings().find('.price').html(),
					t = parseInt(self.prev().data('stock')),
					id = self.parents('ol').data('id');
				if(v >= t){
					self.prev().val(t);
					return;
				};
				v++;
				self.prev().val(v);
				self.parents('li').siblings().find('.xiaoji').html(parseFloat(v*price).toFixed(2));
				_this.updateGoods(id,v);
				_this.updateTotalprice();
				_this.updateTotalnum();
				_this.updatecart(id,v,price);
			});
		},
		redClick: function(){
			var _this = this;
			this.goodslitItem.on('click','.reduce',function(){
				var self = $(this),
					v = parseInt(self.next().val()),
					price = self.parents('li').siblings().find('.price').html(),
					id = self.parents('ol').data('id');
				if(v <=1){
					self.next().val(v);
					return;
				}
				v--;
				self.next().val(v);
				self.parents('li').siblings().find('.xiaoji').html(parseFloat(v*price).toFixed(2));
				_this.updateGoods(id,v);
				_this.updateTotalprice();
				_this.updateTotalnum();
				_this.updatecart(id,v,price);
			});
		},
		inputBlur: function(){
			var _this = this;
			this.goodslitItem.on('blur','.num',function(){
				var self = $(this),
					v = parseInt( self.val() ),
					price = self.parents('li').siblings().find('.price').html(),
					t = parseInt(self.data('stock')),
					id = self.parents('ol').data('id'),
					reg = /\d+/;
				var num = reg.exec(self.val());
				
				if(num[0] > t){
					num[0] = t;
				};
				self.val(num[0]);
				self.parents('li').siblings().find('.xiaoji').html(parseFloat(num[0]*price).toFixed(2));
				_this.updateGoods(id,num[0]);
				_this.updateTotalnum();
				_this.updateTotalprice();
				_this.updatecart(id,num[0],price);
			});
		},
		updateTotalnum: function(){
			var _this = this;
			var input = $('#goodslist').find('.num'),
				num2 = 0;
			input.each(function(index){
				num2 += parseInt( input.eq(index).val() );
			});
			$('#totalnum').html(num2);
			$('#head-carnum').html(num2);
			$('#sideCarnum').html(num2);
			if(num2<=0){
				setTimeout(function(){
					_this.carconempty.show();
					_this.carcongoodslist.hide();
				},1000);
				$('#head-carcon').css({
					opacity: 1
				});
			}
			if(num2>=1){
				$('#head-carcon').css({
					opacity: 0
				});
			}
		},
		updateTotalprice: function(){
			var xiaoji = $('#goodslist').find('.xiaoji'),
					price2 = 0;
				xiaoji.each(function(index){
					price2 += parseInt( xiaoji.eq(index).html() );
				});
				$('#totalprice').html(parseFloat(price2).toFixed(2));
		},
		updateGoods: function(id,amount){
			$.ajax({
				url: 'http://192.168.55.44/PC-Project-Admin/cartUpdate.php',
				data: {
					id: id,
					amount: amount
				},
				dataType: 'jsonp',
				success: function(data){
					
				}
			});
			
		},
		dleGoods: function(id){
			$.ajax({
				url: 'http://192.168.55.44/PC-Project-Admin/cartDelete.php',
				data: {
					id: id,
				},
				dataType: 'jsonp',
				success: function(data){
					
				}
			});
		},
		delClick: function(){
			var _this = this;
			$('#goodslist').on('click','.del2',function(){
				var self = $(this),
					ol = self.parents('ol'),
					id = ol.data('id');
				var str = '<div class="del-Goods"><span>确定要删除宝贝吗？</span><a href="javascript:;" class="del-Goods-ok" id="del-Goods-ok">确定</a><a href="javascript:;" class="del-Goods-cancel" id="del-Goods-cancel">取消</a></div>',
					div = document.createElement('div');
				div.innerHTML = str;
				$(document.body).append(div);
				$('#del-Goods-cancel').click(function(){
					div.remove();
				});
				$('#del-Goods-ok').click(function(){
					div.remove();
					ol.remove();
					_this.dleGoods(id);
					_this.updateTotalnum();
					_this.updateTotalprice();
					_this.updateCartdel(id);
				});
				
			});
		},
		clearGoodsClick: function(){
			var _this = this;
			this.clearGoods.on('click',function(){
				var self = $(this),
					ol = _this.goodslitItem.find('ol'),
					ids = [];
				ol.each(function(index){
					ids.push(ol.eq(index).data('id'));
				});
				if(!ids.length){
					return;
				}
				var str = '<div class="del-Goods"><span>确定要清空购物车吗？</span><a href="javascript:;" class="del-Goods-ok" id="clear-Goods-ok">确定</a><a href="javascript:;" class="del-Goods-cancel" id="clear-Goods-cancel">取消</a></div>',
					div = document.createElement('div');
				div.innerHTML = str;
				$(document.body).append(div);
				$('#clear-Goods-cancel').click(function(){
					div.remove();
				});
				$('#clear-Goods-ok').click(function(self){
					div.remove();
					ol.each(function(index){
						ol.eq(index).remove();
					});
					var ol2 = $('#gouwuche-con').find('ol');
					ol2.each(function(index){
						ol2.eq(index).remove();
					});
					$('#totalprice').html(0);
					$('#totalnum').html(0.00);
					$('#carintotalnum').html(0);
					$('#carintotalprice').html(0.00);
					$('#head-carnum').html(0.00);
					$('#sideCarnum').html(0.00);
					_this.dleGoods(ids);
					setTimeout(function(){
						_this.carconempty.show();
						_this.carcongoodslist.hide();
					},1000);
					
				});
			});
		},
		addcang: function(){
			$('#addcang').click(function(e){
				e.stopPropagation();
				$('.side-bar').stop(true).animate({
						right: 0
					});
				$('.side-bar .carout .myshoucang').addClass('current').siblings().removeClass('current');
				$('.side-bar .carout .myshoucang').addClass('active').siblings().removeClass('active');
				$('.carin-shoucang').addClass('active').siblings().removeClass('active');
				
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
		shoucang: function(){
			var _this = this;
				
			var i = parseInt( this.readCookie('goodsnum') ) || 0;
			this.goodslitItem.on('click','.shoucang',function(){
				var str = '<div class="addshoucang"><span>收藏成功</span></div>',
					div = document.createElement('div');
				div.innerHTML = str;
				$(document.body).append(div);
				setTimeout(function(){
					div.remove();
				},1000);
				var self = $(this),
					src = self.parents('ol').data('src'),
					content = self.parents('ol').find('.data-content').html();
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
		}
	}
	cart.init();
});
