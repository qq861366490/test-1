var cartHeader = Vue.component('cartHeader',{
	template: `<header class="cart-header">
					购物车
				</header>`
});

var cartContainer = Vue.component('cartContainer',{
	template: `<div class="cart-container">
					<div class="empty">
						<img src="img/cart-bg.png" >
					</div> 
				</div>`
});

var jiesuan = Vue.component('jiesuan',{
	template: `<div class="cart-jiesuan">
					<p>总价 : <span>0</span></p>
					<router-link to="/" class="jiesuan">去结算</router-link>
				</div>`
});

var cart = Vue.component('cart', {
	template: `<div class="cart">
				<cart-header></cart-header>
				<cart-container></cart-container>
				<jiesuan></jiesuan>
			</div>`,
	created: function(){
		document.title = '宝华网--购物车'
	},
	munted: function(){
		
	}
});