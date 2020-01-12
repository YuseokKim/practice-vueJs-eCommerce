<template>
<div class="header-bottom sticky-header">
    <div class="container">
        <nav class="main-nav">
            <ul class="menu sf-arrows">
                <li class="active"><a href="/">Home</a></li>
                <li v-if="isLoading===true"><a href="#"></a></li>
                <li v-else v-for="category in categories">
                    <a v-bind:href="'/categories/'+category.id">{{category.name}}</a>
                </li>
                <li><a href="/blog">Blog</a></li>
                <li class="float-right"><a href="/about">About</a></li>
            </ul>
        </nav>
    </div><!-- End .header-bottom -->
</div><!-- End .header-bottom -->
</template>

<script>
export default {
  name: 'HeaderButtom',
  data: function(){
      return {
          isLoading:true,
          categories:[]
      }
  },
 mounted(){
     var self = this;
     self.isLoading = true;
     const baseURI = 'http://www.baekdoo.ga/api';
      self.$http.get(`${baseURI}/v1.0/categories`)
      .then((result) => {
        self.isLoading = false;
        self.categories = result.data.result.categories; 
        console.log(result.data);
      }) 
 }
}
</script>

<style scoped>

</style>
