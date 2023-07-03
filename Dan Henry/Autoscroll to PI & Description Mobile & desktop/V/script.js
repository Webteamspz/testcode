jQuery(document).ready(function() {
    if (!jQuery('body').hasClass('danhenrywatches-test')) {
        jQuery('body').addClass('danhenrywatches-test');
        var checkSec = setInterval(function() {
        	if(jQuery("#productDetails").length > 0){
        		clearInterval(checkSec);
        		loadTest();
        	}
        }, 100);
    }
    function loadTest() {
        jQuery('html, body').animate({
            scrollTop: jQuery("#productDetails").offset().top - 100 
        }, 'fast');
    }
});