convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('sonno-test')) {
        convert.$('body').addClass('sonno-test');
        loadTest();
    }
    function loadTest() {
        var width = window.innerWidth;
        convert.$('.install_ment_para, .dividebuy-softcredit').wrapAll('<div class="dividedby-wraper"></div>');
        convert.$('.dividedby-wraper').insertAfter('.collapse-inner');
        var textUpdate = convert.$('.install_ment_para').html().replaceAll('Or from','From');
        convert.$('.install_ment_para').html(textUpdate);
        convert.$('.InofDiv').insertAfter('.install_ment_para');
        if (width < 769 && width > 766) {
        	console.log('check');
        	convert.$('.eight.columns.medium-down--one-whole.left-catalog-image.alpha .diven').insertAfter('.collapse-inner');
        	convert.$('.eight.columns.medium-down--one-whole.left-catalog-image.alpha #assembly_selection').insertAfter('.eight.columns.medium-down--one-whole.right-catalog-content-section.omega .diven');
        } else if (width < 767) {
        	convert.$('.dividedby-wraper').insertAfter('#assembly_selection');
        	// convert.$('#shopify-section-warranty-section').prepend('<h2>Why Choose A Sonno Divan Bed?</h2>');
        }
        if (width < 769) {
        	convert.$('#shopify-section-warranty-section').prepend('<h2>Why Choose A Sonno Divan Bed?</h2>');
        }
        convert.$('body').addClass('load');
    }
});