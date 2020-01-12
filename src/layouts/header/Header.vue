<template>
    <header class="header">
        <HeaderTop/>
        <HeaderMiddle/>
        <HeaderBottom/>
    </header>
</template>

<script>

    import HeaderTop from './HeaderTop.vue'
    import HeaderMiddle from './HeaderMiddle.vue'
    import HeaderBottom from './HeaderBottom.vue'
    
export default {
  name: 'Header',
  components : {
      HeaderTop,
      HeaderMiddle,
      HeaderBottom    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
