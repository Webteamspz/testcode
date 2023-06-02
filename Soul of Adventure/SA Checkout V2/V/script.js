var saCheckout = {
    init: function() {
        this.mainJS();
    },
    mainJS: function() {
    	var script = document.createElement('script');
		script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
		script.type = 'text/javascript';
		document.body.classList.add('sa-checkout-v2');
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
        var progressIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none"><path d="M24.237 8.64192C24.0558 10.104 23.765 11.524 23.369 12.906C22.7075 15.2066 21.7426 17.3976 20.4701 19.4707C19.6021 20.8864 18.6119 22.1968 17.4911 23.4019C16.2903 24.687 14.9082 25.7067 13.3661 26.4988C13.0206 26.6758 12.6582 26.8317 12.3085 27.0002C12.279 27.0128 12.2495 27.0213 12.2242 27.0213C12.1947 27.0213 12.1652 27.0171 12.1315 27.0002C9.86466 26.0311 7.91802 24.5943 6.29581 22.6771C3.86461 19.8035 2.12865 16.5465 1.07105 12.906C0.982571 12.6068 0.898301 12.3035 0.822458 11.9959C0.451668 10.5254 0.211498 9.02535 0.0850926 7.5127C0.000822272 6.42982 -0.0160318 5.34274 0.0134628 4.25144C0.0134628 4.23037 0.0176763 4.2093 0.0176763 4.18402C1.18061 4.07026 2.32668 3.91436 3.46854 3.68683C5.58794 3.26547 7.65257 2.6503 9.60764 1.67277C10.5178 1.21771 11.3857 0.682589 12.1737 0.0252811C12.1863 0.0126405 12.1989 0.00421352 12.2116 0L12.2242 0.00842703C12.4939 0.210676 12.7551 0.417138 13.029 0.606746C14.0318 1.3104 15.1105 1.84973 16.2355 2.30479C17.9083 2.97896 19.64 3.44244 21.4013 3.76267C22.3914 3.94385 23.3858 4.07868 24.3886 4.17138C24.3971 4.17138 24.4055 4.17981 24.4308 4.18823C24.4308 4.302 24.4308 4.42419 24.4308 4.54217C24.4645 5.91156 24.4013 7.27674 24.237 8.63771V8.64192Z" fill="#2B2A29"/></svg>';
        var arrowIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        var saCheckoutBanner = `<div class="saCheckoutBannerWrap"><div class="inner-wrap"><a href="/" class="main-logo"><img src="https://iili.io/HrZGytj.png" alt="Safishing"></a></div></div>`;
        document.querySelector('aside[role="complementary"]').insertAdjacentHTML('beforebegin', saCheckoutBanner);
        var saCheckoutHtml = `<div class="saCheckoutInfoBarWrap ${className}"><div class="saCheckoutInfoBarItems saCheckoutInfoBarItemsCart"><div class="saCheckoutInfoBarContent">${progressIcon} <p>Cart</p></div></div><div class="saCheckoutInfoBarItems saCheckoutInfoBarItemsInfo"><div class="saCheckoutInfoBarContent">${progressIcon} <p>Information</p></div></div>${arrowIcon} <div class="saCheckoutInfoBarItems saCheckoutInfoBarItemsShipping"><div class="saCheckoutInfoBarContent">${progressIcon} <p>Shipping</p></div></div>${arrowIcon} <div class="saCheckoutInfoBarItems saCheckoutInfoBarItemsPayment"><div class="saCheckoutInfoBarContent">${progressIcon} <p>Payment</p></div></div></div>`;
        document.querySelector('.main__header nav').insertAdjacentHTML('afterend', saCheckoutHtml);
        var contactHtml = `<ul class="breadcrumbNumber"><li>Got a Question?<a href="https://safishing.com/pages/customer-service"> Contact Us</a></li></ul>`;
    	document.querySelectorAll('.breadcrumb__item .breadcrumb__link').forEach(function(e){
    		e.closest('.breadcrumb__item').classList.add(e.textContent.trim().toLowerCase());
    	});
        document.querySelector('.saCheckoutInfoBarItemsInfo .saCheckoutInfoBarContent p').addEventListener('click', function() {
            document.querySelector('.breadcrumb__item.information .breadcrumb__link').click();
        });
        document.querySelector('.saCheckoutInfoBarItemsShipping .saCheckoutInfoBarContent p').addEventListener('click', function() {
            document.querySelector('.breadcrumb__item.shipping .breadcrumb__link').click();
        });
        document.querySelector('.saCheckoutInfoBarItemsPayment .saCheckoutInfoBarContent p').addEventListener('click', function() {
            document.querySelector('.breadcrumb__item.payment .breadcrumb__link').click();
        });
		var whyBuyHtml = `<div class="whyBuyWrap"><div class="wraper-3 wraper-x"><div class="list"><div class="list-item"><div class="img-block"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1680248161customer.png" alt="3M+ Happy Customers"></div><p>3M+ Happy <br/>Customers</p></div><div class="list-item"><div class="img-block"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1680248161return.png" alt="Easy Return and Exchanges"></div><p>Easy Return & <br/>Exchanges</p></div><div class="list-item"><div class="img-block"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1680248169shipping.png" alt="Fast Shipping within 1-3 days"></div><p>Fast Shipping <br/>with Tracking</p></div></div></div>`;
        document.querySelector('.saCheckoutBannerWrap .inner-wrap .main-logo').insertAdjacentHTML('afterend', whyBuyHtml);
		var customerReviewsHtml = `<div class="customerReviewsWrap "><div class="whyBuyTitle"><h3><span>Customer Reviews</span></h3></div><div class="customerReviewsItems"><div class="customerReviewsItem"><div class="review-wraper"><div class="customerReviewsItemImg"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1682439091-image_60-removebg-preview.png" ></div><div class="customerReviewsName"><span>JOHN W. <span class="verify">Verified Buyer</span></span><span>SKI MASKS <span class="rating_"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1682409753stars.png"></span></span></div></div><div class="customerReviewsItemcontent"><p>When your working in freezers ( -27 ) degrees these products are perfect at keeping the cheeks warm</p></div></div><div class="customerReviewsItem"><div class="review-wraper"><div class="customerReviewsItemImg"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1682409638ew.png" ></div><div class="customerReviewsName"><span>JOHN W. <span class="verify">Verified Buyer</span></span><span>Straw Hat Pack <span class="rating_"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1682409753stars.png"></span></span></div></div><div class="customerReviewsItemcontent"><p>"LOVE MY STRAW HAT! I WAS IMPRESSED BY THE QUALITY OF THE HAT, THE DESIGN UNDERNEATH LOOKS GREAT!" </p></div></div></div></div>`;
	   var customerReviewsHtmlmob = `<div class="customerReviewsWrap mobile"><div class="whyBuyTitle"><h3><span>Customer Reviews</span></h3></div><div class="customerReviewsItems"><div class="customerReviewsItem"><div class="review-wraper"><div class="customerReviewsItemImg"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1682439091-image_60-removebg-preview.png" ></div><div class="customerReviewsName"><span>JOHN W. <span class="verify">Verified Buyer</span></span><span>SKI MASKS <span class="rating_"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1682409753stars.png"></span></span></div></div><div class="customerReviewsItemcontent"><p>When your working in freezers ( -27 ) degrees these products are perfect at keeping the cheeks warm</p></div></div><div class="customerReviewsItem"><div class="review-wraper"><div class="customerReviewsItemImg"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1682409638ew.png" ></div><div class="customerReviewsName"><span>ETHAN W.<span class="verify">Verified Buyer</span></span><span>Straw Hat Pack<span class="rating_"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007255/1682409753stars.png"></span></span></div></div><div class="customerReviewsItemcontent"><p>"LOVE MY STRAW HAT! I WAS IMPRESSED BY THE QUALITY OF THE HAT, THE DESIGN UNDERNEATH LOOKS GREAT!" </p></div></div></div></div>`;
	    document.querySelector('.order-summary__sections').insertAdjacentHTML('beforeend', customerReviewsHtml);
   	    document.querySelector('.step__footer').insertAdjacentHTML('afterend', customerReviewsHtmlmob);
   	    document.querySelector('.customerReviewsWrap.mobile').insertAdjacentHTML('beforebegin', contactHtml);
        setTimeout(function() {
            waitForElement('div[data-step="contact_information"] .step__footer .step__footer__continue-btn span').then(function(elm) {
                elm.textContent = 'Continue To Shipping';
            });
            waitForElement('div[data-step="shipping_method"] .step__footer .step__footer__continue-btn span').then(function(elm) {
                elm.textContent = 'Continue to Payment';
            });
            waitForElement('div[data-step="payment_method"] .step__footer .step__footer__continue-btn span').then(function(elm) {
            	var checkText = setInterval(function() {
            		if(elm.textContent != ''){
                		elm.innerHTML = 'Pay and Place order';
            		}
            	},100);
            });
        }, 100);
        
        if(window.innerWidth < 999){
            waitForElement('.order-summary-toggle').then(function(elm) {
                elm.click();
            });
        } 

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
            saCheckout.init();
            waitForJQuery(sliderCreate);
        } catch (err) {
            console.log('TRY ERROR: ' + err);
        }
    } else {
        setTimeout(testLoad, 25);
    }
})();