convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('fittrack-test')) {
        convert.$('body').addClass('fittrack-test');
        loadTest();
    }
    function loadTest() {
    	convert.$('.MainnwMainWidgetproopeyrhOfferTw modal-opener .product-form__submit').off('click').on('click',function(e){
    		e.preventDefault();
    		window.open('/pages/fittrack-pdp-shopify', '_self');
    	});
    }
});