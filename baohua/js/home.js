var top = Vue.component('top', {
	template: `<header class="home-header">
				<div class="img-box">
					<img src="img/home-logo.jpg" />
				</div>
				<div class="search">
					<input type="text" placeholder="搜索不是搜身,别乱摸"/>
					<span class="iconfont icon-fangdajing"></span>
				</div>
				<a href="javascript:;" class="right">
					<span class="iconfont icon-xiaoxi"></span>
					<span class="text">消息</span>
				</a>
			</header>`

});

var banner = Vue.component('banner', {
	data: function() {
		return {
			banners: {}
		}
	},
	template: `<div class="banner">
				<div class="swiper-container">
	                <div class="swiper-wrapper">
	                    <div class="swiper-slide" v-for="item in banners" >
	                        <a href="javascript:;">
	                            <img :src="item.imgUrl" alt="" />
	                        </a>
	                    </div>
	                </div>
	                <div class="swiper-pagination"></div>
	            </div>
			</div>`,
	beforeMount: function() {
		var _this = this;
		$.getJSON('data/home1.json', function(data) {
			_this.banners = data.data.banImages;
		});

	},
	updated: function() {
		var swiper = new Swiper(".swiper-container", {
			autoplay: 3000,
			loop: true,
			pagination: ".swiper-pagination",
			autoplayDisableOnInteraction: false
		});
	}
});

var nav0 = Vue.component('nav0', {
	data: function() {
		return {
			listName: [
				'连衣裙', '裙套装', 'T恤', '套装', '短裙', '打底衫', '外套', '针织衫'
			]
		}
	},
	template: `<div class="nav">
	    		<ul>
	    			<li v-for="(item,index) in listName">
	    				<router-link to="/list/detail" >
	    					<span class="icon"><img :src="'img/nav'+(index+1)+'.png'" alt="" /></span>
	    					<span class="text">{{item}}</span>
	    				</router-link>
	    			</li>
	    		</ul>
	    	</div>`
});

var list0 = Vue.component('list0', {
	data: function() {
		return {
			imgs: [{
					imgUrl: ''
				},
				{
					imgUrl: ''
				},
				{
					imgUrl: ''
				}
			]
		}
	},
	template: `<div class="list0">
	    		<div class="baokuan">
	    			<router-link to="/jinpin2?baokuan">
	    				<img :src="imgs[0].imgUrl" alt="" />
	    			</router-link>
	    		</div>
	    		<div class="right">
	    			<div class="xinkuan">
	    				<router-link to="/jinpin2?xinkuan">
		    				<img :src="imgs[1].imgUrl" alt="" />
		    			</router-link>
		    		</div>
		    		<div class="jingxuan">
		    			<router-link to="/jinpin2?jingxuan">
		    				<img :src="imgs[2].imgUrl" alt="" />
		    			</router-link>
		    		</div>
	    		</div>
	    	</div>`,
	beforeMount: function() {
		var _this = this;
		$.getJSON('data/home1.json', function(data) {
			_this.imgs = data.data.imageUrl;
		});
	}
});

var hot = Vue.component('hot', {
	data: function() {
		return {
			hotList: [

			]
		}
	},
	template: `<div class="home-hot">
    	<div class="title">
    		<span class="re">热门市场</span>•
    		<span class="iconfont icon-aixinon"></span>
    		<span class="ht">Hot market</span>
    	</div>
    	<div class="content">
    		<ul class="clearfix">
    			<li v-for="item in hotList">
    				<router-link to="/list/detail" :style="'backgroundColor:'+item.color">{{item.name}}</router-link>
    			</li>
    			<div class="more">
    				<router-link to="/list/detail">更多...</router-link>
    			</div>
    		</ul>
    	</div>
    </div>`,
	beforeMount: function() {
		var _this = this;
		$.getJSON('data/hotlist.json', function(data) {
			_this.hotList = data;
		});
	}
});

var like = Vue.component('like', {
	template: `<div class="home-like">
			    	<div class="title">
			    		<span class="re">猜你喜欢</span>•
			    		<span class="iconfont icon-aixinon"></span>
			    		<span class="ht">Guess you like</span>
			    	</div>
			    	<div class="content">
			    		<ul class="clearfix lists" >
			    		</ul>
			    	</div>
			    </div>`
});

var home = {
	template: `<div class="home" >
				<top></top>
				<banner></banner>
				<nav0></nav0>
	    		<list0></list0>
	    		<hot></hot>
	    		<like></like>
				</div>`,
	created: function() {
		document.title = '宝华网--首页';
	},
	mounted: function() {
		var page = 0;
	    var _this = this;
		
		$('.home').dropload({
			//滚动区域
			scrollArea: window,
			//上拉加载
			loadDownFn: function(me) {
				page++;
				// 拼接HTML
				var result = '';
				if(page>4){
					$('.dropload-load').text('没有更多数据了');
					setTimeout(function(){
						$('.dropload-down').remove();
					},2000);
					return;
				};
				$.getJSON('data/home'+page+'.json', function(data) {
					var data = data.prodectsInfo;
					var arrLen = data.length;
						if(arrLen > 0) {
							for(var i = 0; i < arrLen; i++) {
								
								result += `<li>
						    				<a href="#/list/detail" class="img-box">
						    					<img src="${data[i].productImage}" />
						    				</a>
						    				<p>${data[i].productName}</p>
						    				<span>¥${data[i].productBatch}</span>
						    				<a href="#/list/detail" class="btn">
						    					查看
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
							$('.lists').append(result);
							// 每次数据插入，必须重置
							me.resetload();
						}, 500);
				});
				
			},
			//下拉刷新
			loadUpFn: function(me){
				var _this = this;
				$.getJSON('data/home1.json', function(data) {
					me.resetload();
				});
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
	}
};