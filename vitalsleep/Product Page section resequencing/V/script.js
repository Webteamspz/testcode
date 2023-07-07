convert.$(document).ready(() => {
	const classAllocation = (selector,classPrefix) => {
	    let sectionIndex = 1;
	    convert.$(selector).each(function(){
	        convert.$(this).addClass(classPrefix+'-'+sectionIndex);
	        sectionIndex++;
	    });
	};
	const orderChange = (selector1,selector2,pos) => {
		pos == 'before' ? convert.$(selector1).insertBefore(selector2) : convert.$(selector1).insertAfter(selector2);
	};
    const loadTest = () => {
    	classAllocation('#MainContent > .shopify-section','section');
    	orderChange('.section-4','.section-2','after');
    	orderChange('.section-3','.section-14','after');
    	orderChange('.section-9','.section-4','after');
    	orderChange('.section-3','.section-13','after');
    	orderChange('.section-10','.section-3','before');
    	orderChange('.section-13','.section-12','before');
    };
    if (!convert.$('body').hasClass('vs-nf-test')) {
        convert.$('body').addClass('vs-nf-test');
        loadTest();
    }
});