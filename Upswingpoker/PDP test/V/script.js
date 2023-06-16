var convertInterval = setInterval(function() {
    if (typeof convert != 'undefined') {
        clearInterval(convertInterval);
		convert.$(document).ready(function () {
		    if (!convert.$('body').hasClass('ups-pdp')) {
		        convert.$('body').addClass('ups-pdp');
		        loadTest();
		    }
		});
	    function classAllocation(selector,classPrefix){
		    var sectionIndex = 1;
		    convert.$(selector).each(function(){
		        convert.$(this).addClass(classPrefix+'-'+sectionIndex);
		        sectionIndex++;
		    });
		}
	    function loadTest() {
	    	var lastList = '<div class="fl-col-group fl-node-5ea31dbba695c fl-col-group-equal-height fl-col-group-align-center" data-node="5ea31dbba695c"><div class="fl-col fl-node-5ea31dbba696d fl-col-small" data-node="5ea31dbba696d"><div class="fl-col-content fl-node-content"><div class="fl-module fl-module-photo fl-node-5ea31dbba696f" data-node="5ea31dbba696f"><div class="fl-module-content fl-node-content"><div class="fl-photo fl-photo-align-center"><div class="fl-photo-content fl-photo-img-png"><img decoding="async" loading="lazy" class="fl-photo-img wp-image-468188 size-full" src="https://iili.io/H6jMbYF.png" alt="Facebook-messenger" height="49" width="49" title="Facebook-messenger" srcset="https://iili.io/H6jMbYF.png 49w, https://iili.io/H6jMbYF.png 32w" sizes="(max-width: 49px) 100vw, 49px"></div></div></div></div></div></div><div class="fl-col fl-node-5ea31dbba696e" data-node="5ea31dbba696e"><div class="fl-col-content fl-node-content"><div class="fl-module fl-module-rich-text fl-node-5ea31dbba6970 wyg" data-node="5ea31dbba6970"><div class="fl-module-content fl-node-content"><div class="fl-rich-text"><p>And free bonuses worth $678+</p></div></div></div></div></div></div>';
	    	classAllocation('main.content .fl-builder-content > div','section');
	    	
	    	convert.$(lastList).insertBefore('.section-4 .fl-node-content [data-node="5ea31dbba695e"]');
	    	
	    	btnUpdate('.section-1 .fl-button','SEE WHAT’S INSIDE');
	    	scrollSec('.section-1 .fl-button','.section-4');
	    	
	    	btnUpdate('.section-4 .fl-button','MEET OUR COACHES');
	    	var targetSec;
	    	if(convert.$(window).width() < 769) {
			   targetSec = '#testimonialssmall';
			} else {
			   targetSec = '#testimonialslarge';
			}
	    	convert.$('.section-4 .fl-button').on('click',function(){
	    		convert.$('html, body').animate({
	                scrollTop: convert.$(targetSec).offset().top - 100
		        }, 'fast');
	    	});
	    	
	    	convert.$("#testimonialslarge, #testimonialssmall").append(convert.$('.section-9 [data-node="5ea31e25e22d8"]'));
	    	btnUpdate('.section-10 .fl-button','VIEW PRICING');
	    	scrollSec('.section-10 .fl-button','.section-15');
	    }
	    function btnUpdate(btnSelector, btnText){
	    	convert.$(btnSelector).find('span').text(btnText);
	    	convert.$(btnSelector).attr('href','javascript:void(0)');
	    }
	    function scrollSec(btnSelector, targetSec){
	    	convert.$(btnSelector).on('click',function(){
	    		convert.$('html, body').animate({
	                scrollTop: convert.$(targetSec).offset().top - 100
		        }, 'fast');
	    	});
	    }
    }
});