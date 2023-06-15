var convertInterval = setInterval(function() {
    if (typeof convert != 'undefined') {
        clearInterval(convertInterval);
		convert.$(document).ready(function () {
		    if (!convert.$('body').hasClass('ups-icons')) {
		        convert.$('body').addClass('ups-icons');
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
	    	var iconSection = '<div class="icon-wrapper"><div class="inner-wrap"><div class="item"><img class="icon" src="https://iili.io/H61OUKX.png" alt="2 hour course"><h4 class="title">2 hour course</h4></div><div class="item"><img class="icon" src="https://iili.io/H61OkoN.png" alt="49,323 Members Joined"><h4 class="title">49,323 Members Joined</h4></div><div class="item"><img class="icon" src="https://iili.io/H61OvVI.png" alt="Win more often"><h4 class="title">Win more often</h4></div><div class="item"><img class="icon" src="https://iili.io/H61O8Pt.png" alt="Confident Gameplay"><h4 class="title">Confident Gameplay</h4></div></div></div>';
	    	classAllocation('main.content .fl-builder-content > div','section');
			convert.$(iconSection).insertAfter('.section-1');
	    }
    }
});