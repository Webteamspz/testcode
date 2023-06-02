convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('posters-test-04')) {
        convert.$('body').addClass('posters-test-04');
        loadTest();
    }
    function loadTest() {
        var currentPagePath = window.location.pathname.indexOf("/products/");
    	var banner = '<div class="trustpiolt-banner"><div class="inner-wrap"><div class="img-wrap">Excellent <img src="https://iili.io/HrJoHaS.png" alt="5 Stars"></div><div class="text-wrap">42 Reviews on <div class="inner-img-wrap"><img src="https://iili.io/HrJo9F2.png" alt="TrustPilot">TrustPilot</div></div></div></div>';
    	if(currentPagePath > -1){
    		convert.$(banner).insertAfter('form[data-type="add-to-cart-form"] .shopify-payment-button');
    		convert.$('.trustpiolt-banner').addClass('product-banner');
    	}else{
    		convert.$(banner).insertBefore('sticky-header');
    	}
    }
});