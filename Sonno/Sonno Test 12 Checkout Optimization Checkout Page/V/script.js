var sonnoCheckout = {
    init: function() {
        this.mainJS();
    },
    mainJS: function() {
    	var script = document.createElement('script');
		script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
		script.type = 'text/javascript';
		document.body.classList.add('sonno-checkout-v2');
		document.getElementsByTagName('body')[0].appendChild(script); 
        var currentURL = document.title;
        var className = 'contactInfoCom';
        if (currentURL.indexOf("Delivery") != -1) {
            className = 'shippingMethodCom';
        } else if (currentURL.indexOf("Payment") != -1) {
            className = 'paymentMethodCom';
        } else {
            className = 'contactInfoCom';
        }
        var sliderReviews = [{
		    title:'Dana Sousa Machado',
		    content:'The bed is amazing!!! I very happy with our purchase!! The drivers, Aky and Naj were fantastic!!! They assembled everything very quickly.<span class="dots">...</span> <span class="more"> I do recommend this company!!! </span><span class="read-more">Read more</span>',
		    date:'21 June 2023'
		},
		{
		    title:'Rosemarie Richards',
		    content:'Thank you very much Aky and Nag for delivering my lovely Sonno bed. Excellent communication from Sonno before delivery and assembly and<span class="dots">...</span> <span class="more"> removal of my old bed carefully completed by Aky and Nag. Would highly recommend. </span><span class="read-more">Read more</span>',
		    date:'21 June 2023'
		},
		{
		    title:'Oumie Cham',
		    content:'Got my delivery today and assembled by Maruf and Kabir, they were very nice and happy. The process took less than 1hr, quick<span class="dots">...</span> <span class="more"> and neat. They made sure the room was clean and they took the old bed and mattress away. I am very happy and pleased with the bed. Well done Maruf and Kabir 👏 </span><span class="read-more">Read more</span>',
		    date:'21 June 2023'
		},
		{
		    title:'Miah Francis',
		    content:'Really nice people did a great job',
		    date:'21 June 2023'
		},
		{
		    title:'Christine Elena Evanson',
		    content:'Baz and Abbas delivered the new bed this morning, set it all up and took the old one away. They were just the loveliest guys, very chatty<span class="dots">...</span> <span class="more"> and pleasant, but also professional. They left the room looking lovely and took all packaging with them. The bed looks good quality and solid. It was delivered very quickly from the date I ordered it. I\'m very happy to have found Sonnos\'s website. </span><span class="read-more">Read more</span>',
		    date:'21 June 2023'
		}];
        var arrowIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none"><g clip-path="url(#clip0_696_240)"><g clip-path="url(#clip1_696_240)"><path d="M2.5 1.98984L3.5 0.989838L7.5 4.98984L8.5 5.98984L7.5 6.98984L3.5 10.9898L2.5 9.98984L6.5 5.98984" fill="#2B2B2B"/></g></g><defs><clipPath id="clip0_696_240"><rect width="10" height="10" fill="white" transform="translate(0.5 0.989838)"/></clipPath><clipPath id="clip1_696_240"><rect width="10" height="10" fill="white" transform="translate(0.5 0.989838)"/></clipPath></defs></svg>';
        var sonnoCheckoutBanner = `<div class="sonnoCheckoutBannerWrap"><div class="inner-wrap"><a href="/" class="main-logo"><img src="https://iili.io/HPaCYCP.png" alt="Sonno"></a><div class="banner-right-content"><div class="reviews"><img class="stars-img" src="https://iili.io/HPaCx3u.png" alt="5 Stars"><p class="title">Join Our 40,000+ Happy Customers</p></div><img class="right-img" src="https://iili.io/HPaCaG1.png" alt="Bed"></div></div></div>`;
        document.querySelector('aside[role="complementary"]').insertAdjacentHTML('beforebegin', sonnoCheckoutBanner);
        var sonnoCheckoutHtml = `<div class="sonnoCheckoutInfoBarWrap ${className}"><div class="sonnoCheckoutInfoBarItems sonnoCheckoutInfoBarItemsInfo"><div class="sonnoCheckoutInfoBarContent"><img src="https://iili.io/HPaC5ZB.png" alt="Information"><p>Information</p></div></div>${arrowIcon} <div class="sonnoCheckoutInfoBarItems sonnoCheckoutInfoBarItemsShipping"><div class="sonnoCheckoutInfoBarContent"><img src="https://iili.io/HPaCCG9.png" alt="Delivery"><p>Delivery</p></div></div>${arrowIcon} <div class="sonnoCheckoutInfoBarItems sonnoCheckoutInfoBarItemsPayment"><div class="sonnoCheckoutInfoBarContent"><img src="https://iili.io/HPaCfQS.png" alt="Payment & Finance Options"><p>Payment & Finance Options</p></div></div></div>`;
        document.querySelector('.main__header nav').insertAdjacentHTML('afterend', sonnoCheckoutHtml);
		var iconSec = `<div class="icon-wrapper"><div class="inner-wrap"><div class="list-item"><div class="img-block"><img src="https://iili.io/HPaCATQ.png" alt="Fast Free Delivery"></div><p><strong>Fast Free Delivery</strong> & Hassle free returns</p></div><div class="list-item"><div class="img-block"><img src="https://iili.io/HPaCTyx.png" alt="Pay Monthly"></div><p><strong>Pay Monthly</strong> Interest free</p></div><div class="list-item"><div class="img-block"><img src="https://iili.io/HPaCIvj.png" alt="Risk Free Trial"></div><p>Risk Free Trial<strong> 60 Night</strong></p></div></div></div>`;
	    document.querySelector('.order-summary__sections').insertAdjacentHTML('beforeend', iconSec);
	    document.querySelector('.sonnoCheckoutInfoBarWrap').insertAdjacentHTML('beforebegin', iconSec);
	    var singleLogoHtml = ({title,content,date}, index) => `<div class="slider-item item-${index + 1}"><h4 class="tp-title">${title}</h4><h4 class="tp-date">${date}</h4><img src="https://iili.io/HPGiKTg.png" alt="TrustPilot Stars"><h4 class="tp-content">${content}</h4></div>`;
    	var sliderWrap = `<div class="tp-slider"><div class="slider-wrap">${sliderReviews.map((data, i) => singleLogoHtml(data, i)).join('\n')}</div></div></div>`;
    	document.querySelector('.order-summary__sections .icon-wrapper').insertAdjacentHTML('afterend', sliderWrap);
   	    document.querySelector('.step__footer').insertAdjacentHTML('afterend', sliderWrap);
       	if(document.querySelector('.sonnoCheckoutInfoBarItemsInfo .sonnoCheckoutInfoBarContent p')){
	        document.querySelector('.sonnoCheckoutInfoBarItemsInfo .sonnoCheckoutInfoBarContent p').addEventListener('click', function() {
	        	console.log('click-information');
	            document.querySelectorAll('.breadcrumb__item .breadcrumb__link')[0].click();
	        });
       	}
       	if(document.querySelector('.sonnoCheckoutInfoBarItemsShipping .sonnoCheckoutInfoBarContent p')){
	        document.querySelector('.sonnoCheckoutInfoBarItemsShipping .sonnoCheckoutInfoBarContent p').addEventListener('click', function() {
       			console.log('click-delivery');
	            document.querySelectorAll('.breadcrumb__item .breadcrumb__link')[1].click();
	        });
       	}
       	if(document.querySelector('.sonnoCheckoutInfoBarItemsShipping .sonnoCheckoutInfoBarContent p')){
       		document.querySelectorAll('.read-more').forEach(function(e) {
	       		e.addEventListener('click', function() {
	       		  var dots = e.closest('.tp-content').querySelector(".dots");
				  var moreText = e.closest('.tp-content').querySelector(".more");
				  if (dots.style.display != "none") {
				    dots.style.display = 'none';
				    moreText.style.display = 'inline';
				    e.innerHTML = "Read less";
				  } else {
				  	dots.style.display = 'inline';
				    moreText.style.display = 'none';
				    e.innerHTML = "Read more";
				  }
	       		});
       		});
       	}
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
		      jQuery('.tp-slider .slider-wrap').slick({
				  infinite: false,
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  arrows: true,
				  dots: true,
				  prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5607 18.5607C9.97488 19.1465 9.02513 19.1465 8.43941 18.5607L0.439405 10.5607C-0.146395 9.97486 -0.146395 9.02526 0.439405 8.43946L8.43941 0.439396C9.02513 -0.146384 9.97488 -0.146384 10.5607 0.439396C11.1464 1.02518 11.1464 1.97494 10.5607 2.56072L3.62141 9.50006L10.5607 16.4395C11.1464 17.0253 11.1464 17.9749 10.5607 18.5607Z" fill="black"/></svg></button>',
				  nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.939335 0.939404C1.52512 0.353603 2.47487 0.353603 3.06059 0.939404L11.0606 8.9394C11.6464 9.5252 11.6464 10.4748 11.0606 11.0606L3.06059 19.0607C2.47487 19.6464 1.52512 19.6464 0.939335 19.0607C0.353555 18.4749 0.353555 17.5251 0.939335 16.9393L7.87859 10L0.939335 3.0606C0.353555 2.4748 0.353555 1.5252 0.939335 0.939404Z" fill="black"/></svg></button>',
				  responsive: [
				  	{
				      breakpoint: 1200,
				      settings: {
				        slidesToShow: 1,
				        dots: true
				      }
				    },
				    {
				      breakpoint: 999,
				      settings: {
				        slidesToShow: 2,
				        dots: true
				      }
				    },
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 1,
				        dots: true
				      }
				    }
				   ]
				});
	        }
		},500);
	}
    if (document.querySelector('.main__header nav') && document.querySelector('.order-summary__sections')) {
        try {
            sonnoCheckout.init();
            waitForJQuery(sliderCreate);
        } catch (err) {
            console.log('TRY ERROR: ' + err);
        }
    } else {
        setTimeout(testLoad, 25);
    }
})();