convert.$(document).ready(function() {
    var isMob = window.matchMedia("(max-width: 768px)").matches;
    if (isMob) {
	    if (!convert.$('body').hasClass('bs-test')) {
	        convert.$('body').addClass('bs-test');
	        loadTest();
	    }
    }

    function loadTest() {
        var checkSlider = setInterval(function() {
            if (convert.$('#product-gallery-carousel').hasClass('swiper-initialized')) {
                clearInterval(checkSlider);
                document.querySelector('.gallery-swiper-container').swiper.destroy();
                var swiperGallery = new Swiper('#product-gallery-carousel', {
                    spaceBetween: 20,
                    slidesPerView: 1.5,
                    simulateTouch: true,
                    preloadImages: true,
                    centeredSlides: true,
                    slideToClickedSlide: false,
                    /*pagination: '.swiper-pagination',*/
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    lazy: {
                        loadPrevNext: false,
                        loadOnTransitionStart: true
                    },
                    speed: 100,
                });
            }
        }, 100);
        var checkSlider2 = setInterval(function() {
            if (convert.$('.gallery-thumbs').hasClass('swiper-initialized')) {
                clearInterval(checkSlider);
                convert.$('.gallery-thumbs').remove();
            }
        }, 100);
    }
});