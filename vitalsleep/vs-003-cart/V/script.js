(function () {
    console.info("Exp:vital-03");

    function waitForElm(selector, options = {}) {
        const {
            document = window.document,
            timeout = 5000 // 5 seconds
        } = options;

        return new Promise(function (resolve, reject) {
            try {
                if (!document || typeof document.querySelector !== 'function') {
                    throw new Error('Invalid document object');
                }

                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    return;
                }

                const observer = new MutationObserver(function (mutations) {
                    if (document.querySelector(selector)) {
                        resolve(document.querySelector(selector));
                        observer.disconnect();
                    }
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });

                setTimeout(() => {
                    observer.disconnect();
                    reject(new Error(`Timeout waiting for element matching selector '${selector}'`));
                }, timeout);

            } catch (error) {
                reject(error);
            }
        });
    };


    function waitForJQuery(callback) {
        try {
            if (typeof convert.$ === 'undefined') {
                setTimeout(function () {
                    waitForJQuery(callback);
                }, 100);
            } else {
                callback();
            }
        } catch (e) {
            setTimeout(function () {
                waitForJQuery(callback);
            }, 100);
        }
    };
    function init() {
        convert.$(document).ready(function () {
            convert.$('body').addClass('vs-03');
            convert.$('button.add-me-to-cart.add-to-cart-button.orange').on('click', function (e) {
                waitForElm('#slidecarthq .slidecarthq').then(function (e) {
                    // setTimeout(() => {
                    if (convert.$('#slidecarthq .slidecarthq .header-review').length == 0) {
                            convert.$('#slidecarthq .slidecarthq').prepend('<div class="header-review"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007257/1685598184Group+9.png"><p>1,000+ Positive Reviews</p></div>');
                        }
                        // }, 600);
                         if (convert.$("#slidecarthq .slidecarthq .review-item-img").length == 0) {
                        convert.$('<div class="review-item-img"><img src="https://cdn-3.convertexperiments.com/uf/10007840/10007257/1685600303service.png"></div>').insertBefore('#slidecarthq .slidecarthq  .footer');
                    
                    }
                })

            })
            if (location.pathname == '/cart') {
                convert.$('#shopify-section-header .section-header').append(`
                <div class="free-ship-box">
                <div class="client-section" bis_skin_checked="1">
    <div class="container" bis_skin_checked="1">
        <div class="client-row" bis_skin_checked="1">
            <div class="client-col" bis_skin_checked="1">
                <div class="client-img" bis_skin_checked="1"><img
                        src="https://cdn-3.convertexperiments.com/uf/10007840/10007257/1685950559one.png"
                        alt="100% Money Back Guarantee"></div>
                <div class="client-text" bis_skin_checked="1">
                    <h4 class="client-title">
                        <p>100% Money Back Guarantee</p>
                    </h4>
                </div>
            </div>
            <div class="client-col" bis_skin_checked="1">
                <div class="client-img" bis_skin_checked="1"><img
                        src="https://cdn-3.convertexperiments.com/uf/10007840/10007257/1685950559two.png"
                        alt="Free Same Day Shipping"></div>
                <div class="client-text" bis_skin_checked="1">
                    <h4 class="client-title">
                        <p>Free Same Day Shipping</p>
                    </h4>
                </div>
            </div>
            <div class="client-col" bis_skin_checked="1">
                <div class="client-img" bis_skin_checked="1"><img
                        src="https://cdn-3.convertexperiments.com/uf/10007840/10007257/1685950560three.png"
                        alt="Safe and Secure Checkout"></div>
                <div class="client-text" bis_skin_checked="1">
                    <h4 class="client-title">
                        <p>Safe and Secure Checkout</p>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</div></div>`);
                convert.$('.checkout_item_block .checkout_buy_row').prepend(`
                <div class="review-card">
  <img class="card-img-top" src="https://cdn-3.convertexperiments.com/uf/10007840/10007257/1685953796yellowstar.png" alt="">
  <p>1,000+ Positive Reviews</p>
 
  <div class="card-body">
    <img class="card-img-top" src="https://cdn-3.convertexperiments.com/uf/10007840/10007257/1685953796yellowstar.png" alt="Rating">
    <h4 class="card-title">Vitalsleep is vital</h4>
    <p class="card-text">My husband uses this wonderful product! His snoring was not good for his own health and it was keeping me awake at night. From the very first night of using Vitalsleep he has had not snored! Incredible!!</p>
    <span>- Denise D.</span>
  </div>
</div>`)
            }
        });
    }


    waitForJQuery(function () {
        $(document).ready(function () {
            console.info('convert loaded');
            init();
        });
    });
})();