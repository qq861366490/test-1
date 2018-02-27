var wode = { 
	template: `<div class="wode">
					<wode-header></wode-header>
					<wode-container></wode-container>
				</div>`,
	created: function(){
		document.title = '宝华网--我的';
		
	}
};

var wodeHeader = Vue.component('wodeHeader',{
	template: `<header class="wode-header">
					<router-link to="/" class="iconfont icon-shezhi"></router-link>
					我的宝华
					<router-link to="/" class="iconfont icon-xiaoxi"></router-link>
				</header>`
});

var wodeContainer = Vue.component('wodeContainer',{
	template: `<div class="wode-container">
					<wode-user></wode-user>
					<wode-nav></wode-nav>
					<wode-bag></wode-bag>
					<wode-code></wode-code>
				</div>`
});

var wodeUser = Vue.component('wodeUser',{
	template: `<div class="wode-user">1</div>`
});
var wodeNav = Vue.component('wodeNav',{
	template: `<div class="wode-nav">2</div>`
});
var wodeBag = Vue.component('wodeBag',{
	template: `<div class="wode-bag">3</div>`
});
var wodeCode = Vue.component('wodeCode',{
	template: `<div class="wode-code">4</div>`
});