var jinpin2 =Vue.component('jinpin2', {
	template:`<div class="jinpin2">
				<jinpin2-header></jinpin2-header>
				<jinpin2-container></jinpin2-container>
			</div>`
		,
	created: function(){
		document.title = '宝华网--精品'
	}
});

var jinpin2Header = Vue.component('jinpin2Header',{
	data: function(){
		return {
			title: '精品'
		}
	},
	template: `<header class="jinpin2-header">
					<p class="header-title">{{title}}</p>
					<router-link to="/home" class="iconfont icon-fanhui"></router-link>
				</header>`
	
});
var jinpin2Container = Vue.component('jinpin2Container',{
	template: `<div class="jinpin2-container">
					<jinpin-title></jinpin-title>
					<div class="nav">
						<ul class="clearfix">
							<li :class="{'active': index == num2}" v-for="(item,index) in ListName"  @click="btn(index)">{{item}}</li>
						</ul>
					</div>
					<jinpin2-content :goodsList="goodsList"></jinpin2-content>
				</div>`,
	data: function(){
		return {
			ListName: [],
			goodsList: [],
			num2: sessionStorage.getItem('num2') || 0
		}
	},
	beforeMount: function(){
		var hash = window.location.hash;
		switch(hash){
			case '#/jinpin2?baokuan':
				this.num2 = 0;
				break;
			case '#/jinpin2?xinkuan':
				this.num2 = 1;
				break;
			case '#/jinpin2?jingxuan':
				this.num2 = 2;
				break;
			default: 
				this.num2 = 0;
		};
		var _this = this;
		_this.ListName = ['爆款','新款','精选'];
		$.getJSON('data/jingpin'+_this.num2+'.json',function(data){
			_this.goodsList = data.data;
		});
	},
	mounted: function() {
		var page =  0;
	    var _this = this;
		$('.jinpin2').dropload({
			//滚动区域
			scrollArea: window,
			//上拉加载
			loadDownFn: function(me) {
				
				// 拼接HTML
				var result = '';
				if(page>2){
					$('.dropload-load').text('没有更多数据了');
					setTimeout(function(){
						$('.dropload-down').remove();
					},2000);
					return;
				};
				$.getJSON('data/jingpin2'+page+'.json', function(data) {
					var data = data.data;
					var arrLen = data.length;
						if(arrLen > 0) {
							for(var i = 0; i < arrLen; i++) {
								
								result += `<li>
						    				<a href="#/list/detail" class="img-box">
						    					<img src="${data[i].productImage}" />
						    				</a>
						    				<p>${data[i].productName}</p>
						    				<span>¥${data[i].productBatch}</span>
						    				<a href="#/cart" class="btn iconfont icon-gouwuche1">
						    				</a>
						    				<a href="javascript:;" class="aixin iconfont icon-aixinon">
						    				</a>
						    			</li>`;
							}
							// 如果没有数据
						} else {
							// 锁定
							me.lock();
							// 无数据
							me.noData();
							
						};
						// 为了测试，延迟1秒加载
						setTimeout(function() {
							// 插入数据到页面，放到最后面
							$('.lists2').append(result);
							// 每次数据插入，必须重置
							me.resetload();
						}, 500);
				});
				page++;
			},
			//下拉刷新
			loadUpFn: function(me){
				
				var li = $('.lists2').find('li');
			
				$('.lists2').html(li.sort(function(){
					return Math.random() - 0.5 
				}));
				me.resetload();
			},
			//下拉刷新的dom元素设置
			domUp: 	{
				domClass : 'dropload-up',
				domRefresh : '<div class="dropload-refresh">↓&nbsp;&nbsp;&nbsp;&nbsp;    下拉可以刷新</div>',
				domUpdate  : '<div class="dropload-update">↑&nbsp;&nbsp;&nbsp;&nbsp;    松开立即刷新</div>',
				domLoad : '<div class="dropload-load"><img src="http://ons.me/wp-content/uploads/2013/05/loading.gif"/>&nbsp;&nbsp;&nbsp;&nbsp;    正在刷新数据中...</div>'
			},
			//上拉加载的dom元素设置
			domDown: {
				domClass : 'dropload-down',
				domRefresh : '<div class="dropload-refresh">↑&nbsp;&nbsp;&nbsp;&nbsp;    上拉加载更多</div>',
				domLoad : '<div class="dropload-load"><img src="http://ons.me/wp-content/uploads/2013/05/loading.gif"/>&nbsp;&nbsp;&nbsp;&nbsp;    正在加载更多数据...</div>',
				domNoData : '<div class="dropload-noData">没有更多数据了</div>'
			},
			//拉动距离
			distance: 100
		});
	},
	methods: {
		btn: function(index){
			var _this = this;
			$.getJSON('data/jingpin2'+index+'.json',function(data){
				_this.goodsList = data.data;
			});
			sessionStorage.setItem('num2',index);
			_this.num2 = index;
			switch(index){
				case 0:
					window.location.hash = '#/jinpin2?baokuan';
					$('.header-title').text('爆款');
					break;
				case 1:
					window.location.hash = '#/jinpin2?xinkuan';
					$('.header-title').text('新款');
					break;
				case 2:
					window.location.hash = '#/jinpin2?jingxuan';
					$('.header-title').text('精选');
					break;
			};
		}
	}
});



var jinpin2Title = Vue.component('jinpin2Title',{
	template: `<div class="title">
						<p>精品分类    • 轻松快捷备款</p>
						<div class="line">
							<span class="line-left"></span>	
							<span class="text">NEW FASHION STARTS</span>	
							<span class="line-right"></span>
						</div>
							
				</div>`
});


var jinpin2Content = Vue.component('jinpin2Content',{
	props: ['goodsList'],
	template: `<div class="content">
	    		<ul class="clearfix lists2" >
	    			<li v-for="item in goodsList">
	    				<router-link to="/list/detail" class="img-box">
	    					<img :src="item.productImage" />
	    				</router-link>
	    				<p>{{item.productName}}</p>
	    				<span>¥{{item.productBatch}}</span>
	    				<router-link to="/cart" class="btn iconfont icon-gouwuche1">
	    				</router-link>
	    				<a href="javascript:;" class="aixin iconfont icon-aixinon">
	    				</a>
	    			</li>
	    		</ul>
	    	</div>`
});