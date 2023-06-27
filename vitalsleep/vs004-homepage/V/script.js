const vitalSleepStickyAddToCart = {
    init: function () {
      this.mainCss();
      this.mainJs();
      console.log(this);
    },
    mainCss: function () {
      const styles = document.createElement("style");
      styles.setAttribute("type", "text/css");
      document.head.appendChild(styles).textContent = "";
    },
    addScrollFeature: function () {
      $.fn.isInViewport = function () {
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();
  
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
      };
      
      const enableScroll = function () {
        if (screen.width < 768) {
          let elementTop = $('.hero_btn_block [href="/products/vitalsleep-snoring-mouthpiece"]').offset().top;
          let elementBottom = elementTop + $('.hero_btn_block [href="/products/vitalsleep-snoring-mouthpiece"]').outerHeight();
          let viewportTop = $(window).scrollTop();
          if ($('.hero_btn_block [href="/products/vitalsleep-snoring-mouthpiece"]').isInViewport()) {
            $(".vss-sticky").addClass("vss-hide");
            $("#fc_frame").removeClass("vss-hide");
            $(".vss-size-options").addClass("vss-hide");
          } else if (viewportTop > elementBottom) {
            $(".vss-sticky").removeClass("vss-hide");
            $("#fc_frame").addClass("vss-hide");
          }
        } else {
          if ($('.hero_btn_block [href="/products/vitalsleep-snoring-mouthpiece"]').isInViewport()) {
            $(".vss-sticky").addClass("vss-hide");
            $("#fc_frame").removeClass("vss-hide");
            $(".vss-size-options").addClass("vss-hide");
          } else {
            $(".vss-sticky").removeClass("vss-hide");
            $("#fc_frame").addClass("vss-hide");
          }
        }
      };
      $(window).scroll(function () {
        enableScroll();
      });
      enableScroll();
    },

    mainJs: function () {
      const $ = window.jQuery;
      if ($("body").hasClass("vss-body")) {
        return;
      }
      $("body").addClass("vss-body");
      const chevronArrow = `
      <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 407.437 407.437" xml:space="preserve">
        <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
      </svg>`;
      const currentlySelectedSize = $(".vairant-list li.active").text().trim();
      const productTitle = $(".product-title").text().trim();
      const sticky = $(`
      <div class="vss-sticky vss-hide">
    <div class="vss-product-info">
      <img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/products/mouthguardforsnoring_grande.jpg?v=1682801612" alt="product info" class="vss-product-image" />
      <p class="vss-product-name">VitalSleep Anti-Snoring Mouthpiece</p>
    </div>
    <div class="vss-product-cta">
      <div class="vss-product-size-options">
        <span class="vss-size-label">Select Size</span>
        <div class="vss-size-options-container">  
          <div class="vss-size-selected-container">
            <span class="vss-size-selected-option">${currentlySelectedSize}</span>
            ${chevronArrow}
          </div>
          <ul class="vss-size-options vss-hide">
            <li class="vss-size-option vss-men-size">Men's Size</li>
            <li class="vss-size-option vss-women-size">Women's Size</li>
          </ul>
        </div>
      </div>
      <div class="vss-add-to-cart-cta">
      <form method="post" action="/cart/add" id="product_form_1443121135685" accept-charset="UTF-8" class="shopify-product-form" enctype="multipart/form-data" data-productid="1443121135685"><input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓">
<div class="inline-text review-faq-links text-left desktop-hide" bis_skin_checked="1">
									<div id="shopify-block-d83f28e5-0d06-4926-af40-5007d754a753" class="shopify-block shopify-app-block" bis_skin_checked="1">




    <div data-oke-reviews-product-listing-rating="" bis_skin_checked="1">
        <div data-oke-reviews-version="2.16.8" class="okeReviews okeReviews--theme" bis_skin_checked="1">
<div class="okeReviews-reviewsSummary js-okeReviews-reviewsSummary is-okeReviews-clickable" data-oke-ga-click-action="Star Rating Summary Click" data-oke-ga-click-label="VitalSleep Anti-Snoring Mouthpiece" bis_skin_checked="1" tabindex="0" role="button">
<div class="okeReviews-reviewsSummary-starRating" bis_skin_checked="1">
<span class="okeReviews-starRating okeReviews-starRating--small">
<span class="okeReviews-a11yText">Rated 4.6 out of 5</span>
<span class="okeReviews-starRating-indicator" role="presentation">
<span class="okeReviews-starRating-indicator-layer"></span>
<span class="okeReviews-starRating-indicator-layer okeReviews-starRating-indicator-layer--foreground" style="width: 92%"></span>
</span>
</span>
</div>
<div class="okeReviews-reviewsSummary-ratingCount" bis_skin_checked="1">
<span aria-hidden="true">854 Reviews</span>
<span class="okeReviews-a11yText">Based on 854 reviews</span>
</div>
<span class="okeReviews-a11yText">Click to go to reviews</span></div>
</div>

    </div>



</div>
								</div>
                                

								

								
									<div class="checkbox" bis_skin_checked="1">
										<h5 class="size-text pb-3" data-uw-rm-heading="level" role="heading" aria-level="3">Select Size
											
												<!-- If Product tags contain Show_Size_Chart  -->


<div class="size-chart-holder" bis_skin_checked="1">
  <a href="#" id="myBtn" class="size-chart-link-custom" data-uw-rm-brl="false">
    <img decoding="async" loading="lazy" src="//cdn.shopify.com/s/files/1/0024/6346/5541/t/367/assets/ruler.png?v=1134160895826158811682459833" role="presentation" alt="" data-uw-rm-ima="un">
    <span>Size Chart</span>
  </a>
</div>


<!--SizeChart Modal -->
<div id="myModal" class="modal-custom" bis_skin_checked="1">
  <div class="modal-wrap" bis_skin_checked="1">
    <div class="modal-body" bis_skin_checked="1">
      <div class="modal-content-custom" bis_skin_checked="1">
        <span class="close">×</span>
        <img decoding="async" loading="lazy" src="//cdn.shopify.com/s/files/1/0024/6346/5541/t/367/assets/size-vitalsleeps.jpg?v=94346266701404063741682459842" class="desk" alt="Size Chart" data-uw-rm-ima-original="size chart">
        <img decoding="async" loading="lazy" src="//cdn.shopify.com/s/files/1/0024/6346/5541/t/367/assets/size-vitalsleeps.jpg?v=94346266701404063741682459842" class="mob" alt="Size Chart" data-uw-rm-ima-original="size chart">    
      </div>
    </div>
  </div>
</div>

<script type="javascript/apploading">
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var chartbtn = document.getElementById("chartBtn");    
var span = document.getElementsByClassName("close")[0];
if(btn){  
  btn.onclick = function() {
    modal.style.display = "block";
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
  }
}  
if(chartbtn){  
  chartbtn.onclick = function() {
    modal.style.display = "block";
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
  }  
}  
span.onclick = function() {
  modal.style.display = "none";
  document.getElementsByTagName('html')[0].style.overflow = "auto";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementsByTagName('html')[0].style.overflow = "auto";
  }
}
  modal.onclick = function(event){
    if(event.target.className == 'modal-body')
    {
       document.getElementsByTagName('html')[0].style.overflow = "hidden";
       modal.style.display = "none";
    }
    
  }
</script> 
 
											
											
                                  </h5>
										<ul class="vairant-list remembermeacc" data-id="1443121135685">
												
													<li data-handle="vitalsleep-snoring-mouthpiece" data-issize="1"> Select Size </li>
												

												
													<li class="active radio_checked">
															<label class="acccke">
                                                                    <div class="variant-icon" bis_skin_checked="1">
            															
                                                                          
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
        	<g>
        		<path d="M421.184,384.96l-81.728-20.437l-6.955-27.819c21.867-21.653,36.843-51.392,41.28-81.899
        			c12.117-3.413,21.504-13.803,23.125-26.837l5.333-42.667c1.131-9.003-1.643-18.112-7.616-24.939
        			c-3.499-4.011-7.915-7.04-12.8-8.896l1.963-40.171l7.979-8c12.011-12.779,21.973-34.688,1.152-66.475
        			C376.917,12.395,349.739,0,312.107,0c-14.848,0-49.024,0-80.853,21.376C140.373,23.275,128,65.493,128,106.667
        			c0,9.579,2.325,31.147,3.861,44.16c-5.483,1.728-10.453,4.928-14.336,9.344c-6.08,6.891-8.896,16.043-7.765,25.152l5.333,42.667
        			c1.749,13.909,12.309,24.853,25.664,27.456c4.416,29.333,18.624,58.112,39.232,79.403l-7.424,29.717l-81.728,20.437
        			C37.333,398.336,0,446.165,0,501.333C0,507.221,4.779,512,10.667,512h490.667c5.888,0,10.667-4.821,10.667-10.709
        			C512,446.165,474.667,398.336,421.184,384.96z"></path>
        	</g>
        </g>
      </svg>
    
            															
            														</div>
																	Men's Size
																	<input type="radio" name="option" id="Men's Size" value="40088126849093" checked="" aria-label="placeholder" data-uw-placeholder-aria-label="placeholder" data-uw-rm-form="nfx">
																	<span class="account_check"></span>
															</label>
													</li>
												
													<li>
															<label class="acccke">
                                                                    <div class="variant-icon" bis_skin_checked="1">
            															
                                                                          
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
          	<g>
          		<path d="M421.184,384.96l-81.728-20.437l-4.715-18.88c56.384-9.493,85.397-26.389,86.677-27.136
          			c3.029-1.771,4.907-4.992,5.163-8.491c0.235-3.499-1.323-6.933-4.075-9.131C422.123,300.587,384,269.099,384,160
          			c0-92.011-21.525-138.667-64-138.667h-6.293C298.389,6.528,286.891,0,256,0c-40.085,0-128,40.299-128,160
          			c0,109.099-38.123,140.587-38.4,140.8c-2.837,2.133-4.437,5.525-4.267,9.067c0.192,3.563,2.112,6.763,5.163,8.597
          			c1.28,0.768,30.016,17.749,86.741,27.221l-4.715,18.837L90.795,384.96C37.333,398.336,0,446.165,0,501.333
          			C0,507.221,4.779,512,10.667,512h490.667c5.888,0,10.667-4.821,10.667-10.709C512,446.165,474.667,398.336,421.184,384.96z"></path>
          	</g>
          </g>
      </svg>

            															
            														</div>
																	Women's Size
																	<input type="radio" name="option" id="Women's Size" value="40088126881861" aria-label="placeholder" data-uw-placeholder-aria-label="placeholder" data-uw-rm-form="nfx">
																	<span class="account_check"></span>
															</label>
													</li>
												
										</ul>
									</div>

								
<div class="product__price" bis_skin_checked="1">
										


<dl class="price price--on-sale" data-price="">

    

    <div class="price__sale" bis_skin_checked="1">
        <dd>

            

            <span class="margin-right-5 price-item price-item--sale">
                <span class="money-top dollar-sign"> $</span>
                <span class="main-price"><span class="money">69.95 </span></span>
               <span class="currency">USD</span>
            </span>

            <span class="margin-right-5 price-item price-item--regular" data-regular-price="">
                
                
                <span class="money">$99.95 </span>
                
                
            </span>

              
              
              
              <span class="save-percentage">Save 
              30% 
              </span>
            
            


            

            
        </dd>
    </div>


    <div style="clear: both;" bis_skin_checked="1"></div>

</dl>

<style>
    .ysa-fc-link {
        text-decoration: underline;
        color: #112f8f !important;
        border: 0;
    }

    .ysa-fc-link,
    .ysa-fc-plain {
        font-size: 1em;
        display: inline-block;
        background: 0 0;
        border-radius: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }

    .price__sale {
        padding-bottom: 15px;
    }
</style>

								</div><div id="shopify-section-is--winning-free-shipping" class="shopify-section" bis_skin_checked="1">
										<div class="wordwide_wrap" bis_skin_checked="1">
												<p class="cm_txt">Free Worldwide Shipping</p>
										</div>
								</div><button type="button" class="add-me-to-cart add-to-cart-button mobile-hide orange">
										Add to Cart
								</button>

								<button type="button" class="add-me-to-cart add-to-cart-button desktop-hide orange">
										Add to Cart
								</button><a data-fancybox="" data-src="#risk-guarantee" href="javascript:;" class="risk-guarantee" data-uw-rm-brl="exc"><small><font color="black">100% No-Risk Money Back Guarantee</font></small></a>
<div style="display: none;" id="risk-guarantee" bis_skin_checked="1">
	<p>Try your anti-snoring breakthrough for 60 days risk-free. We’ll pay the shipping cost and ship your order the same day when ordered by 1 pm eastern time.</p>
	<p>If you don’t love it, we’ll refund 100% of your money. You don't even have to return the used device.</p>
</div>
<div class="mobile-only" bis_skin_checked="1">
                                  <p>"I love your product. It has saved my marriage and increased my cognitive abilities.  It truly has improved my life." - Alan Aronow</p>
                                </div>
                            
</form>
      </div>
    </div>
  </div>
      `);
    //   const clonedCta = $(".add-me-to-cart.mobile-hide").clone();
      clonedCta.removeClass("mobile-hide");
      sticky.find(".vss-add-to-cart-cta").append(clonedCta);
      $("body").append(sticky);
      $(document).on("click", ".vss-add-to-cart-cta button", function () {
        $(".add-me-to-cart").first().click();
      });
  
      $(document).on("click", ".vss-size-selected-container", function (e) {
        e.stopPropagation();
        if ($(".vss-size-options").hasClass("vss-hide")) {
          $(".vss-size-options").removeClass("vss-hide");
        } else {
          $(".vss-size-options").addClass("vss-hide");
        }
      });
  
      $(document).on("click", ".vss-size-options li", function (e) {
        const text = $(this).text();
        $(`.vairant-list li:contains(${text}) input`).click();
        $(".vss-size-selected-option").text(text);
      });
      $(document).on("click", '.vairant-list li input', function () {
        const newSelection = $(this).closest("label").text();
        $(".vss-size-selected-option").text(newSelection);});
      $(document.body).click(function (e) {
        $(".vss-size-options").addClass("vss-hide");
      });
  
      vitalSleepStickyAddToCart.addScrollFeature();
    },
  };
  (function pollForVitalSleepStickyAddToCart() {
    if (
      window.jQuery !== undefined &&
      document.querySelectorAll(".product-main-content img") &&
      document.querySelector(".add-me-to-cart")
    ) {
      vitalSleepStickyAddToCart.init();
      console.log("Vital Sleep Sticky Add To Cart");
    } else {
      setTimeout(pollForVitalSleepStickyAddToCart, 25);
    }
  })();