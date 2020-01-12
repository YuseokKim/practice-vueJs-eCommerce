<template>
    <div class="col-6 col-md-4 col-xl-3">
        <div class="product">
            <figure class="product-image-container">
                <a v-bind:href="'/categories/'+product.categoryId+'/products/'+product.id" class="product-image">
                    <img v-bind:src=product.mainImgUrl alt="product">
                </a>
                <a href="ajax/product-quick-view.html" class="btn-quickview">Quick View</a>
            </figure>
            <div class="product-details">
                <div class="ratings-container">
                    <div class="product-ratings">
                        <span class="ratings" v-bind:style=product.avgGrade></span><!-- End .ratings -->
                    </div><!-- End .product-ratings -->
                </div><!-- End .product-container -->
                <h2 class="product-title">
                    <a href="product.html">{{product.name}}</a>
                </h2>
                <div class="price-box">
                    <span class="product-price">{{product.price}}원</span>
                </div><!-- End .price-box -->

                <div class="product-action">
                    <a href="#" class="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                    </a>

                    <a href="product.html" class="paction add-cart" title="Add to Cart">
                        <span>장바구니</span>
                    </a>

                    <a href="#" class="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                    </a>
                </div><!-- End .product-action -->
            </div><!-- End .product-details -->
        </div><!-- End .product -->
    </div><!-- End .col-xl-3 -->
</template>

<script>
    
export default {
  name: 'SideBar',
  props:{
      product:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
