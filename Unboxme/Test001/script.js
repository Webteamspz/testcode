(function () {
    console.info("Exp:unboxme-01");
    // search for convert
    function waitForConvert(callback) {
        try {
            if (typeof convert.$ === 'undefined') {
                setTimeout(function () {
                    waitForConvert(callback);
                }, 100);
            } else {
                callback();
            }
        } catch (e) {
            setTimeout(function () {
                waitForConvert(callback);
            }, 100);
        }
    }
    // search typing
    function typingFuFun() {
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");
        const textArray = ['Birthdays', 'Thank You',
            'Thinking Of You',
            '$50',
            'Bridal',
            'New Baby',
        ];
        const typingDelay = 80;
        const erasingDelay = 50;
        const newTextDelay = 1000;
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 150);
            }
        }
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }
    // init function
    function init() {
        convert.$(document).ready(function () {
            convert.$('body').addClass('unboxme-01');
            convert.$('.nav__menu #search').insertBefore('.nav__item.header_account_tmb');
            convert.$('.nav__menu #search > div').wrapAll('<div class="search-wraper-wb"></div>');
            // mobile search position change
            if (window.innerWidth <= 991) {
                var searchBox = convert.$('.search-wraper-wb');
                convert.$('header.header .header__inner').append(searchBox);

            }
            // convert.$('#search.search-field').append('<a href="/account/login" class="nav__link">account</a>');
            // convert.$('.search-field__inner #search-input').removeAttr('placeholder');
            convert.$('.shopify-section.faves').insertAfter('.shopify-section.section-steps')
            convert.$('body').append('<div class="modal-overlay new"></div>');
            convert.$(`<div class="search-wrapper mob-only"><label for="search-product"><span class="search-for-typo"><svg width=" 13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12L9.40284 9.39821M10.8421 5.92105C10.8421 7.2262 10.3236 8.47789 9.40076 9.40076C8.47789 10.3236 7.2262 10.8421 5.92105 10.8421C4.61591 10.8421 3.36422 10.3236 2.44134 9.40076C1.51847 8.47789 1 7.2262 1 5.92105C1 4.61591 1.51847 3.36422 2.44134 2.44134C3.36422 1.51847 4.61591 1 5.92105 1C7.2262 1 8.47789 1.51847 9.40076 2.44134C10.3236 3.36422 10.8421 4.61591 10.8421 5.92105V5.92105Z" stroke="black" stroke-linecap="round"></path></svg>Search For <span class="typed-text"><span class="cursor"></span></span></span></label></div>`).insertAfter('.search #search-input.search-field__input');
            // typingFuFun();
            // search events
            convert.$('.search-field__inner #search-input').on('focus', function (e) {
                convert.$('body').addClass('show-modal');
            });
            convert.$('.search-field__inner #search-input').on('blur', function (e) {
                convert.$('body').removeClass('show-modal');
                convert.$('#clearSearchField').click();
            });
            convert.$('.unboxme-01 .modal-overlay').on('click', function (e) {
                e.preventDefault();
            });
            if (window.innerWidth <= 611) {
                convert.$('.shopify-section.section-steps .steps-main .step__items .step__item').wrapAll('<div class="swiper-wrapper"></div>');
                convert.$('.shopify-section.section-steps .steps-main .step__items .step__item').addClass('swiper-slide')
                var swiper = new Swiper(".shopify-section.section-steps .steps-main .step__items", {
                    slidesPerView: "1.3",
                    spaceBetween: 10,
                });
            }
        });
    }

    waitForConvert(function () {
        init();
    });
})();