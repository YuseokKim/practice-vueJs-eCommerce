<template>
    <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav mb-1">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                </ol>
            </div><!-- End .container -->
        </nav>


        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="cart-table-container">
                        <table class="table table-cart">
                            <thead>
                                <tr>
                                    <th class="product-col">Product</th>
                                    <th class="price-col">Price</th>
                                    <th class="qty-col">Qty</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody v-for="(product, index) in products">
                                <tr class="product-row">
                                    <td class="product-col" rowspan="2">
                                        <figure class="product-image-container">
                                            <a href="/product" class="product-image">
                                                <img v-bind:src=product.img alt="product">
                                            </a>
                                        </figure>
                                        <h2 class="product-title">
                                            <a href="product.html">감자 10kg</a>
                                        </h2>
                                    </td>
                                    <td>{{product.price}}</td>
                                    <td>
                                        <input class="vertical-quantity form-control" type="text">
                                    </td>
                                    <td>{{product.subtotal}}</td>
                                </tr>
                                <tr class="product-action-row">
                                    <td colspan="4" class="clearfix">
                                        <div class="float-right">
                                            <a href="#" title="Edit product" class="btn-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                                            <a href="#" title="Remove product" class="btn-remove"><span class="sr-only">Remove</span></a>
                                        </div><!-- End .float-right -->
                                    </td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td colspan="4" class="clearfix">
                                        <div class="float-left">
                                            <a href="category.html" class="btn btn-outline-secondary">쇼핑 계속하기</a>
                                        </div><!-- End .float-left -->

                                        <div class="float-right">
                                            <a href="#" class="btn btn-outline-secondary btn-clear-cart">장바구니 모두 지우기</a>
                                        </div><!-- End .float-right -->
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div><!-- End .cart-table-container -->

                    <!--<div class="cart-discount">
                        <h4>Apply Discount Code</h4>
                        <form action="#">
                            <div class="input-group">
                                <input type="text" class="form-control form-control-sm" placeholder="Enter discount code"  required>
                                <div class="input-group-append">
                                    <button class="btn btn-sm btn-primary" type="submit">Apply Discount</button>
                                </div>
                            </div> End .input-group 
                        </form>
                    </div>--><!-- End .cart-discount -->
                </div><!-- End .col-lg-8 -->

                <div class="col-lg-4">
                    <div class="cart-summary">
                        <h3>Summary</h3>

                        <table class="table table-totals">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>$17.90</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>$0.00</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Order Total</td>
                                    <td>$17.90</td>
                                </tr>
                            </tfoot>
                        </table>

                        <div class="checkout-methods">
                            <a href="checkout-shipping.html" class="btn btn-block btn-sm btn-primary">Go to Checkout</a>
                            <a href="#" class="btn btn-link btn-block">Check Out with Multiple Addresses</a>
                        </div><!-- End .checkout-methods -->
                    </div><!-- End .cart-summary -->
                </div><!-- End .col-lg-4 -->
            </div><!-- End .row -->
        </div><!-- End .container -->

        <div class="mb-6"></div><!-- margin -->
    </main><!-- End .main -->
</template>

<script>
    var todos =  [
      {
        id:1,
        img: 'static/assets/images/products/product-4.jpg',
        rate:{width:'60%'},
        name:'햇감자',
        price:'2000',
        subtotal:'3000'
      },
      {
        id:2,
        img: 'static/assets/images/products/product-4.jpg',
        rate:{width:'40%'},
        name:'감귤',
        price:'2000',
        subtotal:'3000'
      },
      {
        id:3,
        img: 'static/assets/images/products/product-4.jpg',
        rate:{width:'20%'},
        name:'먹고싶은거',
        price:'2000',
        subtotal:'3000'
      },
      {
        id:4,
        img: 'static/assets/images/products/product-4.jpg',
        rate:{width:'10%'},
        name:'ㅇㅁㄹㄴㅇ',
        price:'12000',
        subtotal:'3000'
      }
    ];
    
export default {

    
  name : 'Cart',
  data() {
      return {
          products:[]
      }
    },
  computed : {
      hasResult: function(){
          return this.blogs.length > 0
      }
  },
  created(){
      this.products = todos;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
