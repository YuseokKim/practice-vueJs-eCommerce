<template>
  <div>
    <MobileOverlay/>
    <MobileContainer/>
  </div>
</template>

<script>
    
    import MobileOverlay from './MobileOverlay.vue'
    import MobileContainer from './MobileContainer.vue'
    
export default {
  name: 'Mobile',
  components : {
      MobileOverlay,
      MobileContainer  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
