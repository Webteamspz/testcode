(function() {
    'use strict';
    function waitForElm(selector) {
        return new Promise(function(resolve) {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
            var observer = new MutationObserver(function(mutations) {
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
    function init() {
    	if(document.querySelector('.body-font #media-gallery + div.order-2 > .text-center.mt-2')){
			insertAfter(document.querySelector('.body-font div.order-2 > .text-center.mt-2'),document.querySelector('.body-font h1[itemprop="name"]'));
    	}
    }
    waitForElm('.product-info-main').then(function(elm) {
        setTimeout(function() {
            document.body.classList.add('sp-test');
            init();
        }, 500);
    });
})();