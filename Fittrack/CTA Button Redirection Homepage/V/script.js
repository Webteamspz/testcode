convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('fittrack-test')) {
        convert.$('body').addClass('fittrack-test');
        loadTest();
    }
    function loadTest() {
    	convert.$('.MainnwMainWidgetproopeyrhOfferTw modal-opener .product-form__submit, .NWInnerdataExeutOfferTw.onlyForMobile modal-opener .product-form__submit').off('click').on('click',function(e){
    		e.preventDefault();
    		convert.$('.product-popup-modal.atc-upsell-modal').css('display','none');
    		window.open('/pages/fittrack-pdp-shopify', '_self');
    	});
    	convert.$('#link_shop-now a[href="/products/bmi-smart-scale-fittrack-dara"], nav .menu-drawer__menu a[href="/products/bmi-smart-scale-fittrack-dara"]:eq(1)').attr('href','/pages/fittrack-pdp-shopify');
    }
});