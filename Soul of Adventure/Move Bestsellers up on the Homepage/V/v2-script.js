(function(){
	'use strict';
	waitForElement('.layout__main article > .shopify-section').then(function(elm) {
        document.body.classList.add('sa-test');
		var newTile = '<a href="https://safishing.com/collections/pack-deals-1" class="slide-item"><div class="img-box"><img src="https://iili.io/HUNuuX2.png" alt="Pack Deals"></div><div><h4>Pack Deals</h4></div></a><a href="https://safishing.com/collections/daily-deals" class="slide-item"><div class="img-box"><img src="https://iili.io/HUNuTzl.png" alt="Daily Deals"></div><div><h4>Daily Deals</h4></div></a>';
		document.querySelectorAll('.slide-card-section .slide-card a')[0].insertAdjacentHTML('beforebegin',newTile);
		classAllocation('.layout__main article > .shopify-section');
		// insertAfter(document.querySelector('.section-4'),document.querySelector('.section-1'));
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