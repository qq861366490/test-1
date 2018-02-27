var listHeader = Vue.component('listHeader',{
	template: `<header class="list-header">
					<div class="search">
						<input type="text" placeholder="搜索不是搜身,别乱摸"/>
						<span class="iconfont icon-fangdajing"></span>
					</div>
				</header>`
});

var listContainer = Vue.component('listContainer',{
	data: function(){
		return {
			list: {}
		}
	},
	template:`<div class="list-container">
					<ul class="clearfix">
						<li v-for="item in list">
							<router-link to="/list/detail">
								<span class="icon">
									<img :src="item.icon">
								</span>
								<span class="text">{{item.names}}</span>
							</router-link>
						</li>
					</ul>
				</div>`,
	beforeMount: function(){
		var _this = this;
		$.getJSON('data/list.json',function(data){
			_this.list = data.data;
		});
	}
});
var list = {
	template: `<div class="list">
				<list-header></list-header>
				<list-container></list-container>
			</div>`,
	created: function(){
		document.title = '宝华网--商品分类'
	}
};