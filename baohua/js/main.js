var main = { 
	template: `	<div class="main">
					<router-view></router-view>
					<foot></foot>
		        </div>`
		
};
var foot = Vue.component('foot',{
	template: `<footer>
					<ul>
						<li v-bind:class="{'active':index=='#/home'}" v-on:click="active">
							<div></div>
							<router-link to="/home">
								<span class="iconfont icon-home"></span>
								<span class="text">首页</span>
							</router-link>
						</li>
						<li v-bind:class="{'active':index=='#/list'}" v-on:click="active">
							<div></div>
							<router-link to="/list">
					        	<span class="iconfont icon-fenlei"></span>
								<span class="text">分类</span>
					        </router-link>
						</li>
				        <li v-bind:class="{'active':index=='#/jinpin'}" v-on:click="active">
				        	<div></div>
							<router-link to="/jinpin">
					        	<span class="iconfont icon-daizi1"></span>
								<span class="text">精品</span>
					        </router-link>
						</li>
				        <li v-bind:class="{'active':index=='#/cart'}" v-on:click="active">
				        	<div></div>
							<router-link to="/cart">
					        	<span class="iconfont icon-icongouwuche"></span>
								<span class="text">购物车</span>
					        </router-link>
						</li>
				        <li v-bind:class="{'active':index=='#/wode'}" v-on:click="active">
				        	<div></div>
							<router-link to="/wode">
					        	<span class="iconfont icon-wode"></span>
								<span class="text">我的</span>
					        </router-link>
						</li>
					</ul>
				</footer>`,
	data: function(){
		return {
			index: window.location.hash
		}
	},
	methods: {
		active: function(){
			this.index = window.location.hash;
		}
	}
});
