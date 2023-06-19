(function () {
    console.info("Exp:va-02");
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

    function init() {
        convert.$(document).ready(function () {
            var banner = `<div class="banner">
            <div class="flex-wrap">
                <div class="list">
                    <div class="list-item">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/ring_1.png.png"
                            alt="ADJUSTABLE SIZING">
                        <p>ADJUSTABLE <br> SIZING</p>
                    </div>
                    <div class="list-item">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/Durab.png"
                            alt="WATERPROOF AND DURABLE">
                        <p>WATERPROOF <br> AND DURABLE</p>
                    </div>
                    <div class="list-item">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/Warran.png" alt="LIFETIME WARRANTY">
                        <p>LIFETIME <br> WARRANTY</p>
                    </div>
                    <div class="list-item">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007347/Recycle_2.png.png" alt="Made with RECYCLED MATERIALS">
                        <p>Made with <br>RECYCLED MATERIALS</p>
                    </div>
                </div>
            </div>
        </div>`;
             if (location.href =='https://vacier.com/collections/shop') {
                 location.href = 'https://vacier.com/collections/shop?sort_by=best-selling';
            }
            else if(location.href == 'https://vacier.com/collections/shop?convert_action=convert_vpreview&convert_e=100036497&convert_v=1000216146'){
                location.href = 'https://vacier.com/collections/shop?sort_by=best-selling&convert_action=convert_vpreview&convert_e=100036497&convert_v=1000216146';
            }
            if (location.href.includes('?sort')) {
                convert.$('[data-section-type="promo-grid"] .page-width').prepend(banner);}
                convert.$('body').addClass('va-02');
                convert.$('body').addClass('loaded');
        });
    }

    waitForConvert(function () {
        init();
    });
})();