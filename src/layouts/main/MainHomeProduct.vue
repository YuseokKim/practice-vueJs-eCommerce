<template>
    <div class="home-product-tabs">
        <div class="container">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="featured-products-tab" data-toggle="tab" href="#featured-products" role="tab" aria-controls="featured-products" aria-selected="true">Featured Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="latest-products-tab" data-toggle="tab" href="#latest-products" role="tab" aria-controls="latest-products" aria-selected="false">Latest Products</a>
                </li>
            </ul>
        </div><!-- End .container -->
        <div class="loader" v-if="isLoading===true"></div>
        <div class="tab-content" v-else>
            <div class="tab-pane fade show active" id="featured-products" role="tabpanel" aria-labelledby="featured-products-tab">
                <div class="container">
                    <div class="tab-products-carousel owl-carousel owl-theme">
                        <Product
                            v-for="product in featured_products"
                            :product="product"
                            :key="product.id"
                        ></Product>
                    </div><!-- End .products-carousel -->
                </div><!-- End .container -->
            </div><!-- End .tab-pane -->
            <div class="tab-pane fade" id="latest-products" role="tabpanel" aria-labelledby="latest-products-tab">
                <div class="container">
                    <div class="tab-products-carousel owl-carousel owl-theme">
                        <Product
                            v-for="product in latest_products"
                            :product="product"
                            :key="product.id"
                        ></Product>
                    </div>
                </div>
            </div>
        </div><!-- End .tab-content -->
    </div><!-- End .home-product-tabs -->
</template>

<script>
    import Product from './Product.vue'
    import Vue from 'vue'

    
    
export default {
  name: 'MainHomeProduct',
  components : {
      Product
  },
  data: function(){
      return{
          isLoading:true,
          featured_products: [],
          latest_products:[]
      }
  },
  method: {
      installOwlCarousel: function(){
          
    }
  },
  mounted(){
      var self = this;
      self.isLoading = true;
      const baseURI = 'http://www.baekdoo.ga/api';
      this.$http.get(`${baseURI}/v1.0/categories/3/products`)
      .then((result) => {
        self.isLoading = false;
        self.featured_products = result.data.result.products;
        Vue.nextTick(function(){
        $('.owl-carousel').owlCarousel({
             items:5,
              loop: true,
              autoplay: true
        });
          }.bind(self));
        }).catch((err)=>{
                if(err) console.log(err);
        }); 
  }
    
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
