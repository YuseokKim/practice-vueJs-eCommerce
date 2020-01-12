<template>
        <main class="main">
            <MainHomeSlider></MainHomeSlider>
            <MainInfoBoxes/>
            <MainHomeProduct/>
            <MainDescription/>
            <div class="mb-6"></div><!-- margin -->
        </main><!-- End .main -->
</template>

<script>

    import MainHomeSlider  from './MainHomeSlider.vue'
    import MainInfoBoxes  from './MainInfoBoxes.vue'
    import MainHomeProduct  from './MainHomeProduct.vue'
    import MainDescription  from './MainDescription.vue'
    
export default {
  name: 'Main',
  components : {
      MainHomeSlider,
      MainInfoBoxes,
      MainHomeProduct,
      MainDescription       
    },
/*  data: function(){
      return {
          loading:false,
          banners : []
      }
  },
  created(){
      //this.banners = todos;
      this.loading = true
      const baseURI = 'http://www.baekdoo.ga/api';
      
      this.$http.get(`${baseURI}/v1.0/banners`)
      .then((result) => {
        console.log(result.data.result.banners)
        this.banners = result.data.result.banners;
        this.loading = false
      })
      
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
