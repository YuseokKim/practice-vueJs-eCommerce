<template>
 <div class="home-slider-container" >
    <div class="loader" v-if="isLoading===true"></div>
    <div class="home-slider owl-carousel" v-else>
        <div class="home-slide"  v-for="banner in banners" >
            <div class="slide-bg owl-lazy"  v-bind:data-src=banner.imgUrl></div><!-- End .slide-bg -->
            <div class="home-slide-content container">
                <div class="row">
                    <div class="col-md-6 offset-md-6 col-lg-5 offset-lg-7">
                        <h4>{{banner.topText}}</h4>
                        <h1>{{banner.middleText}}</h1>
                        <h3><strong>{{banner.bottomText}}</strong></h3>
                        <a href="category.html" class="btn btn-primary">바로 가기</a>
                    </div><!-- End .col-lg-5 -->
                </div><!-- End .row -->
            </div><!-- End .home-slide-content -->
        </div><!-- End .home-slide -->
     </div><!-- End .home-slider -->
 </div><!-- End .home-slider-container -->
</template>
<script>
    import Vue from 'vue'
    
var todos = [
      {
        topText: 1,
        middleText: 'Do the dishes',
        bottomText: 'only 20000 ',
        imgUrl:"https://s3.ap-northeast-2.amazonaws.com/baekdoo/test/1b848efc76a047a5970a04712ca51c46.jpg"
          
      },
      {
        topText: 2,
        middleText: 'Do the dishes',
        bottomText: '20000',
        imgUrl:'static/assets/images/slider/slide-1.jpg'
      }
    ];
   
    
export default {
  name: 'MainHomeSlider',
  data: function(){
      return {
          isLoading:true,
          banners: []
      }
  },
/*  computed: {
      hasResult: function(){
          console.log("this.banners.length : " +this.banners.length)
          console.log(this.banners)
          return this.banners.length > 0
      }
  },*/
  mounted(){
      //this.banners = todos;
      var self = this;
      self.isLoading = true;
      const baseURI = 'http://www.baekdoo.ga/api';
      self.$http.get(`${baseURI}/v1.0/banners`)
      .then((result) => {
        self.isLoading = false;
        self.banners = result.data.result.banners;
        Vue.nextTick(function(){
        var homeSlider = $('.home-slider');
        $('.owl-carousel').owlCarousel({
        margin: 0,
        loop: true,
        items:1,
        lazyLoad: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 15000,
        animateOut: 'fadeOut',
        navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">'],
        });
        homeSlider.on('loaded.owl.lazy', function (event) {
        $(event.element).closest('.home-slide').addClass('loaded');
      });}.bind(self));
         
      });      
  }
/* mounted(){
     $('.owl-carousel').trigger('refresh.owl.carousel');
 },
 updated(){
     $('.owl-carousel').trigger('refresh.owl.carousel');
 },*/
 /*components : {
     Slider
 },*/
 /* props:{
      banners:Array
  }*/

}
     
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
