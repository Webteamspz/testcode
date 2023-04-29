function elementReady(selector) {
    return new Promise((resolve) => {
        function check() {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
            } else {
                setTimeout(check, 100);
            }
        }
        check();
    });
}

function updateAccordionData(nameKey, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].pagePath === nameKey) {
            var boardsSpecsList = document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner')[3].querySelectorAll('ul li');
            //Board Specs
            if (arr[i].pagePath == 'the-sundeck') {
                document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[3].insertAdjacentHTML('afterbegin', `<div class="inner-left-part"><div class="col1"><div class="row1"><b>Dimensions:</b><br>${boardsSpecsList[0].textContent.split(': ')[1]}</div><div class="row2"><b>Dock weight:</b><br>${boardsSpecsList[1].textContent.split(': ')[1]}</div></div><div class="col2"><div class="row2"><b>Max capacity:</b><br>${boardsSpecsList[2].textContent.split(': ')[1]}</div></div></div><div class="inner-right-part"><picture><source media="(min-width:769px)" srcset=${arr[i].boardSpecsDesk}><img src=${arr[i].boardSpecsTab} alt="Board Specs"></picture></div>`);
            } else {
                document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[3].insertAdjacentHTML('afterbegin', `<div class="inner-left-part"><div class="col1"><div class="row1"><b>Dimensions:</b><br>${boardsSpecsList[0].textContent.split(': ')[1]}</div><div class="row2"><b>Board weight:</b><br>${boardsSpecsList[1].textContent.split(': ')[1]}</div></div><div class="col2"><div class="row1"><b>Total package weight:</b><br>${boardsSpecsList[2].textContent.split(': ')[1]}</div><div class="row2"><b>Max capacity:</b><br>${boardsSpecsList[3].textContent.split(': ')[1]}</div></div></div><div class="inner-right-part"><picture><source media="(min-width:1024px)" srcset=${arr[i].boardSpecsDesk}><img src=${arr[i].boardSpecsTab} alt="Board Specs"></picture></div>`);
                // Key Features
                document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[2].insertAdjacentHTML('afterend', `<img class="feature-img" src=${arr[i].features} alt="Key Features"></img>`);
                //Accessories
                document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[1].insertAdjacentHTML('afterbegin', `<div class="inner-left-part"></div><div class="inner-right-part"><img src=${arr[i].accessories} alt="Board Specs"></div>`);
                document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[1].querySelector('.inner-left-part').insertAdjacentElement('beforeend', document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner')[1].querySelector('ul'));
            }
            // Description
            if (arr[i].pagePath == 'uss-hs-inflatable-stand-up-paddle-board-package' || arr[i].pagePath == 'shadowcaster-11ft-fishing-and-expedition-inflatable-stand-up-paddle-board-package') {
                document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[0].insertAdjacentHTML('beforeend', `<div class="description-wrapper"><div class="desc-box"><img src="https://iili.io/H8AHLdB.jpg" alt="Glide Effortlessly"><p>Glide Effortlessly</p></div><div class="desc-box"><img src="https://iili.io/H8cudUx.jpg" alt="Super Stable"><p>Super Stable</p></div><div class="desc-box"><img src="https://iili.io/H8AHZe1.jpg" alt="Easy Travel & Storage"><p>Easy Travel & Storage</p></div><div class="desc-box"><img src="https://iili.io/H8AHP0Q.jpg" alt="Extra Durable"><p>Extra Durable</p></div></div>`);
            } else if (arr[i].pagePath == 'the-sundeck') {
                document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[0].insertAdjacentHTML('beforeend', `<div class="description-wrapper"><div class="desc-box"><img src="https://iili.io/H8cu3HQ.jpg" alt="Premium Inflatable Swim Platform"><p>Premium Inflatable</br> Swim Platform</p></div><div class="desc-box"><img src="https://iili.io/H8cudUx.jpg" alt="Super Stable"><p>Super Stable</p></div><div class="desc-box"><img src="https://iili.io/H8AHZe1.jpg" alt="Easy Travel & Storage"><p>Easy Travel & Storage</p></div><div class="desc-box"><img src="https://iili.io/H8AHP0Q.jpg" alt="Extra Durable"><p>Extra Durable</p></div></div>`);
            } else {
                document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[0].insertAdjacentHTML('beforeend', `<div class="description-wrapper"><div class="desc-box"><img src="https://iili.io/H8AHigV.jpg" alt="Ultralight Boards"><p>Ultralight Boards</p></div><div class="desc-box"><img src="https://iili.io/H8AHLdB.jpg" alt="Glide Effortlessly"><p>Glide Effortlessly</p></div><div class="desc-box"><img src="https://iili.io/H8AHZe1.jpg" alt="Easy Travel & Storage"><p>Easy Travel & Storage</p></div><div class="desc-box"><img src="https://iili.io/H8AHP0Q.jpg" alt="Extra Durable"><p>Extra Durable</p></div></div>`);
            }
            // Shipping Information 
            var shippingText = document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner')[4].querySelector('p').textContent.split(' ship ');
            document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner .content-wrapper')[4].innerHTML = `${shippingText[0]}  ship  <b>${shippingText[1]}</b>`;
        }
    }
}
// Tab Icons
var iconList = ["https://iili.io/H8A3CLg.png", "https://iili.io/H8czxff.png", "https://iili.io/H8A3PZF.png", "https://iili.io/H8A2dNt.png", "https://iili.io/H8AFnuS.png"];
var path = window.location.pathname.split('/products/')[1];
var ZG = [{
    "boardSpecsDesk": "https://iili.io/H8cC3ZJ.jpg",
    "boardSpecsTab": "https://iili.io/H8cCuZG.jpg",
    "accessories": "https://iili.io/H8AMFIV.jpg",
    "features": "https://iili.io/H8AMKhB.jpg",
    "pagePath": "zg-inflatable-stand-up-paddle-board-package"
}, {
    "boardSpecsDesk": "https://iili.io/H8cCKCv.jpg",
    "boardSpecsTab": "https://iili.io/H8MIJ2e.png",
    "accessories": "https://iili.io/H8YLL1p.jpg",
    "features": "https://iili.io/H8YLQrN.jpg",
    "pagePath": "elevation-inflatable-stand-up-paddle-board-package"
}, {
    "boardSpecsDesk": "https://iili.io/H8cCC3N.jpg",
    "boardSpecsTab": "https://iili.io/H8cCRnf.jpg",
    "accessories": "https://iili.io/H8YZpsf.jpg",
    "features": "https://iili.io/H8Yt9f4.jpg",
    "pagePath": "wolf-inflatable-stand-up-paddle-board-package"
}, {
    "boardSpecsDesk": "https://iili.io/H8cCnaI.jpg",
    "boardSpecsTab": "https://iili.io/H8cCovt.jpg",
    "accessories": "https://iili.io/H8YtQrQ.jpg",
    "features": "https://iili.io/H8Ytt2V.jpg",
    "pagePath": "uss-hs-inflatable-stand-up-paddle-board-package"
}, {
    "boardSpecsDesk": "https://iili.io/H8cCIun.jpg",
    "boardSpecsTab": "https://iili.io/H8cCxyX.jpg",
    "accessories": "https://iili.io/H8YDNu1.jpg",
    "features": "https://iili.io/H8YDOwF.jpg",
    "pagePath": "shadowcaster-11ft-fishing-and-expedition-inflatable-stand-up-paddle-board-package"
}, {
    "boardSpecsDesk": "https://iili.io/H8YbfPj.jpg",
    "boardSpecsTab": "https://iili.io/H8YbKMb.jpg",
    "accessories": "",
    "features": "",
    "pagePath": "the-sundeck"
}];
elementReady('.shopify-payment-terms.product__policies').then((element) => {
    // Add class into body
    document.body.classList.add('hsbc-pdp');
    if (window.location.pathname.includes('the-sundeck')) {
        document.body.classList.add('the-sundeck');
    }
    //Tabs added in a wrapper 
    element.insertAdjacentHTML('afterend', '<div class="tab-wrapper"></div>');
    document.querySelectorAll('.product-block.product-block--tab').forEach(function(e) {
        document.querySelector('.tab-wrapper').insertAdjacentElement('beforeend', e);
    });
    //Tab Icons
    document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-trigger-btn--borders').forEach(function(e, i) {
        e.insertAdjacentHTML('afterend', `<img class="tab-icon" src=${iconList[i]} alt="Icon" />`);
    });
    document.querySelectorAll('.hsbc-pdp .tab-wrapper .collapsible-content__inner').forEach(function(e) {
        e.insertAdjacentHTML('beforeend', '<div class="content-wrapper"></div>');
    });
    updateAccordionData(path, ZG);
    //Move Board specs at the top
    elementReady('.product-single__meta > div[data-product-blocks]').then((ele) => {
        document.querySelectorAll('.product-single__meta > div[data-product-blocks] > .product-block').forEach(function(el, index) {
            el.classList.add('block-' + index);
        });
        if (path == 'the-sundeck') {
            document.querySelector('.tab-wrapper').insertAdjacentElement('beforebegin', document.querySelector('.product-single__meta > div[data-product-blocks] > .product-block.block-5'));
        } else {
            document.querySelector('.tab-wrapper').insertAdjacentElement('beforebegin', document.querySelector('.product-single__meta > div[data-product-blocks] > .product-block.block-4'));
        }
    });
    /*Accordin logic*/
     document.querySelectorAll('.hsbc-pdp .collapsibles-wrapper--border-bottom').forEach(function(e1) {
        e1.addEventListener('click', function() {
            if (e1.querySelector('.collapsible-content').classList.contains('is-open')) {
                // e1.querySelector('.collapsible-content').setAttribute('style', 'height:100%');
            }
            document.querySelectorAll('.hsbc-pdp .collapsibles-wrapper--border-bottom').forEach(function(e2) {
                if (e1 != e2) {
                    if (e2.querySelector('button').classList.contains('is-open')) {
                        e2.querySelector('button').classList.remove('is-open');
                        e2.querySelector('button').setAttribute('aria-expanded', 'false');
                    }
                    if (e2.querySelector('.collapsible-content').classList.contains('is-open')) {
                        e2.querySelector('.collapsible-content').classList.remove('is-open');
                        e2.querySelector('.collapsible-content').setAttribute('style', '');
                    }
                }
            });
        });
    });
});