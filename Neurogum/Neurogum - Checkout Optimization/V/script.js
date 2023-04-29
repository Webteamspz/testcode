var neCheckout = {
    init: function() {
        this.mainJS();
    },
    mainJS: function() {
    	var script = document.createElement('script');
		script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
		script.type = 'text/javascript';
		document.getElementsByTagName('body')[0].appendChild(script); 
        var currentURL = document.title;
        var className = 'contactInfoCom';
        if (currentURL.indexOf("Shipping") != -1) {
            className = 'shippingMethodCom';
        } else if (currentURL.indexOf("Payment") != -1) {
            className = 'paymentMethodCom';
        } else {
            className = 'contactInfoCom';
        }
        // <div class="neCheckoutBannerWrap"><img src="https://iili.io/H8M8RR9.png" alt="Banner Img"><div class="hero-review"><img src="https://iili.io/H8MMfwB.png" alt="5 Stars"><p class="title">Join 200,000+ Happy Customers</p></div></div>
        var neCheckoutBanner = `<div class="neCheckoutBannerWrap"><div class="inner-slider"></div><div class="hero-review"><img src="https://iili.io/H8MMfwB.png" alt="5 Stars"><p class="title">Join 200,000+ Happy Customers</p></div></div>`;
        document.querySelector('aside[role="complementary"]').insertAdjacentHTML('beforebegin', neCheckoutBanner);
        var firstIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="19" viewBox="0 0 108 19" fill="none"><path d="M0.5 0.5H98.6602L107.307 9.5L98.6602 18.5H0.5V9.5V0.5Z" fill="#F3F3F3" stroke="#DDDDDD"/></svg>';
        var secIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="19" viewBox="0 0 108 19" fill="none"><path d="M98.6602 18.5H1.13998L9.11432 9.83866L9.42612 9.5L9.11432 9.16134L1.13998 0.5H98.6602L107.307 9.5L98.6602 18.5Z" fill="#F3F3F3" stroke="#DDDDDD"/></svg>';
        var neCheckoutHtml = `<div class="neCheckoutInfoBarWrap ${className}"><div class="neCheckoutInfoBarItems neCheckoutInfoBarItemsCart"><div class="neCheckoutInfoBarContent">${firstIcon}<p>Cart</p></div></div><div class="neCheckoutInfoBarItems neCheckoutInfoBarItemsInfo"><div class="neCheckoutInfoBarContent">${firstIcon}<p>Information</p></div></div><div class="neCheckoutInfoBarItems neCheckoutInfoBarItemsShipping"><div class="neCheckoutInfoBarContent">${secIcon}<p>Shipping</p></div></div><div class="neCheckoutInfoBarItems neCheckoutInfoBarItemsPayment"><div class="neCheckoutInfoBarContent">${secIcon}<p>Payment</p></div></div></div>`;
        document.querySelector('.main__header nav').insertAdjacentHTML('afterend', neCheckoutHtml);
        var contactHtml = `<ul class="breadcrumbNumber"><li>Got a Question?<a href="https://safishing.com/pages/customer-service"> Contact Us</a></li></ul>`;
        document.querySelector('.step__footer').insertAdjacentHTML('afterend', contactHtml);
        document.querySelectorAll('.breadcrumb__item .breadcrumb__link').forEach(function(e){
    		e.closest('.breadcrumb__item').classList.add(e.textContent.trim().toLowerCase());
    	});
        document.querySelector('.neCheckoutInfoBarItemsInfo .neCheckoutInfoBarContent p').addEventListener('click', function() {
            document.querySelector('.breadcrumb__item.information .breadcrumb__link').click();
        });
        document.querySelector('.neCheckoutInfoBarItemsShipping .neCheckoutInfoBarContent p').addEventListener('click', function() {
            document.querySelector('.breadcrumb__item.shipping .breadcrumb__link').click();
        });
        document.querySelector('.neCheckoutInfoBarItemsPayment .neCheckoutInfoBarContent p').addEventListener('click', function() {
            document.querySelector('.breadcrumb__item.payment .breadcrumb__link').click();
        });
        var whyBuyHtml = `<div class="whyBuyWrap"><div class="whyBuyTitle"><h3><span>Why Buy From Us?</span></h3></div><div class="wraper-3 wraper-x"><div class="list"><div class="list-item"><div class="img-block"><img src="https://iili.io/H8MGTIS.png" alt="Safe Ingredients"></div><p>Safe </br>Ingredients</p></div><div class="list-item"><div class="img-block"><img src="https://iili.io/H8MGxkl.png" alt="Fast & Free Shipping"></div><p>Fast & Free </br>Shipping</p></div><div class="list-item"><div class="img-block"><img src="https://iili.io/H8MGXCF.png" alt="30 days Satisfaction Guarantee"></div><p>30 days Satisfaction </br>Guarantee</p></div></div></div>`;
        document.querySelector('.order-summary__sections').insertAdjacentHTML('beforeend', whyBuyHtml); 
        document.querySelector('nav[aria-label="Breadcrumb"]').insertAdjacentHTML('afterend', whyBuyHtml); 
		var customerReviewsHtml = `<div class="customerReviewsWrap "><div class="whyBuyTitle"><h3><span>Customer Reviews</span></h3></div><div class="customerReviewsItems"><div class="customerReviewsItem"><div class="customerReviewsItemImg"><img src="https://iili.io/H8MGUQt.png"></div><div class="customerReviewsItemcontent"><p>"Three simple words describe how I feel when I take @neurogum 🍬.... <b>Energy, Clarity, Focus..</b>"</p><div class="customerReviewsName">- Christopher McDonald</div></div></div><div class="customerReviewsItem"><div class="customerReviewsItemImg"><img src="https://iili.io/H8MGrCX.png"></div><div class="customerReviewsItemcontent"><p>Incase your confused @neurogum changes there name to Neuro. Gorgeous branding and <b>fantastic product. The eco friendly</b> and that\'s always a huge plus in my book. </p><div class="customerReviewsName">-Matthew Wilson</div></div></div></div></div>`;
	   var customerReviewsHtmlmob = `<div class="customerReviewsWrap mobile"><div class="whyBuyTitle"><h3><span>Customer Reviews</span></h3></div><div class="customerReviewsItems"><div class="customerReviewsItem"><div class="customerReviewsItemImg"><img src="https://iili.io/H8MGUQt.png"></div><div class="customerReviewsItemcontent"><p>"Three simple words describe how I feel when I take @neurogum 🍬.... Energy, Clarity, Focus.."</p><div class="customerReviewsName">- Christopher McDonald</div></div></div><div class="customerReviewsItem"><div class="customerReviewsItemImg"><img src="https://iili.io/H8MGrCX.png"></div><div class="customerReviewsItemcontent"><p>Incase your confused @neurogum changes there name to Neuro. Gorgeous branding and fantastic product. The eco friendly and that\'s always a huge plus in my book. </p><div class="customerReviewsName">-Matthew Wilson</div></div></div></div></div>`;
	    document.querySelector('.order-summary__sections').insertAdjacentHTML('beforeend', customerReviewsHtml);
   	    document.querySelector('.step__footer').insertAdjacentHTML('afterend', customerReviewsHtmlmob);

        setTimeout(function() {
            waitForElement('div[data-step="contact_information"] .step__footer .step__footer__continue-btn span').then(function(elm) {
                elm.textContent = 'Continue To Shipping';
            });
            waitForElement('div[data-step="shipping_method"] .step__footer .step__footer__continue-btn span').then(function(elm) {
                elm.textContent = 'Continue to Payment';
            });
            // waitForElement('div[data-step="payment_method"] .step__footer .step__footer__continue-btn span').then(function(elm) {
            // 	elm.innerHTML = 'Pay and Place order';
            // });
            waitForElement('div[data-step="payment_method"] .step__footer .step__footer__continue-btn span').then(function(elm) {
            	var checkText = setInterval(function() {
            		if(elm.textContent != ''){
                		elm.innerHTML = 'Pay Now';
            		}
            	},100);
            });
    	}, 100);

        function waitForElement(selector) {
            return new Promise(function(resolve) {
                if (document.querySelector(selector)) {
                    return resolve(document.querySelector(selector));
                } else {
                    window.DOMContentLoaded = function() {
                        return reject(document.querySelector(selector), "Target element not found.");
                    };
                }
                const observer = new MutationObserver(function(mutations) {
                    if (document.querySelector(selector)) {
                        resolve(document.querySelector(selector));
                        observer.disconnect();
                    }
                });
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            });
        }
    }
};

