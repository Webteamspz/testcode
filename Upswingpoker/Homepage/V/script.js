var convertInterval = setInterval(function() {
    if (typeof convert != 'undefined') {
        clearInterval(convertInterval);
		try{
			convert.$(document).ready(function () {
			    if (!convert.$('body').hasClass('ups-home')) {
			        convert.$('body').addClass('ups-home');
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
		    	var slider = '<div class="slider-section"><div class="title-wrap"><span class="heading">AS SEEN ON</span></div><div class="inner-wrap"><div class="slider-wrap"><img class="img-logo" src="https://iili.io/HrW1PEv.png" alt="client Logos"></div></div></div>'
		    	classAllocation('main.content .fl-builder-content > div','section');
		    	classAllocation('.section-5 div[data-node="5e7d15627fbf8"] > div','div');
		    	convert.$('.section-1 .fl-row-content').append('<img class="img-icon" src="https://iili.io/HrW1i4R.png" alt="Poker Guarantee">');
		    	convert.$('.section-1, .section-2').append('<div class="mob-only mob-background-wrapper"><img class="img-icon" src="https://iili.io/HrW1i4R.png" alt="Poker Guarantee"></div>');
		    	convert.$(slider).insertBefore('.section-3');
		    	convert.$('.section-5').insertBefore('.section-4');
		    	
		    	convert.$('<div class="card-title">POSTFLOP Playbook</div>').insertBefore('.section-5 div[data-node="5e7d15627fbf8"] .div-1 .fl-callout-title');
		    	convert.$('.section-5 div[data-node="5e7d15627fbf8"] .div-1 .fl-callout-text').html('<ul class="list"><li>Turn Small Bets Into Big Wins</li><li>The Fastest, Easiest Way to Become a Winning Player</li><li>Takes Just 2 Hours to Complete</li></ul>');
		    	convert.$('<div class="text-below-btn">47,318 Members Joined</div>').insertAfter('.section-5 div[data-node="5e7d15627fbf8"] .div-1 .fl-callout-button');
		    	
		    	convert.$('<div class="card-title">UPSWING LAB</div>').insertBefore('.section-5 div[data-node="5e7d15627fbf8"] .div-2 .fl-callout-title');
		    	convert.$('.section-5 div[data-node="5e7d15627fbf8"] .div-2 .fl-callout-text').html('<ul class="list"><li>Skyrocket Your Poker Earnings</li><li>Delivers World-Class Results for No Limit Hold\'em Players</li><li>Updated weekly</li></ul>');
		    	convert.$('<div class="text-below-btn">29,424 Members Joined</div>').insertAfter('.section-5 div[data-node="5e7d15627fbf8"] .div-2 .fl-callout-button');
		    	convert.$('body').addClass('load');
		    }
		}catch{
			convert.$('body').addClass('load');
		}
    }
});