<template>
    <div class="order-summary">
        <h3>Summary</h3>

        <h4>
            <a data-toggle="collapse" href="#order-cart-section" class="collapsed" role="button" aria-expanded="false" aria-controls="order-cart-section">2 products in Cart</a>
        </h4>

        <div class="collapse" id="order-cart-section">
            <table class="table table-mini-cart">
                <tbody>
                    <tr>
                        <td class="product-col">
                            <figure class="product-image-container">
                                <a href="product.html" class="product-image">
                                    <img src="assets/images/products/product-1.jpg" alt="product">
                                </a>
                            </figure>
                            <div>
                                <h2 class="product-title">
                                    <a href="product.html">Brown Watch</a>
                                </h2>

                                <span class="product-qty">Qty: 4</span>
                            </div>
                        </td>
                        <td class="price-col">$17.90</td>
                    </tr>

                    <tr>
                        <td class="product-col">
                            <figure class="product-image-container">
                                <a href="product.html" class="product-image">
                                    <img src="assets/images/products/product-2.jpg" alt="product">
                                </a>
                            </figure>
                            <div>
                                <h2 class="product-title">
                                    <a href="product.html">Black Watch</a>
                                </h2>

                                <span class="product-qty">Qty: 4</span>
                            </div>
                        </td>
                        <td class="price-col">$7.90</td>
                    </tr>
                </tbody>    
            </table>
        </div><!-- End #order-cart-section -->
    </div><!-- End .order-summary -->
</template>

<script>

    
export default {
  name : 'OrderSummary',
  data : function(){
      return {
          products : []
      }
    },
  computed : {
      hasResult: function(){
          return this.products.length > 0
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
