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
	function findQuantity(nameKey, arr){
        for (let i=0; i < arr.length; i++) {
            if (arr[i].pagePath === nameKey) {
            	return arr[i].quantity;
            }
        }
	}
    function init() {
    	var currentPath = window.location.pathname;
    	var lastMonthSale = [{
	        pagePath:"/personalised-ivory-hooded-fleece-robe.html",
	        quantity:"995"
	    },{
	        pagePath:"/personalised-ditsy-print-mini-backpack.html",
	        quantity:"770"
	    },{
	        pagePath:"/personalised-fairy-princess-fleece-dressing-gown.html",
	        quantity:"757"
	    },{
	        pagePath:"/really-wild-mini-aop-backpack-pink.html",
	        quantity:"727"
	    },{
	        pagePath:"/personalised-dinosaur-print-mini-backpack.html",
	        quantity:"596"
	    },{
	        pagePath:"/personalised-bluey-backpack.html",
	        quantity:"498"
	    },{
	        pagePath:"/personalised-pink-hooded-fleece-robe.html",
	        quantity:"452"
	    },{
	        pagePath:"/personalised-grey-hooded-fleece-robe.html",
	        quantity:"447"
	    },{
	        pagePath:"/personalised-blue-hooded-fleece-robe.html",
	        quantity:"435"
	    },{
	        pagePath:"/personalised-mini-transport-print-backpack.html",
	        quantity:"401"
	    },{
	        pagePath:"/personalised-black-and-white-polka-dot-backpack.html",
	        quantity:"368"
	    },{
	        pagePath:"/really-wild-mini-aop-backpack-navy.html",
	        quantity:"360"
	    },{
	        pagePath:"/personalised-grey-towelling-robe-soft-toy-set.html",
	        quantity:"348"
	    },{
	        pagePath:"/personalised-aqua-safari-mini-backpack.html",
	        quantity:"283"
	    },{
	        pagePath:"/personalised-pink-bunny-mini-backpack-with-ears.html",
	        quantity:"268"
	    },{
	        pagePath:"/personalised-pink-splash-snuggle-cuddle-gift-set.html",
	        quantity:"267"
	    },{
	        pagePath:"/personalised-lion-infant-backpack.html",
	        quantity:"240"
	    },{
	        pagePath:"/farmhouse-sorter.html",
	        quantity:"228"
	    },{
	        pagePath:"/personalised-bear-mini-backpack.html",
	        quantity:"224"
	    }];
    	if(document.querySelector('.MagicToolboxSelectorsContainer')){
    		var quantityPro = findQuantity(currentPath,lastMonthSale);
    		if(quantityPro != undefined){
	    		var labelText = document.createElement('div');
	    		labelText.classList.add('last-sale-info');
	    		labelText.innerHTML= '<div class="last-sale"><img src="https://iili.io/HS76sON.png" alt="Check">'+quantityPro+' Orders in last one Month</div>';
	    		insertAfter(labelText,document.querySelector('.MagicToolboxSelectorsContainer'));
    		}
    	}
    }
    waitForElm('.product-info-main').then(function(elm) {
        setTimeout(function() {
            document.body.classList.add('ls-test');
            init();
        }, 500);
    });
})();