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
		    	var newButton = '<a href="https://www.neonicons.com/products/custom-neon" class="custom-design">Create own Design <img src="https://iili.io/HU7Twpp.png" alt="Create own Design"></a>';
		    	convert.$(newButton).insertBefore('.payment-buttons > button');
		    	convert.$('<div class="dummy-wrap"></div>').insertBefore('.payment-buttons');
		    	convert.$('.payment-buttons > button').append('<img src="https://iili.io/HU7TOTN.png" alt="Add to cart">');
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