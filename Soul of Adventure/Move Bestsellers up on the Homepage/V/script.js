(function(){
	'use strict';
	waitForElement('.layout__main article > .shopify-section').then(function(elm) {
		classAllocation('.layout__main article > .shopify-section');
		insertAfter(document.querySelector('.section-4'),document.querySelector('.section-1'));
	});
	function insertBefore(el, referenceNode) {
	    referenceNode.parentNode.insertBefore(el, referenceNode);
	}
	function insertAfter(el, referenceNode) {
	    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
	}
	function classAllocation(selector){
		var index=1;
	    document.querySelectorAll(selector).forEach(function(e){
	        e.classList.add('section-'+index);
	    	index++;
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
})();