convert.$(document).ready(function() {
    if (!convert.$('body').hasClass('sonno-test')) {
        convert.$('body').addClass('sonno-test');
        loadTest();
    }

    function loadTest() {
        var width = window.innerWidth;
        convert.$('.lineItemContainerOuter').each(function(index, ele) {
            index++;
            convert.$(this).addClass('lineItem-' + index);
            convert.$('<div class="custom-wrap"></div>').insertAfter('.lineItem-' + index + ' .cart_content_info.middle-section .product_btm_detail_div .assembly_buttons');
            convert.$('.lineItem-' + index + ' .custom-wrap').append(convert.$('.lineItem-' + index + ' .five.columns.alpha .product-quantity-box'));
            convert.$('.lineItem-' + index + ' .custom-wrap').append(convert.$('.lineItem-' + index + ' .product_btm_detail_div > .Productcartprice'));
            convert.$('.lineItem-' + index + ' button.variant_modal').insertBefore('.lineItem-' + index + ' .custom-wrap .product-quantity-box .quantity-wrapper-c');
            var price = convert.$('.lineItem-' + index + ' .youSavedPrice').text().split('You saved ')[1];
            convert.$('<div class="price-wrapper">You saved <span class="save-price">' + price + '</span></div>').insertAfter('.lineItem-' + index + ' .youSavedPrice');
            convert.$('.lineItem-' + index + ' #mattfont .diffcolor').html('<br class="desk-only"> Save Upto £359.99');
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
            convert.$('.insinstall_ment_div:eq(0)').insertAfter(".cart_savings");
        }
    }
});