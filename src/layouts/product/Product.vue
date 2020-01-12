<template>
<main class="main">
    <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">카테고리 </a></li>
                <li class="breadcrumb-item active" aria-current="page">상품상세 </li>
            </ol>
        </div><!-- End .container -->
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <div class="product-single-container product-single-default">
                    <div class="row">
                        <div class="col-lg-7 col-md-6 product-single-gallery">
                            <div class="product-slider-container product-item">
                                <div class="product-single-carousel owl-carousel owl-theme">
                                    <div class="product-item">
                                        <img class="product-single-image" v-bind:src=product.productImgList[1].imgUrl v-bind:data-zoom-image=product.productImgList[2].imgUrl />
                                    </div>
                                    <div class="product-item">
                                        <img class="product-single-image" v-bind:src=product.productImgList[0].imgUrl v-bind:data-zoom-image=product.productImgList[0].imgUrl />
                                    </div>
                                </div>
                                <!-- End .product-single-carousel -->
                                <span class="prod-full-screen">
                                    <i class="icon-plus"></i>
                                </span>
                            </div>
                            <div class="prod-thumbnail row owl-dots" id='carousel-custom-dots'>
                                <div class="col-3 owl-dot">
                                    <img v-bind:src=product.productImgList[1].imgUrl />
                                </div>
                                <div class="col-3 owl-dot">
                                    <img v-bind:src=product.productImgList[0].imgUrl />
                                </div>
                            </div>
                        </div><!-- End .col-lg-7 -->

                        <div class="col-lg-5 col-md-6">
                            <div class="product-single-details">
                                <h1 class="product-title">{{product.name}}</h1>

                                <div class="ratings-container">
                                    <div class="product-ratings">
                                        <span class="ratings" v-bind:style=product.rate></span><!-- End .ratings -->
                                    </div><!-- End .product-ratings -->

                                    <a href="#" class="rating-link">( 6 Reviews )</a>
                                </div><!-- End .product-container -->

                                <div class="price-box">
                                    <span v-if="product.isDiscount === 'Y'" class="old-price">{{product.discountedPrice}}</span>
                                    <span class="product-price">{{product.price}} 원</span>
                                </div><!-- End .price-box -->

                                <div class="product-desc">
                                    <p>{{product.description}}</p>
                                </div><!-- End .product-desc -->

                                <div class="product-action product-all-icons">
                                    <div class="product-single-qty">
                                        <input class="horizontal-quantity form-control" type="text">
                                    </div><!-- End .product-single-qty -->

                                    <a href="cart.html" class="paction add-cart" title="Add to Cart">
                                        <span>Add to Cart</span>
                                    </a>
                                </div><!-- End .product-action -->
                            </div><!-- End .product-single-details -->
                        </div><!-- End .col-lg-5 -->
                    </div><!-- End .row -->
                </div><!-- End .product-single-container -->

                <div class="product-single-tabs">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">상세설명 </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="product-tab-tags" data-toggle="tab" href="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">반품 규정 </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">리뷰 </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                            <div class="product-desc-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                <ul>
                                    <li><i class="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                                    <li><i class="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                                    <li><i class="icon-ok"></i>Inventory Management with Backordered items</li>
                                </ul>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div><!-- End .product-desc-content -->
                        </div><!-- End .tab-pane -->

                        <div class="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
                            <div class="product-tags-content">
                                <form action="#">
                                    <h4>환불규정</h4>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-sm" required>
                                        <input type="submit" class="btn btn-primary" value="Add Tags">
                                    </div><!-- End .form-group -->
                                </form>
                                <p class="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                            </div><!-- End .product-tags-content -->
                        </div><!-- End .tab-pane -->

                        <div class="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
                            <div class="product-reviews-content">
                                <div class="collateral-box">
                                    <ul>
                                        <li>Be the first to review this product</li>
                                    </ul>
                                </div><!-- End .collateral-box -->

                                <div class="add-product-review">
                                    <h3 class="text-uppercase heading-text-color font-weight-semibold">WRITE YOUR OWN REVIEW</h3>
                                    <p>How do you rate this product? *</p>

                                    <form action="#">
                                        <table class="ratings-table">
                                            <thead>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th>1 star</th>
                                                    <th>2 stars</th>
                                                    <th>3 stars</th>
                                                    <th>4 stars</th>
                                                    <th>5 stars</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Quality</td>
                                                    <td>
                                                        <input type="radio" name="ratings[1]" id="Quality_1" value="1" class="radio">
                                                    </td>
                                                    <td>
                                                        <input type="radio" name="ratings[1]" product-tab-reviewsid="Quality_2" value="2" class="radio">
                                                    </td>
                                                    <td>
                                                        <input type="radio" name="ratings[1]" id="Quality_3" value="3" class="radio">
                                                    </td>
                                                    <td>
                                                        <input type="radio" name="ratings[1]" id="Quality_4" value="4" class="radio">
                                                    </td>
                                                    <td>
                                                        <input type="radio" name="ratings[1]" id="Quality_5" value="5" class="radio">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div class="form-group">
                                            <label>닉네임 <span class="required">*</span></label>
                                            <input type="text" class="form-control form-control-sm" required>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label>비밀번호 <span class="required">*</span></label>
                                            <input type="text" class="form-control form-control-sm" required>
                                        </div><!-- End .form-group -->
                                        <div class="form-group mb-2">
                                            <label>내용 <span class="required">*</span></label>
                                            <textarea cols="5" rows="6" class="form-control form-control-sm"></textarea>
                                        </div><!-- End .form-group -->

                                        <input type="submit" class="btn btn-primary" value="Submit Review">
                                    </form>
                                </div><!-- End .add-product-review -->
                            </div><!-- End .product-reviews-content -->
                        </div><!-- End .tab-pane -->
                    </div><!-- End .tab-content -->
                </div><!-- End .product-single-tabs -->
            </div><!-- End .col-lg-9 -->

            <div class="sidebar-overlay"></div>
            <div class="sidebar-toggle"><i class="icon-sliders"></i></div>
            <aside class="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                <div class="sidebar-wrapper">
                    <div class="widget widget-brand">
                        <a href="#">
                            <img src="static/assets/images/product-brand.png" alt="brand name">
                        </a>
                    </div><!-- End .widget -->

                    <div class="widget widget-info">
                        <ul>
                            <li>
                                <i class="icon-shipping"></i>
                                <h4>FREE<br>SHIPPING</h4>
                            </li>
                            <li>
                                <i class="icon-us-dollar"></i>
                                <h4>100% MONEY<br>BACK GUARANTEE</h4>
                            </li>
                            <li>
                                <i class="icon-online-support"></i>
                                <h4>ONLINE<br>SUPPORT 24/7</h4>
                            </li>
                        </ul>
                    </div><!-- End .widget -->

                </div>
            </aside><!-- End .col-md-3 -->
        </div><!-- End .row -->
    </div><!-- End .container -->
