convert.$(document).ready(() => {
    const loadTest = () => {
    	const imgBaseURL = 'https://cdn-3.convertexperiments.com/uf/10007840/10007327';
    	const iconData = [{
    		imgURL:imgBaseURL+'/free-delivery.png',
    		title:'Free Shipping',
    		info:'We offer quick & easy free shipping on orders to the continental U.S.A.'
    	},{
    		imgURL:imgBaseURL+'/customer-service.png',
    		title:'Expert Support',
    		info:'Our experts are passionate about projection and are here to help you find the best solution and lowest price. '
    	},{
    		imgURL:imgBaseURL+'/warranty.png',
    		title:'Warranty',
    		info:'All products are authentic and come with manufacturer or extended warranties.'
    	},{
    		imgURL:imgBaseURL+'/review.png',
    		title:'5 Star Service',
    		info:'Customer care is our #1 priority and it shows with over 1,000+ 5 star ratings from verified customers.'
    	},{
    		imgURL:imgBaseURL+'/return-box.png',
    		title:'Hassle-Free Returns',
    		info:'Change your mind? Hassle-free returns within 30 days on unopened projectors.'
    	}];
    	const singleItemHtml = ({imgURL,title,info}, index) => `<div class="icon-item item-${index + 1}"><img class="icon-img" src="${imgURL}" alt="${title}"><div class="icon-info-wrap"><h3 class="icon-title">${title}</h3><h4 class="icon-info">${info}</h4></div></div>`;
    	const iconSection = `<div class="icon-wrapper">${iconData.map((data, i) => singleItemHtml(data, i)).join('\n')}</div>`;
    	let layoutClass, layoutSelector = '';
		if(convert.$('#lp__hero').length > 0){
			layoutClass = 'new-layout';
			layoutSelector = '#lp__desc';
		}else{
			layoutClass = 'old-layout';
			layoutSelector = '.prod-botIn-wrap';
		}
		convert.$('body').addClass(layoutClass);
		convert.$(iconSection).insertBefore(layoutSelector);
    }
    if (!convert.$('body').hasClass('ps-test-v1')) {
        convert.$('body').addClass('ps-test-v1');
        loadTest();
    }
});