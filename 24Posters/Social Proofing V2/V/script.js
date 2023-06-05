convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('posters-test-04')) {
        convert.$('body').addClass('posters-test-04');
        loadTest();
    }
    function classAllocation(){
        var sectionIndex = 1;
	    convert.$('main .shopify-section').each(function(){
	        convert.$(this).addClass('section-'+sectionIndex);
	        sectionIndex++;
	    });
	}
    function loadTest() {
    	convert.$('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
		convert.$('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>').appendTo('head');
    	var sliderReviews = [{
		    title:'Posters arrived quickly ',
		    content:'Posters arrived quickly and are very good quality, fantastic prints and very nice designs',
		    author:'- Conner Foote'
		},
		{
		    title:'Good quality',
		    content:'I ordered two posters, one A4 and one A3. Very fast shipping and good quality! Will order again',
		    author:'- Maurice'
		},
		{
		    title:'Great quality posters',
		    content:'Great quality posters. Amazing prices! Highly recommend for anyone who wants affordable posters.',
		    author:'- Amelia Koby'
		},
		{
		    title:'Very good posters with clean frames',
		    content:'Very good posters with clean frames, delivery was quick and customer service is also very good.',
		    author:'- Ben'
		},
		{
		    title:'Good quality',
		    content:'Good quality, quick shipping and nice posters. 10/10 would recommend again.',
		    author:'- Dner TV'
		},
		    {
		    title:'Actual good posters',
		    content:'Actual good posters. Quite cheap aswell tbh. I bought without the frame but still looks amazing',
		    author:'- Paulson'
		}];
        var currentPagePath = window.location.pathname.indexOf("/products/");
    	var banner = '<div class="trustpiolt-banner"><div class="inner-wrap"><div class="img-wrap">Excellent <img src="https://iili.io/HrJoHaS.png" alt="5 Stars"></div><div class="text-wrap">42 Reviews on <div class="inner-img-wrap"><img src="https://iili.io/HrJo9F2.png" alt="TrustPilot">TrustPilot</div></div></div></div>';
    	var productbanner = '<div class="trustpiolt-banner product-banner"><div class="inner-wrap"><div class="img-wrap">Excellent <img src="https://iili.io/HrJoHaS.png" alt="5 Stars"></div><div class="text-wrap">42 Reviews on <div class="inner-img-wrap"><img src="https://iili.io/HrJo9F2.png" alt="TrustPilot">TrustPilot</div></div></div></div>';
    	var iconWrap = '<section class="icon-wrap"><div class="icon-inner-wrap"><div class="icon-item"><img src="https://iili.io/H4o5fKN.png" alt="10,000+ Happy Customers"><p class="icon-title">10,000+ Happy Customers</p></div><div class="divider"></div><div class="icon-item"><img src="https://iili.io/H4o5qlI.png" alt="High quality 170gsm paper"><p class="icon-title">High quality 170gsm paper</p></div><div class="divider"></div><div class="icon-item"><img src="https://iili.io/H4o5nHX.png" alt="Fast free delivery on all orders over £39"><p class="icon-title">Fast free delivery on all orders over £39</p></div></div></section>';
    	var singleLogoHtml = ({
            title,
            content,
            author
        }, index) => `<div class="slider-item item-${index + 1}"><h4 class="tp-title">${title}</h4><img src="https://iili.io/H4o5BSt.png" alt="TrustPilot"><h4 class="tp-content">${content}</h4><h4 class="tp-auth">${author}</h4></div>`;
    	var sliderWrap = `<section class="tp-slider">
			<div class="inner-wrap">
				<h3 class="title">What Our Customers Say</h3>
				<div class="slider-wrap">
				${sliderReviews.map((data, i) => singleLogoHtml(data, i)).join('\n')}
				</div>
			</div>
		</section>`;
    	if(currentPagePath > -1){
    		convert.$(productbanner).insertAfter('form[data-type="add-to-cart-form"] .shopify-payment-button');
    	}
    	if(window.location.pathname == "/"){
    		classAllocation();
    		convert.$(iconWrap).insertAfter('.section-1');
    		convert.$(sliderWrap).insertAfter('.icon-wrap');
    		convert.$.getScript( "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function() {
	    		var setSlickInterVal = setInterval(function(){
	        		if($.fn.slick){
	                	clearInterval(setSlickInterVal);
						$('.tp-slider .slider-wrap').slick({
						  infinite: false,
						  slidesToShow: 4,
						  slidesToScroll: 1,
						  arrows: true,
						  prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5607 18.5607C9.97488 19.1465 9.02513 19.1465 8.43941 18.5607L0.439405 10.5607C-0.146395 9.97486 -0.146395 9.02526 0.439405 8.43946L8.43941 0.439396C9.02513 -0.146384 9.97488 -0.146384 10.5607 0.439396C11.1464 1.02518 11.1464 1.97494 10.5607 2.56072L3.62141 9.50006L10.5607 16.4395C11.1464 17.0253 11.1464 17.9749 10.5607 18.5607Z" fill="black"/></svg></button>',
    					  nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.939335 0.939404C1.52512 0.353603 2.47487 0.353603 3.06059 0.939404L11.0606 8.9394C11.6464 9.5252 11.6464 10.4748 11.0606 11.0606L3.06059 19.0607C2.47487 19.6464 1.52512 19.6464 0.939335 19.0607C0.353555 18.4749 0.353555 17.5251 0.939335 16.9393L7.87859 10L0.939335 3.0606C0.353555 2.4748 0.353555 1.5252 0.939335 0.939404Z" fill="black"/></svg></button>',
						  responsive: [
						    {
						      breakpoint: 1100,
						      settings: {
						        slidesToShow: 3
						      }
						    },{
						      breakpoint: 992,
						      settings: {
						        slidesToShow: 2
						      }
						    },{
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
			});
    	}
    	convert.$('body').addClass('banner-sticky');
		convert.$(banner).insertBefore('sticky-header');
    }
});