<template>
    <div class="header-middle">
        <div class="container">
            <div class="header-left">
                <button class="mobile-menu-toggler" type="button">
                    <i class="icon-menu"></i>
                </button>
                <HeaderMiddleSearch/>
            </div><!-- End .header-left -->

            <div class="header-center">
                <a href="/" class="logo">
                    <img src="static/assets/images/logo.png" alt="Porto Logo">
                </a>
            </div><!-- End .headeer-center -->

            <div class="header-right">
                <div class="header-contact">
                    <span>Call us now</span>
                    <a href="tel:#"><strong>+123 5678 890</strong></a>
                </div><!-- End .header-contact -->
                <HeaderMiddleCart/>
            </div><!-- End .header-right -->
        </div><!-- End .container -->
    </div><!-- End .header-middle -->
</template>

<script>

import  HeaderMiddleSearch from './HeaderMiddleSearch.vue'
import  HeaderMiddleCart from './HeaderMiddleCart.vue'
    
export default {
  name: 'HeaderMiddle',
  components : {
        HeaderMiddleSearch,
        HeaderMiddleCart
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
