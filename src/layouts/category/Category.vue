<template>
    <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav mb-0">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item"><a href="#">Men</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Accessories</li>
                </ol>
            </div><!-- End .container -->
        </nav>

        <div class="container">
            <Banner/>
            <FilterTool/>

            <div class="row products-body">
                <div class="col-lg-9 main-content">
                    <div class="row row-sm">
                       <Product
                            v-for="product in products"
                            :product="product"
                            :key="product.id"></Product>
                    </div><!-- End .row -->
                    <nav class="toolbox toolbox-pagination">
                            <BPagination
                              v-model="currentPage"
                              :total-rows="rows"
                              :per-page="perPage"
                              size="lg"></BPagination>
                    </nav>
                </div><!-- End .col-lg-9 -->
                
                <div class="sidebar-overlay"></div>
                <SideBar/>
            </div><!-- End .row -->
        </div><!-- End .container -->

        <div class="mb-5"></div><!-- margin -->
    </main><!-- End .main -->
</template>

<script>
    import Banner from './Banner.vue'
    import FilterTool from './FilterTool.vue'
    import SideBar from './SideBar.vue'
    import Product from './Product.vue'
    //import Pagination from './Pagination.vue'

    import {BPagination} from 'bootstrap-vue'

/*const items= [
      {
        id:1,
        img: 'static/assets/images/products/product-4.jpg',
        rate:{width:'60%'},
        name:'햇감자',
        price:'2000'   
      },
      {
        id:2,
        img: 'static/assets/images/products/product-4.jpg',
        rate:{width:'40%'},
        name:'감귤',
        price:'2000'   
      },
      {
        id:3,
        img: 'static/assets/images/products/product-4.jpg',
        rate:{width:'20%'},
        name:'먹고싶은거',
        price:'2000'   
      },
      {
        id:4,
        img: 'static/assets/images/products/product-4.jpg',
        rate:{width:'10%'},
        name:'ㅇㅁㄹㄴㅇ',
        price:'12000'   
      }
        ];*/
    
export default {
  name: 'Category',
  components : {
      Banner,
      FilterTool,
      SideBar,
      Product,
      BPagination
  },
  props:{
      id:String
  },
  data() {
      return {
        perPage: 4,
        currentPage: 1,
        rows:1,
        products:[]
      }
    },
  mounted(){
      
      var self = this;
      const baseURI = 'http://www.baekdoo.ga/api';
      self.$http.get(`${baseURI}/v1.0/categories/`+self.id+'/products')
      .then((result) => {
        console.log(result.data);
        self.products = result.data.result.products;
      }).catch((ex) => {
      cosole.log(ex);
  });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
