var jinpin =Vue.component('jinpin', {
	template:`<div class="jinpin">
				<jinpin-header></jinpin-header>
				<jinpin-container></jinpin-container>
			</div>`
		,
	created: function(){
		document.title = '宝华网--精品'
	}
});

var jinpinHeader = Vue.component('jinpinHeader',{
	template: `<header class="jinpin-header">
					精品
				</header>`
	
});
var jinpinContainer = Vue.component('jinpinContainer',{
	template: `<div class="jinpin-container">
					<jinpin-title></jinpin-title>
					<div class="nav">
						<ul class="clearfix">
							<li :class="{'active': index == num}" v-for="(item,index) in ListName"  @click="btn(index)">{{item}}</li>
						</ul>
					</div>
					<jinpin-content :goodsList="goodsList"></jinpin-content>
				</div>`,
	data: function(){
		return {
			ListName: [],
			goodsList: [],
			num: sessionStorage.getItem('num') || 0
		}
	},
	beforeMount: function(){
		var _this = this;
		$.getJSON('data/jingpin.json',function(data){
			_this.ListName = data.data.giftsValue;
		});
		$.getJSON('data/jingpin'+_this.num+'.json',function(data){
			_this.goodsList = data.data;
		})
	},
	mounted: function() {
		var page =  0;
	    var _this = this;
		
		$('.jinpin').dropload({
			//滚动区域
			scrollArea: window,
			//上拉加载
			loadDownFn: function(me) {
				
				// 拼接HTML
				var result = '';
				if(page>4){
					$('.dropload-load').text('没有更多数据了');
					setTimeout(function(){
						$('.dropload-down').remove();
					},2000);
					return;
				};
				$.getJSON('data/jingpin'+page+'.json', function(data) {
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
							$('.lists1').append(result);
							// 每次数据插入，必须重置
							me.resetload();
						}, 500);
				});
				page++;
			},
			//下拉刷新
			loadUpFn: function(me){
				
				var li = $('.lists1').find('li');
			
				$('.lists1').html(li.sort(function(){
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
			$.getJSON('data/jingpin'+index+'.json',function(data){
				_this.goodsList = data.data;
			});
			_this.num = index;
			sessionStorage.setItem('num',index);
			
		}
	}
});



var jinpinTitle = Vue.component('jinpinTitle',{
	template: `<div class="title">
						<p>精品分类    • 轻松快捷备款</p>
						<div class="line">
							<span class="line-left"></span>	
							<span class="text">NEW FASHION STARTS</span>	
							<span class="line-right"></span>
						</div>
							
				</div>`
});


var jinpinContent = Vue.component('jinpinContent',{
	props: ['goodsList'],
	template: `<div class="content">
	    		<ul class="clearfix lists1" >
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