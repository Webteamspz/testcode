(function(){
	'use strict';
	waitForElement('section.product-page-description').then(function(elm) {
		document.querySelector('body').classList.add('bs-test');
		insertAfter(document.querySelector('.upsell-products-wrap'),elm);
	});
	function waitForElement(selector) {
        return new Promise(function(resolve) {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            } else {
                window.DOMContentLoaded = function() {
                    return reject(document.querySelector(selector), "Target element not found.");
                }
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
	function insertBefore(el, referenceNode) {
	    referenceNode.parentNode.insertBefore(el, referenceNode);
	}
	function insertAfter(el, referenceNode) {
	    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
	}
})();