(function testLoad() {
	function waitForJQuery(callback) {
        try {
            if (typeof jQuery === 'undefined') {
                setTimeout(function () {
                    waitForJQuery(callback);
                }, 100);
            } else {
                callback();
            }
        } catch (e) {
            setTimeout(function () {
                waitForJQuery(callback);
            }, 100);
        }
    }
	function sliderCreate(){
		jQuery('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
		jQuery('<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>').appendTo('body');
		jQuery('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>').appendTo('head');
		var setSlickInterVal = setInterval(function(){
	        if(jQuery.fn.slick){
	           clearInterval(setSlickInterVal);
		       jQuery('.customerReviewsWrap.mobile .customerReviewsItems').slick({
				  responsive: [
				    {
				      breakpoint: 3000,
					  settings: "unslick"
				    },{
				      breakpoint: 999,
				      settings: {
						  dots: true,
						  arrows:false,
						  speed: 300,
						  slidesToShow: 1,
						  slidesToScroll: 1,
				      }
				    }
				  ]
		       });
	        }
		},500);
	}
    if (document.querySelector('.main__header nav') && document.querySelector('.order-summary__sections')) {
        try {
            neCheckout.init();
            waitForJQuery(sliderCreate);
        } catch (err) {
            console.log('TRY ERROR: ' + err);
        }
    } else {
        setTimeout(testLoad, 25);
    }
})();