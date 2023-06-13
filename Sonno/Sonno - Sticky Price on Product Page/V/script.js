convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('sonno-sticky-price')) {
        convert.$('body').addClass('sonno-sticky-price');
        var isMob = window.matchMedia("(max-width: 769px)").matches;
	    if (isMob) {
	        var checkEle = setInterval(function() {
	        	if(convert.$('.sonno-test .price-eligibility-wrap').length > 0){
	        		clearInterval(checkEle);
	        		loadTest();
	        	}
	        }, 100);
	    }
    }
    function loadTest() {
    	var width = window.innerWidth;
    	var price = convert.$('.total-amount-holder:eq(0)').text();
        var fixmeTop = convert.$('.product-price-wrap').offset().top;
        var list = '<ul class="check-list"><li>60 night risk free trial</li><li>Free delivery in 5-10 working days</li><li>Price beat guarantee</li></ul>';
    	if (width < 769) {
        	convert.$('.price-eligibility-wrap').append(convert.$('.dividedby-wraper'));
        	convert.$('<div class="new-price-wrap"><span class="text">Total Price:</span><span class="tot-price">'+price+'</span></div>').insertAfter('.dividedby-wraper');
        	convert.$('<div class="top-banner"><div class="inner-wrap"><div class="banner">Create Your Custom bed</div></div></div>').insertBefore('.top-section-grey .main');
        	convert.$('.turstpilotParent').insertBefore('.banner');
        	var newTextreview = convert.$('.turspilotDocntent a > b:first-child:eq(0)').text();
        	convert.$('.turspilotDocntent a > b:first-child').html(newTextreview+'/5');
        	convert.$('.top-section-grey .main .product > .sixteen').append(list);
        }
		convert.$(window).scroll(function() {
		    var currentScroll = convert.$(window).scrollTop();
		    if (currentScroll >= fixmeTop) {
		        convert.$('body').addClass('sticky-price');
		    } else {
		        convert.$('body').removeClass('sticky-price');
		    }
		});
		function updatePrice(){
			var price = convert.$('.total-amount-holder:eq(0)').text();
			convert.$('.new-price-wrap .tot-price').text(price);
		}
		var running = false;
        var target = document.querySelector('.total-amount-holder');
        const config = {
            childList: true, characterData: true, subtree: true, attributes: true,
        };
        const callback = function () {
            if (running == true) return;
            updatePrice();
            running = true;
            setTimeout(function () {
                running = false;
            },100);
        };
        function Mutx(target, callback, config) {
            const observer = new MutationObserver(callback);
            observer.observe(target, config);
        }
        Mutx(target, callback, config);
    }
});