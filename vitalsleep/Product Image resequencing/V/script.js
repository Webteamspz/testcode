convert.$(document).ready(() => {
	const attrAllocation = (selector) => {
	    let order = 1;
	    convert.$(selector).each(function(){
	        convert.$(this).attr('data-item-order',order);
	        order++;
	    });
	};
	const orderChange = (selector1,selector2,pos) => {
		pos == 'before' ? convert.$(selector1).insertBefore(selector2) : convert.$(selector1).insertAfter(selector2);
	};
    const loadTest = () => {
    	var selectorPrefix = '.MagicToolboxContainer .MagicToolboxSelectorsContainer.no-magic-scroll';
    	attrAllocation(selectorPrefix+' a');
    	orderChange(selectorPrefix+' a[data-item-order="6"]',selectorPrefix+' a[data-item-order="2"]','after');
    	orderChange(selectorPrefix+' a[data-item-order="7"]',selectorPrefix+' a[data-item-order="6"]','after');
    	orderChange(selectorPrefix+' a[data-item-order="4"]',selectorPrefix+' a[data-item-order="7"]','after');
    	orderChange(selectorPrefix+' a[data-item-order="9"]',selectorPrefix+' a[data-item-order="4"]','after');
    	orderChange(selectorPrefix+' a[data-item-order="5"]',selectorPrefix+' a[data-item-order="9"]','after');
    	orderChange(selectorPrefix+' a[data-item-order="3"]',selectorPrefix+' a[data-item-order="5"]','after');
    	orderChange(selectorPrefix+' a[data-item-order="8"]',selectorPrefix+' a[data-item-order="3"]','after');
    	orderChange(selectorPrefix+' a[data-item-order="10"]',selectorPrefix+' a[data-item-order="8"]','after');
    };
    if (!convert.$('body').hasClass('vs-nf-test')) {
        convert.$('body').addClass('vs-nf-test');
        loadTest();
    }
});