</main><!-- End .main -->
</template>

<script>
    import Vue from 'vue'
    
export default {
  name: 'Product',
  props:{
      categoryId:String,
      id:String
  },
  data(){
      return{
          product:[]
      }
  },
  mounted(){
      var self = this;
      self.isLoading = true;
      const baseURI = 'http://www.baekdoo.ga/api';
      self.$http.get(`${baseURI}/v1.0/categories/`+self.categoryId+'/products/' +self.id)
      .then((result) => {
        self.isLoading = false;
        console.log(result.data);
        self.product = result.data.result;
        
        Vue.nextTick(function(){

        $('.owl-carousel').owlCarousel({
        margin: 0,
        loop: true,
        items:1,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 15000,
        animateOut: 'fadeOut',
        navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
        dotsContainer: '#carousel-custom-dots',
        onInitialized: function () {
          var $source = this.$element;

          if ($.fn.elevateZoom) {
            $source.find('img').each(function () {
              var $this = $(this),
                zoomConfig = {
                  responsive: true,
                  zoomWindowFadeIn: 350,
                  zoomWindowFadeOut: 200,
                  borderSize: 0,
                  zoomContainer: $this.parent(),
                  zoomType: 'inner',
                  cursor: 'grab'
                };
              $this.elevateZoom(zoomConfig);
            });
          }
        }
       });
      $('#carousel-custom-dots .owl-dot').click(function () {
        $('.product-single-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
      });
        }.bind(self));
      }).catch((ex) => {
      console.log(ex);
  });
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
