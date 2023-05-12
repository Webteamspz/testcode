jQuery(document).ready(function () {
    if (!jQuery('body').hasClass('danhenrywatches-test')) {
        jQuery('body').addClass('danhenrywatches-test');
        loadTest();
    }
    function loadTest() {
    	var year = jQuery('.product-single h1').text();
    	var text = '';
    	if(year == '1900'||year == '1945'||year == '1975'){
    		text = ''
    	}else{
    		text = '('+year+' Pieces)';
    	}
    	jQuery('<div class="product__feature"><div class="feature"><a href="javascript:void(0)" class="link-cta no-hover"><img src="https://cdn.staticaly.com/gh/raahul09/picx-images-hosting@master/20230414/Icon-1.1vy192g1cp.webp" alt="Free Shipping Worldwide">Free Shipping Worldwide</a></div><div class="feature"><a href="javascript:void(0)" class="link-cta no-hover"><img src="https://cdn.staticaly.com/gh/raahul09/picx-images-hosting@master/20230414/Icon-2.4f4r10m72480.webp" alt="12 Month Global Warranty">12 Month Global Warranty</a></div><div class="feature"><a href="javascript:void(0)" class="link-cta no-hover"><img src="https://cdn.staticaly.com/gh/raahul09/picx-images-hosting@master/20230414/Icon-3.rwuav976j1c.webp" alt="Limited Edition">Limited Edition</br>'+text+'</a></div><div class="feature"><a href="javascript:void(0)" class="link-cta no-hover"><img src="https://cdn.staticaly.com/gh/raahul09/picx-images-hosting@master/20230414/Icon-4.7inbpeusm700.webp" alt="Easy 7-Day Return">Easy 7-Day Return</a></div></div>').insertAfter('.product-single__buttons');
       jQuery('a.link-cta[href="#warranty"]').on('click', function() {
	        event.preventDefault();
	        var hash = this.hash;
	        jQuery('html, body').animate({
	            scrollTop: jQuery("#warranty").offset().top - 100 
	        }, 'fast');
		});
    }
});