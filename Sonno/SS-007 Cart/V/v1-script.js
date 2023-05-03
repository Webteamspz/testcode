convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('sonno-test')) {
        convert.$('body').addClass('sonno-test');
        loadTest();
    }
    function loadTest() {
    	var width = window.innerWidth;
		convert.$('<div class="custom-wrap"></div>').insertAfter('.cart_content_info.middle-section .product_btm_detail_div .assembly_buttons');
		convert.$('.custom-wrap').append(convert.$('.five.columns.alpha .product-quantity-box'));
		convert.$('.custom-wrap').append(convert.$('.product_btm_detail_div > .Productcartprice'));
		convert.$('button.variant_modal').insertBefore('.custom-wrap .product-quantity-box .quantity-wrapper-c');
    	var price = convert.$('.youSavedPrice').text().split('You saved ')[1];
    	convert.$('<div class="price-wrapper">You saved <span class="save-price">'+price+'</span></div>').insertAfter('.youSavedPrice');
    	convert.$('#mattfont .diffcolor').html('<br class="desk-only"> Save Upto £359.99');
    	if (width < 481) {
    		convert.$('.insinstall_ment_div:eq(0)').insertBefore(".custom_checkout.mobilebutton");
    	}else{
    		convert.$('.insinstall_ment_div:eq(0)').insertAfter(".cart_savings");
    	}
    }
});