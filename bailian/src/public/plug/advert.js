define(['jquery'],function(){
	$(function(){
		var advert = {
			advert: $('.advert'),
			off: null,
			init: function(){
				this.createImg();
				this.showAdvert();
				this.hideAdvert();
			},
			createImg: function(){
				var str = `
					<div class="advert-img">
						<a href="#">
							<img src="imgs/head/1706444265.jpg"/>
						</a>
						<i></i>
					</div>
				`;
				this.advert.html(str);
				this.off = this.advert.find('i');
			},
			showAdvert: function(){
				this.advert.show();
			},
			hideAdvert: function(){
				var _this = this;
				this.off.click(function(){
					_this.advert.hide();
				})
			}
			
		}
		advert.init();
	})
})
