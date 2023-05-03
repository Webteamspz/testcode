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
    waitForElm('.product-info-main').then(function(elm) {
        setTimeout(function() {
            document.body.classList.add('tr-test');
        }, 500);
    });
})();