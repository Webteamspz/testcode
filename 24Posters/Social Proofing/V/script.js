convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('posters-test-03')) {
        convert.$('body').addClass('posters-test-03');
        loadTest();
    }
    function loadTest() {
    	var banner = '<div class="trustpiolt-banner"><div class="inner-wrap"><div class="img-wrap">Excellent <img src="https://iili.io/HrJoHaS.png" alt="5 Stars"></div><div class="text-wrap">80% 5 star reviews on <div class="inner-img-wrap"><img src="https://iili.io/HrJo9F2.png" alt="TrustPilot">TrustPilot</div></div></div></div>';
    	convert.$(banner).insertBefore('sticky-header');
    }
});