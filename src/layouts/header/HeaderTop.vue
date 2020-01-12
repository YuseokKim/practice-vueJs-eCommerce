<template>
  <div class="header-top">
     <div class="container">
         <div class="header-right">
             <p class="welcome-msg">Default welcome msg! </p>

             <div class="header-dropdown dropdown-expanded">
                 <a href="#">Links</a>
                 <div class="header-menu">
                     <ul>
                         <li><a href="my-account.html">MY ACCOUNT </a></li>
                         <!--<li><a href="#">MY WISHLIST </a></li>-->
                         <li><a href="blog.html">BLOG</a></li>
                         <li><a href="contact.html">Contact</a></li>
                         <li><a href="#" class="login-link">LOG IN</a></li>
                     </ul>
                 </div><!-- End .header-menu -->
             </div><!-- End .header-dropown -->
         </div><!-- End .header-right -->
     </div><!-- End .container -->
  </div><!-- End .header-top -->
</template>

<script>
export default {
  name: 'HeaderTop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
