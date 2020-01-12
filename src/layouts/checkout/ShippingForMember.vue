<template>
    <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                </ol>
            </div><!-- End .container -->
        </nav>

        <div class="container">
            <ul class="checkout-progress-bar">
                <li class="active">
                    <span>Shipping</span>
                </li>
                <li>
                    <span>Review &amp; Payments</span>
                </li>
            </ul>
            <div class="row">
                <div class="col-lg-8">
                    <ul class="checkout-steps">
                        <li>
                            <h2 class="step-title">Shipping Address</h2>

                            <div class="shipping-step-addresses">
                                <div class="shipping-address-box active">
                                    <address>
                                        Desmond Mason <br>
                                        123 Street Name, City Name <br>
                                        Los Angeles, California 03100 <br>
                                        United States <br>
                                        (123) 456-7890 <br>
                                    </address>

                                    <div class="address-box-action clearfix">
                                        <a href="#" class="btn btn-sm btn-link">
                                            Edit
                                        </a>

                                        <a href="#" class="btn btn-sm btn-outline-secondary float-right">
                                            Ship Here
                                        </a>
                                    </div><!-- End .address-box-action -->
                                </div><!-- End .shipping-address-box -->
                                <div class="shipping-address-box">
                                    <address>
                                        Susan Mason <br>
                                        123 Street Name, City Name <br>
                                        Los Angeles, California 03100 <br>
                                        United States <br>
                                        (123) 789-6150 <br>
                                    </address>

                                    <div class="address-box-action clearfix">
                                        <a href="#" class="btn btn-sm btn-link">
                                            Edit
                                        </a>

                                        <a href="#" class="btn btn-sm btn-outline-secondary float-right">
                                            Ship Here
                                        </a>
                                    </div><!-- End .address-box-action -->
                                </div><!-- End .shipping-address-box -->
                            </div><!-- End .shipping-step-addresses -->
                            <a href="#" class="btn btn-sm btn-outline-secondary btn-new-address" data-toggle="modal" data-target="#addressModal">+ New Address</a>
                        </li>
                    </ul>
                </div><!-- End .col-lg-8 -->

                <div class="col-lg-4">
                    <OrderSummary/>
                </div><!-- End .col-lg-4 -->
            </div><!-- End .row -->

            <div class="row">
                <div class="col-lg-8">
                    <div class="checkout-steps-action">
                        <a href="checkout-review.html" class="btn btn-primary float-right">NEXT</a>
                    </div><!-- End .checkout-steps-action -->
                </div><!-- End .col-lg-8 -->
            </div><!-- End .row -->
        </div><!-- End .container -->

        <div class="mb-6"></div><!-- margin -->
    </main><!-- End .main -->
</template>

<script>
import OrderSummary from './OrderSummary.vue'
    
export default {
  name : 'ShippingForMember',
  components : {
      OrderSummary
  },
  data : function(){
      return {
          products : []
      }
    },
  computed : {
      hasResult: function(){
          return this.blogs.length > 0
      }
  },
  created(){
      this.blogs = todos;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
