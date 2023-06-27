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
    };
    function init() {
        // filter Cards
        convert.$('body').addClass('va-3')
        var slider = `<div class="slide-card-section filter_exp">
    <div class="slide-card">
        <a  name='Accesories' class="slide-item">
            <div class="img-box"><img
                    src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/acc.png"
                    alt="Accessories"></div>
            <div>
                <h4>Accessories</h4>
            </div>
        </a>
        <a name='Bracelets' class="slide-item">
            <div class="img-box"><img
                    src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/brac.png"
                    alt="Bucket Hats"></div>
            <div>
                <h4>Bracelets</h4>
            </div>
        </a>
        <a name='Necklaces' class="slide-item">
            <div class="img-box"><img
                    src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/neck.png" alt="Necklaces">
            </div>
            <div>
                <h4>Necklaces</h4>
            </div>
        </a>
        <a  name='Rings' class="slide-item">
          <div class="img-box"><img
                  src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/ring.png" alt="Rings"></div>
          <div>
              <h4>Rings</h4>
          </div>
        </ >
        <a name='Sets' class="slide-item">
            <div class="img-box"><img
                    src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/set.png " alt="Sets"></div>
            <div>
                <h4>Sets</h4>
            </div>
        </a>
        <a class="slide-item lastElm">
            <div class="img-box"><img
                    src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/all.png " alt="All"></div>
            <div>
                <h4>All</h4>
            </div>
        </a>
    </div>
    
</div>`;

        function checkerBoard() {
            // while click cards
            convert.$('.slide-card-section .slide-card .slide-item').on('click', function (element) {
                convert.$('.slide-card-section .slide-card .slide-item').removeClass('active');
                var currentURL = location.href;
                var hrefURl = convert.$(this).attr('name');
                convert.$(`[value="${hrefURl}"]`).trigger('click');
                convert.$(this).addClass('active');
            })
            // for clean url
            convert.$('.slide-card-section .slide-card .slide-item.lastElm').on('click', function (element) {
                var intervalClear = setInterval(() => {
                    convert.$('#FilterDrawer .filter-form #SidebarDrawer-1-filter-product-type .tag-list .tag--active input').click();
                    if (location.href == 'https://vacier.com/collections/shop?' || location.href == 'https://vacier.com/collections/shop?sort_by=best-selling') {
                        clearInterval(intervalClear)
                    }
                }, 100);
            })

        }
        // mutation on change URL
        function onUrlChange() {
            let lastUrl = location.href;
            new MutationObserver(() => {
                const url = location.href;
                if (url !== lastUrl) {
                    lastUrl = url;
                    replacePriceSt();
                }
            }).observe(document, { subtree: true, childList: true });
            // update the active state
            function replacePriceSt() {
                let currentURL = location.href;
                convert.$('.slide-card-section .slide-card .slide-item:not(lastElm)').each(function (index, element) {
                    var name = convert.$(element).attr('name');
                    if (currentURL.includes(name)) {
                        // console.log("this----:",currentURL.includes(name));
                        convert.$(`[name="${name}"]`).addClass('active');
                    }
                    if (!currentURL.includes(name)) {
                        // console.log("this----2:",name,!currentURL.includes(name));
                        convert.$(`[name="${name}"]`).removeClass('active');
                    }
                });
            }
        }
        onUrlChange();

        convert.$(slider).insertBefore('#MainContent');
        checkerBoard();
    }
    // initalizing the test
    convert.$(document).ready(function () {
        init();
    });

})();