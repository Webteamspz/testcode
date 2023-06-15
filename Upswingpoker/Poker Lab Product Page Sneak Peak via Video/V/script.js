var convertInterval = setInterval(function() {
    if (typeof convert != 'undefined') {
        clearInterval(convertInterval);
		convert.$(document).ready(function () {
		    if (!convert.$('body').hasClass('ups-hero')) {
		        convert.$('body').addClass('ups-hero');
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
	    	var heroSection = '<div class="inner-wrap"><div class="left-content"><img class="main-logo" src="https://iili.io/H6EFpRt.png" alt="Upswing Lab"><h1 class="title">Learn step by step how to become the best at the table</h1><div class="video-content tab-mob-only"><div class="fluid-width-video-wrapper" style="padding-top: 56.25%;"><iframe loading="lazy" src="https://player.vimeo.com/video/692443961?h=9e30e22e50&amp;dnt=1&amp;app_id=122963" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" name="fitvid0"></iframe></div></div><h4 class="sub-title">Professional, Structured and Duplicable Poker Training That Delivers World-Class Results</h4><div class="cta-wrap"><a href="#CTA" target="_self" class="fl-button">See What\'s Inside</a><p class="below-cta-text">Or Keep Scrolling to Learn More</p></div></div><div class="right-content"><div class="fluid-width-video-wrapper" style="padding-top: 56.25%;"><iframe loading="lazy" src="https://player.vimeo.com/video/692443961?h=9e30e22e50&amp;dnt=1&amp;app_id=122963" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" name="fitvid0"></iframe></div></div></div><p class="note-text">If you have already purchased the Upswing Poker Lab you will find it in your <strong><a href="https://members.upswingpoker.com/">Member Home</a></strong></p>';
	    	classAllocation('main.content .fl-builder-content > div','section');
			convert.$('.section-1 .fl-row-content-wrap').append(heroSection);
	    }
    }
});