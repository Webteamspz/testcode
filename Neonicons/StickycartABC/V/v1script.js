var convertInterval = setInterval(function() {
    if (typeof convert != 'undefined') {
        clearInterval(convertInterval);
		convert.$(document).ready(function () {
		    if (!convert.$('body').hasClass('neon-test')) {
		        convert.$('body').addClass('neon-test');
		        var isMob = window.matchMedia("(max-width: 768px)").matches;
			    if (isMob) {
			        loadTest();
			    }
		    }
		    function loadTest() {
		    	convert.$('<div class="dummy-wrap"></div>').insertBefore('.payment-buttons');
		    	var fixmeTop = convert.$('.payment-buttons').offset().top;
				convert.$(window).scroll(function() {
				    var currentScroll = convert.$(window).scrollTop();
				    if (currentScroll >= fixmeTop) {
				        convert.$('body').addClass('sticky');
				    } else {
				        convert.$('body').removeClass('sticky');
				    }
				});
		    }
		});
    }
});