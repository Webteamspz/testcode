var convertInterval = setInterval(() => {
    if (typeof convert != 'undefined' && convert.$(".pdp-galleries > .swiper-container.swiper-initialized").length > 0) {
        clearInterval(convertInterval);
        convert.$(document).ready(() => {
            const loadTest = () => {
                var oldSliderData = [];
                var slides = '';
                var currentCount = 1;
                convert.$(".pdp-galleries > .swiper-container.swiper-initialized .swiper-slide").each(function() {
                    var slideURL = convert.$(this).find('img').attr('src');
                    var slideAlt = convert.$(this).find('img').attr('alt');
                    if (slideURL != undefined) {
                        oldSliderData.push({
                            'imgURL': slideURL,
                            'alt': slideAlt
                        });
                    }
                });
                slides = oldSliderData.map(function(data) {
                    return `<div class="swiper-slide"><img src="${data.imgURL}" alt="${data.alt}" /></div>`;
                });
                convert.$(`<div class="main-slider"><div class="swiper customSwiper" id="custom-gallery"><div class="swiper-wrapper">${slides.join('')}</div><div class="swiper-pagination"></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div><div class="swiper customSwiperTumb" id="custom-tumbs"><div class="swiper-wrapper">${slides.join('')}</div></div><div class="count-wrap"><span class="current"></span> — <span class="total"></span><span class="extra-text"></span></div>`).insertAfter('.single-product__col:first-child');
                var swiper1 = new Swiper(".customSwiperTumb", {
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 5,
                    freeMode: true,
                    watchSlidesProgress: true
                });
                var swiper2 = new Swiper(".customSwiper", {
                    loop: true,
                    spaceBetween: 10,
                    effect: "fade",
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        renderBullet: function(index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    },
                    thumbs: {
                        swiper: swiper1,
                    },
                    on: {
                        afterInit: function() {
                            currentCount = convert.$('#custom-gallery .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active').text();
                        },
                    },
                });
                swiper2.on('slideChange', function(e) {
                    currentCount = convert.$('#custom-gallery .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active').text();
                    convert.$('.count-wrap .current').text(currentCount);
                });
                currentCount = convert.$('#custom-gallery .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active').text();
                var totalCount = convert.$('#custom-gallery .swiper-pagination .swiper-pagination-bullet').length;
                var extraText = convert.$('#image-desc').text();
                convert.$('.count-wrap .current').text(currentCount);
                convert.$('.count-wrap .total').text(totalCount);
                convert.$('.count-wrap .extra-text').text(extraText);
                var clickFirst = 0;
                convert.$('body').on('click', '.main-slider .swiper-button-prev', function() {
                    clickFirst == 0 ? clickFirst = 1 : currentCount == 1 ? currentCount = totalCount : currentCount--;
                    convert.$('.count-wrap .current').text(currentCount);
                    swiper2.slideTo(currentCount);
                });
                convert.$('body').on('click', '.main-slider .swiper-button-next', function() {
                    clickFirst == 0 ? clickFirst = 1 : currentCount < totalCount ? currentCount++ : currentCount = 1;
                    convert.$('.count-wrap .current').text(currentCount);
                    swiper2.slideTo(currentCount);
                });
            }
            let isMob = window.matchMedia("(max-width: 768px)").matches;
            if (isMob) {
                if (!convert.$('body').hasClass('unboxme-test-v1')) {
                    convert.$('body').addClass('unboxme-test-v1');
                    loadTest();
                }
            }
        });
    }
});