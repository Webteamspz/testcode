convert.$(document).ready(function() {
    if (!convert.$('body').hasClass('sonno-test-v1')) {
        convert.$('body').addClass('sonno-test-v1');
        loadTest();
    }

    function loadTest() {
        var width = window.innerWidth;
        var tpBanner = '<div class="tp-banner"><img class="tp-img" src="https://iili.io/Hr0L8DG.png" alt="Trust Piolt"><div class="tp-contetnt"><h5 class="tp-rating">Rating score: <span>4.8/5.0</span></h5><a class="tp-review" href="javascript:void(0)">Based on 1996 Reviews</a></div></div>';
        var featureBanner = '<div class="warranty_inner"><span><img src="https://cdn.shopify.com/s/files/1/0539/7695/7109/files/truck.svg?v=1658820601"></span><h2>Fast and Free<br>Delivery</h2></div><hr class="warranty_separator"><div class="warranty_inner "><span><img src="https://cdn.shopify.com/s/files/1/0539/7695/7109/files/convert-3d-cube.svg?v=1658820601"></span><h2>60 Night<br>Risk Free Trial</h2></div><hr class="warranty_separator"><div class="warranty_inner"><span><img src="https://iili.io/Hr0LeHX.png"></span><h2>Best Price<br>Guaranteed</h2></div><div class="warranty_inner"><span><img src="https://iili.io/Hr0LkRn.png"></span><h2>0% Monthly<br>Interest</h2></div><hr class="warranty_separator"><div class="warranty_inner"><span><img src="https://cdn.shopify.com/s/files/1/0539/7695/7109/files/noun-warranty-199475_1.svg?v=1658820601"></span><h2>3 Year<br>Warranty</h2></div><hr class="warranty_separator"><div class="warranty_inner"><span><img src="https://iili.io/Hr0LvNs.png"></span><h2>Excellent<br>Customer Support</h2></div>';
        convert.$(tpBanner).insertAfter('.shopingbasketMain h1.shoppingbasket');
        convert.$('.warrantymain_div.desktop, .warrantymain_div.mobile').html(featureBanner);
        convert.$('.eight.columns .install_ment_para > img').attr('src','https://iili.io/Hr1Hjh7.png');
        var total = convert.$('#cart_total').text();
        convert.$('<div class="total-wrap"><span>Order total:</span><span>'+total+'</span></div>').insertBefore('.Basket-innerSection > .section .subtotal');
        convert.$('.Basket-innerSection > .section h1').html('<span>Basket Summary</span><img src="https://iili.io/Hr1JOwN.png" alt="Dropdown">');
        convert.$('.Basket-innerSection > .section').on('click',function(){
        	convert.$(this).toggleClass('active');
        });
        convert.$('.lineItemContainerOuter').each(function(index, ele) {
            index++;
            convert.$(this).addClass('lineItem-' + index);
            if (width > 768) {
                convert.$('<div class="custom-wrap"></div>').insertAfter('.lineItem-' + index + ' .cart_content_info.middle-section .product_btm_detail_div .assembly_buttons');
            } else {
                convert.$('<div class="custom-wrap"></div>').insertAfter('.lineItem-' + index + ' .cart_content_info.middle-section');
            }
            convert.$('.lineItem-' + index + ' .custom-wrap').append(convert.$('.lineItem-' + index + ' .five.columns.alpha .product-quantity-box'));
            convert.$('.lineItem-' + index + ' .custom-wrap').append(convert.$('.lineItem-' + index + ' .product_btm_detail_div > .Productcartprice'));
            convert.$('.lineItem-' + index + ' button.variant_modal').insertBefore('.lineItem-' + index + ' .custom-wrap .product-quantity-box .quantity-wrapper-c');
            var price = convert.$('.lineItem-' + index + ' .youSavedPrice').text().split('You saved ')[1];
            convert.$('<div class="price-wrapper">You saved <span class="save-price">' + price + '</span></div>').insertAfter('.lineItem-' + index + ' .youSavedPrice');
            var color = convert.$('.lineItem-' + index + ' .productDetailcartpage span:eq(0)').text();
            var size = convert.$('.lineItem-' + index + ' .productDetailcartpage span:eq(2)').text();
            var others1 = convert.$('.lineItem-' + index + ' .productDetailcartpage span:eq(4)').text();
            var others2 = convert.$('.lineItem-' + index + ' .productDetailcartpage span:eq(6)').text();
            var others3 = convert.$('.lineItem-' + index + ' .productDetailcartpage span:eq(8)').text();
            var others4 = convert.$('.lineItem-' + index + ' .productDetailcartpage span:eq(10)').text();
            var proText;
            if(others2 == ""){
            	proText = '<div class="product-info-wrapper"><p class="color">Colour : ' + color + '</p><p class="color">Size : ' + size + '</p><p class="others">' + others1 + '' + others2 + ' | ' + others3 + ' | ' + others4 + '</p></div>';
            }else if(others3 == ""){
            	proText = '<div class="product-info-wrapper"><p class="color">Colour : ' + color + '</p><p class="color">Size : ' + size + '</p><p class="others">' + others1 + ' | ' + others2 + '' + others3 + ' | ' + others4 + '</p></div>';
            }else if(others4 == ""){
            	proText = '<div class="product-info-wrapper"><p class="color">Colour : ' + color + '</p><p class="color">Size : ' + size + '</p><p class="others">' + others1 + ' | ' + others2 + ' | ' + others3 + '' + others4 + '</p></div>';
            }else{
            	proText = '<div class="product-info-wrapper"><p class="color">Colour : ' + color + '</p><p class="color">Size : ' + size + '</p><p class="others">' + others1 + ' | ' + others2 + ' | ' + others3 + ' | ' + others4 + '</p></div>';
            }
            convert.$(proText).insertAfter('.lineItem-' + index + ' .productDetailcartpage');
            convert.$('.lineItem-' + index + ' .cart_content_info.middle-section > h5').append('<img class="remove" src="https://iili.io/HSIsSR9.png" alt="remove icon">');
            convert.$('.lineItem-' + index + ' img.remove').on('click', function() {
                window.location.href = '/cart/change?line=' + index + '&amp;quantity=0';
            });
        });
        if (width < 481) {
            convert.$('.insinstall_ment_div:eq(0)').insertBefore(".custom_checkout.mobilebutton");
        } else {
            convert.$('.insinstall_ment_div:eq(0)').insertBefore(".custom_checkout.mobilebutton");
        }
        var checkTextIs = setInterval(function() {
        	if(convert.$('#effectiveAppsCDTContainer p > strong').length > 0){
        		clearInterval(checkTextIs);
        		convert.$('#effectiveAppsCDTContainer p > strong').text('Low in stock! ');
        	}
        }, 100);
    }
});