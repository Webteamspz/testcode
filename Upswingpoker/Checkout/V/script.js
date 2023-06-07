var convertInterval = setInterval(function() {
    if (typeof convert != 'undefined') {
        clearInterval(convertInterval);
        try{
			convert.$(document).ready(function () {
		    if (!convert.$('body').hasClass('ups-checkout')) {
		        convert.$('body').addClass('ups-checkout');
		        loadTest();
		    }
		    function loadTest() {
		    	var banner = '<div class="banner-wrap"><div class="inner-slider"></div><div class="hero-review"><img src="https://iili.io/H8MMfwB.png" alt="5 Stars"><p class="title">Join 70,000+ Happy Winners</p></div></div>';
				var newBanner = '<div class="new-banner-wrap"><div class="inner-wrap"><a class="main-logo" href="/"><img src="https://iili.io/H4clbqv.png" alt="Upswing Logo"></a><div class="review-wrapper"><img class="guarantee-img" src="https://iili.io/H4clm1R.png" alt=" Guarantee"><div class="content-wrapper"><img class="img" src="https://iili.io/H4cltLJ.png" alt="5 Stars"><h4 class="title">70,000+ Happy Winners</h4></div></div><img class="right-side-img" src="https://iili.io/H4clpgp.png" alt="Cards"></div></div>';
		    	var rightContent = '<div class="new-checkout-section"><div class="flex-box"><div class="block-one-g"><div class="one-g-outer"><div class="img-block"><img src="https://iili.io/HUMzhTg.png" alt="100% Satisfaction Guarantee"></div><div class="info-bock"><p>Your Order Comes With Upswing Poker\'s "All-In" 100% Satisfaction Guarantee</p><p>If you\'re not satisfied for any reason, just let us know within 30 days, and we\'ll refund your investment, no questions asked. It\'s a risk-free bet. Join us now and level-up your skills.</p></div></div></div><div class="review-block"><h3><span class="heading">Customer Reviews</span></h3><div class="flex-wrap"><div class="flex-block"><div class="img-block"><img src="https://iili.io/HU8umUN.png" alt="Brad K."></div><div class="info-block"><p class="first-p">The value of an Upswing Lab membership is such a steal. Honestly, I feel like Upswing... <a class="read-more" href="javascript:void(0)">Read more</a></p><p><img src="https://iili.io/HU8ublp.png" alt="Check"><span>Brad K.</span></p><p class="red"><span>Verified Customer</span><span> (Upswing Lab)</span></p><p class="last">Long-Time Upswing Member</p></div></div><div class="flex-block"><div class="img-block"><img src="https://iili.io/HU8uyJI.png" alt="Dan Ott"></div><div class="info-block"><p class="first-p">Without the concepts I learned from Upswing Poker, I doubt I would have made a deep... <a class="read-more" href="javascript:void(0)">Read more</a></p><p><img src="https://iili.io/HU8ublp.png" alt="Check"><span>Dan Ott</span></p><p class="red"><span>Verified Customer</span><span> (Multiple courses)</span></p><p class="last">Won $4.7 Million in WSOP <br>Main Event (2nd Place)</p></div></div></div></div></div></div></div>';
		    	/*Banner Added*/
		    	convert.$(newBanner).insertBefore('main article');
		    	/*Form placeholder set and text Update*/
		    	convert.$('.lost_password > a').text('Forgot Password?');
		    	convert.$('button[name="apply_coupon"]').text('Apply');
		    	convert.$('.woocommerce form.login #username').attr('placeholder','Enter Email or Username');
		    	convert.$('.woocommerce form.login #password').attr('placeholder','Enter Password');
		    	convert.$('#billing_first_name, #shipping_first_name').attr('placeholder','First Name');
		    	convert.$('#billing_last_name, #shipping_last_name').attr('placeholder','Last Name');
		    	convert.$('#billing_email').attr('placeholder','Email');
		    	convert.$('label[for="billing_email"]').html('Email<abbr class="required" title="required">*</abbr>');
		    	convert.$('#billing_phone').attr('placeholder','Phone (optional)');
		    	convert.$('#shipping_company').attr('placeholder','Company Name');
		    	convert.$('.woocommerce-billing-fields > h3').text('Billing Address');
		    	convert.$('<h4>Shipping Address</h4>').insertBefore('#ship-to-different-address');
		    	convert.$('#order_review_heading').text('Secure payment');
		    	/*Right Contetnt*/
		    	convert.$('#order_review, .woocommerce').append(rightContent);
		    	/*Payment Layout set*/
		    	convert.$('#order_review_heading').insertAfter('.woocommerce-additional-fields');
		    	convert.$('#payment').insertAfter('#order_review_heading');
		    	convert.$('.woocommerce>.woocommerce-info').insertAfter('form.woocommerce-checkout');
		    	convert.$('.ppc-button-wrapper').insertAfter('#payment');
		    	/*Coupon code*/
		    	convert.$('.woocommerce-form-coupon-toggle').insertBefore('.shop_table');
		    	convert.$('.woocommerce-form-coupon').insertAfter('.woocommerce-form-coupon-toggle');
				var width = convert.$(window).width();  
		    	if(width < 992){
		    		convert.$('#order_review').insertBefore('#customer_details');
		    	}
		    	convert.$('body').addClass('load');
		    }
		});
        }catch{
        	convert.$('body').addClass('load')
        }
    }
});