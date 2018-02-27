var login = { 
	template: `<div>登录
				<router-link to="/register">去注册</router-link>
				<router-link to="/login">去登录</router-link>
				</div>`,
	created: function(){
		document.title = '宝华网--登录'
	}
};