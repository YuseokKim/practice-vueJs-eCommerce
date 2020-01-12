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

                            <form action="#">
                                <div class="form-group required-field">
                                    <label>First Name </label>
                                    <input type="text" class="form-control" required>
                                </div><!-- End .form-group -->

                                <div class="form-group required-field">
                                    <label>Last Name </label>
                                    <input type="text" class="form-control" required>
                                </div><!-- End .form-group -->

                                <div class="form-group">
                                    <label>Company </label>
                                    <input type="text" class="form-control">
                                </div><!-- End .form-group -->

                                <div class="form-group required-field">
                                    <label>Street Address </label>
                                    <input type="text" class="form-control" required>
                                    <input type="text" class="form-control" required>
                                </div><!-- End .form-group -->

                                <div class="form-group required-field">
                                    <label>City  </label>
                                    <input type="text" class="form-control" required>
                                </div><!-- End .form-group -->

                                <div class="form-group">
                                    <label>State/Province</label>
                                    <div class="select-custom">
                                        <select class="form-control">
                                            <option value="CA">California</option>
                                            <option value="TX">Texas</option>
                                        </select>
                                    </div><!-- End .select-custom -->
                                </div><!-- End .form-group -->

                                <div class="form-group required-field">
                                    <label>Zip/Postal Code </label>
                                    <input type="text" class="form-control" required>
                                </div><!-- End .form-group -->

                                <div class="form-group">
                                    <label>Country</label>
                                    <div class="select-custom">
                                        <select class="form-control">
                                            <option value="USA">United States</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="China">China</option>
                                            <option value="Germany">Germany</option>
                                        </select>
                                    </div><!-- End .select-custom -->
                                </div><!-- End .form-group -->

                                <div class="form-group required-field">
                                    <label>Phone Number </label>
                                    <div class="form-control-tooltip">
                                        <input type="tel" class="form-control" required>
                                        <span class="input-tooltip" data-toggle="tooltip" title="For delivery questions." data-placement="right"><i class="icon-question-circle"></i></span>
                                    </div><!-- End .form-control-tooltip -->
                                </div><!-- End .form-group -->
                            </form>
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
  name : 'ShippingForNonMember',
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
          return this.products.length > 0
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
