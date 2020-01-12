<template>
    <div>
        <div id="app" class="page-wrapper">
            <Header/>
            <router-view/>
            <Footer/>
        </div>
        <Mobile/>
        <Popup/>
        <a id="scroll-top" href="#top" title="Top" role="button"><i class="icon-angle-up"></i></a>
    </div>
</template>

<script>
    import Header from './layouts/header/Header.vue'
    import Footer from './layouts/footer/Footer.vue'
    import Mobile from './layouts/mobile/Mobile.vue'
    import Popup from './layouts/popup/Popup.vue'
    
export default {
  name: 'App',
  created(){
      //console.log("App.vue is created")
  },
  components : {
      Header,
      Footer,
      Mobile,
      Popup
  }
}
</script>
<style>

</style>
