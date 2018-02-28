define(['jquery'],function(){
	var side = {
		side1: null,
		sideBar: null,
		carout: null,
		carin: null,
		ulis: null,
		backT: null,
		flag: false,
		closed: null,
		i: null,
		init: function(elem){
			this.side1 = elem;
			this.sideBar = this.side1.find('.side-bar');
			this.carout = this.sideBar.find('.carout');
			this.carin = this.sideBar.find('.carin');
			this.ulis = this.carout.find('ul li');
			this.backT = this.carout.find('.backT');
			this.closed = this.carin.find('.closed');
			
			this.sideshow();
			this.closedClick();
			this.hidebar();
			this.backTop();
			this.showGoodsnum();
			this.createShoucang();
			this.delClick();
			this.clearShoucang();
			this.carinnote();
			this.creategoodslist();
			this.addClick();
			this.redClick();
			this.inputBlur();
			this.deelClick();
			this.carinClick();
		},
		showGoodsnum: function(){
			$.ajax({
				url: 'http://192.168.55.44/PC-Project-Admin/cartList.php',
				dataType: 'jsonp',
				success: function(data){
					var result = data.data,
						num = 0;
					if(result){
						
						for(i=0,len=result.length; i<len; i++) {
							num += parseInt( result[i].amount );
						}
						$('#sideCarnum').html(num);
						return;
					}else if(!result){
						
					}
					
				}
			});
		},
		sideshow: function(){
			var _this = this;
			this.ulis.on('click',function(e){
				e.stopPropagation();
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
					_this.carin.find('.item').eq(index).addClass('active').siblings().removeClass('active');
					_this.flag = true;
				});
			
			
		},
		closedClick: function(){
			var _this = this;
			this.closed.on('click',function(e){
				e.stopPropagation();
				_this.sideBar.stop(true).animate({
						right: -270
					});
				_this.flag = false;
			});
			
		},
		hidebar: function(){
			var _this = this;
			$(document.body).click(function(e){
				e.stopPropagation();
				_this.sideBar.stop(true).animate({
						right: -270
					});
				_this.flag = false;
			})
		},
		backTop: function(){
			var _this = this;
			this.backT.on('click',function(e){
				e.stopPropagation();
				$(document.body).stop(true).animate({
					scrollTop: 0
				})
				
			})
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
		createShoucang: function(){
			var data1 = [],
				data2 = [];
			for(var i = 1; i<=parseInt(this.readCookie('goodsnum')); i++){
				data1.push(this.readCookie('goodsrc'+i));
				data2.push(this.readCookie('goodcontent'+i));
			}
			var str = '';
			for(var i=0; i<data1.length; i++){
				
				str += `
						<ol data-id="${i+1}" data-src="${data1[i]}" data-content="${data2[i]}">
							<li>
								<a href="goods.html"><img src="${data1[i]}"></a>
							</li>
							<li>
								<a href="goods.html" class="data-content">${data2[i]}</a>
							</li>
							<li>
								<a href="javascript:;" class="del">移除</a>
							</li>
						</ol>
					`;
			}
			var	htm = $('#shoucanglist').html();
			if(!str){
				return;
			};
			$('#shoucanglist').html(htm+str);
			
		},
		delClick: function(){
			$('.goodslist-item').on('click','.del',function(e){
				e.stopPropagation();
				var self = $(this),
					ol = self.parents('ol'),
					i = ol.data('id'),
					src = ol.data('src'),
					content = ol.data('content');
				var date = new Date();
				date.setDate(date.getDate() - 1);
				expires = date.toGMTString();
				document.cookie = 'goodsrc'+i+'='+src+';expires='+expires;
				document.cookie = 'goodcontent'+i+'='+content+';expires='+expires;
				ol.remove();
				
				var date2 = new Date();
				date2.setDate(date2.getDate() + 30);
				expires2 = date2.toGMTString();
				document.cookie = 'goodsnum='+(i-1)+';expires='+expires2;
			});
		},
		clearShoucang: function(){
			$('#clear-shoucang').on('click',function(e){
				e.stopPropagation();
				var self = $(this),
					ol = $('#shoucanglist').find('ol');
				
					
				ol.each(function(index){
					var src = ol.eq(index).data('src'),
						content = ol.eq(index).data('content');
					var date = new Date();
					date.setDate(date.getDate() - 1);
					expires = date.toGMTString();
					document.cookie = 'goodsrc'+(index+1)+'='+src+';expires='+expires;
					document.cookie = 'goodsnum='+(index+1)+';expires='+expires;
					document.cookie = 'goodcontent'+(index+1)+'='+content+';expires='+expires;
					ol.eq(index).remove();
					index++;
				});
				
			});
		},
		carinnote: function(){
			var username = this.readCookie('userAccount');
			if(!username){
				return;
			}
			$('.carin-note').html('欢迎您'+username);
		},
		creategoodslist: function(){
			var _this = this;
			$.ajax({
				url: 'http://192.168.55.44/PC-Project-Admin/cartList.php',
				dataType: 'jsonp',
				success: function(data){
					if(data.data){
						createlist(data);
						return;
					}else if(!data.data){
						
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
			}
			
		},
		addClick: function(){
			var _this = this;
			$('#gouwuche-con').on('click','.add',function(e){
				e.stopPropagation();
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
		updatecart: function(id,v,price){
			var ol2 = $('#goodslist').find('ol'),
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
			$('#totalnum').html(num2);
			$('#totalprice').html(parseFloat(price2).toFixed(2));
		},
		redClick: function(){
			var _this = this;
			$('#gouwuche-con').on('click','.reduce',function(e){
				e.stopPropagation();
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
			$('#gouwuche-con').on('click','.num',function(e){
				e.stopPropagation();
			});
			$('#gouwuche-con').on('blur','.num',function(e){
				e.stopPropagation();
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
			var input = $('#gouwuche-con').find('.num'),
				num2 = 0;
			input.each(function(index){
				num2 += parseInt( input.eq(index).val() );
			});
			$('#totalnum').html(num2);
			$('#head-carnum').html(num2);
			$('#sideCarnum').html(num2);
			if(num2<=0){
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
			var xiaoji = $('#gouwuche-con').find('.xiaoji'),
					price2 = 0;
				xiaoji.each(function(index){
					price2 += parseInt( xiaoji.eq(index).html() );
				});
				$('#carintotalprice').html(parseFloat(price2).toFixed(2));
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
		updateCartdel: function(id){
			var ol2 = $('#goodslist').find('ol');
			ol2.each(function(index){
				if( ol2.eq(index).data('id') == id){
					ol2.eq(index).remove();
				}
			});
		},
		deelClick: function(){
			var _this = this;
			$('#gouwuche-con').on('click','.del',function(e){
				e.stopPropagation();
				var self = $(this),
					ol = self.parents('ol'),
					id = ol.data('id');
				var str = '<div class="del-Goods"><span>确定要删除宝贝吗？</span><a href="javascript:;" class="del-Goods-ok" id="del-Goods-ok">确定</a><a href="javascript:;" class="del-Goods-cancel" id="del-Goods-cancel">取消</a></div>',
					div = document.createElement('div');
				div.innerHTML = str;
				$(document.body).append(div);
				$('#del-Goods-cancel').click(function(e){
					e.stopPropagation();
					div.remove();
				});
				$('#del-Goods-ok').click(function(e){
					e.stopPropagation();
					div.remove();
					ol.remove();
					_this.dleGoods(id);
					_this.updateTotalnum();
					_this.updateTotalprice();
					_this.updateCartdel(id);
				});
				
			});
		},
		carinClick: function(){
			this.carin.click(function(e){
				e.stopPropagation();
				return ;
			});
		}
	
	}
	return side;
});
