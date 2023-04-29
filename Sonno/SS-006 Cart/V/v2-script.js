convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('sonno-test')) {
        convert.$('body').addClass('sonno-test');
        loadTest();
    }
    function loadTest() {
    	var width = window.innerWidth;
    	if (width < 481) {
    		convert.$('.insinstall_ment_div:eq(0)').insertBefore(".custom_checkout.mobilebutton");
    	}else{
    		convert.$('.insinstall_ment_div:eq(0)').insertAfter(".cart_savings");
    	}
    }
});