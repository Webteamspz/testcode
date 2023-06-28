(function () {
    'use strict';
    console.debug('start: new navigation');
    let bodyElm = document.body;
    const helperFunc = {
        // wait for element 
        waitForElm: function (selector) {
            return new Promise(function (resolve) {
                if (document.querySelector(selector)) {
                    return resolve(document.querySelector(selector));
                }
                const observer = new MutationObserver(function (mutations) {
                    if (document.querySelector(selector)) {
                        resolve(document.querySelector(selector));
                        observer.disconnect();
                    }
                });
                observer.observe(bodyElm, {
                    childList: true,
                    subtree: true
                });
            });
        },
        // wait for convert
        waitforConvert: function (callback) {
            try {
                if (typeof convert.$ === 'undefined') {
                    setTimeout(function () {
                        helperFunc.waitforConvert(callback);
                    }, 100);
                } else {
                    callback();
                }
            } catch (e) {
                setTimeout(function () {
                    helperFunc.waitforConvert(callback);
                }, 1000);
            }
        },
        // initalizing the test
        init: function () {
            convert.$(document).ready(function () {
                convert.$('<div bis_skin_checked="1"><div class="dynamic-checkout__content" id="dynamic-checkout-cart" data-shopify="dynamic-checkout-cart" bis_skin_checked="1"></div id="paypal-animation-container"></div></div></div>').insertAfter('[class="btn btn--full add-to-cart btn--secondary"]');
            });
        }

    };
    helperFunc.waitforConvert(helperFunc.init)


})();