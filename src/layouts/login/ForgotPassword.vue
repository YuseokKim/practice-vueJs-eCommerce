<template>
    <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
            </div><!-- End .container -->
        </nav>
    
        <div class="container">
            <div class="row">
                <div class="col-lg-9" v-if="hasResult">
                    <article class="entry" v-for="(blog, index) in blogs">
                        <div class="entry-media">
                            <a href="/blogSingle">
                                <img v-bind:src="blog.img" alt="Post">
                            </a>
                        </div><!-- End .entry-media -->
                
                        <div class="entry-body">
                            <div class="entry-date">
                                <span class="day">{{blog.day}}</span>
                                <span class="month">{{blog.month}}</span>
                            </div><!-- End .entry-date -->
                
                            <h2 class="entry-title">
                                <a href="single.html">{{blog.title}}</a>
                            </h2>
                
                            <div class="entry-content">
                                <p>{{blog.summary}}</p>
                
                                <a href="single.html" class="read-more">더 보기<i class="icon-angle-double-right"></i></a>
                            </div><!-- End .entry-content -->
                
                            <div class="entry-meta">
                                <span><i class="icon-calendar"></i>{{blog.fullDate}}</span>
                                <span><i class="icon-user"></i>By <a href="#">Admin</a></span>
                            </div><!-- End .entry-meta -->
                        </div><!-- End .entry-body -->
                    </article><!-- End .entry -->
                    <nav class="toolbox toolbox-pagination">
                        <ul class="pagination">
                            <li class="page-item disabled">
                                <a class="page-link page-link-btn" href="#"><i class="icon-angle-left"></i></a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item"><span class="page-link">...</span></li>
                            <li class="page-item">
                                <a class="page-link page-link-btn" href="#"><i class="icon-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div><!-- End .col-lg-9 -->
    
                <aside class="sidebar col-lg-3">
                    <div class="sidebar-wrapper">
                        <div class="widget widget-search">
                            <form role="search" method="get" class="search-form" action="#">
                                <input type="search" class="form-control" placeholder="Search posts here..." name="s" required>
                                <button type="submit" class="search-submit" title="Search">
                                    <i class="icon-search"></i>
                                    <span class="sr-only">Search</span>
                                </button>
                            </form>
                        </div><!-- End .widget -->
    
                        <div class="widget widget-categories">
                            <h4 class="widget-title">Blog Categories</h4>
    
                            <ul class="list">
                                <li><a href="#">All about clothing</a></li>
                                <li><a href="#">Make-up &amp; beauty</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Fashion trends</a></li>
                                <li><a href="#">Haircuts &amp; hairstyles</a></li>
                            </ul>
                        </div><!-- End .widget -->
    
                        <div class="widget">
                            <h4 class="widget-title">Recent Posts</h4>
    
                            <ul class="simple-entry-list">
                                <li>
                                    <div class="entry-media">
                                        <a href="single.html">
                                            <img src="static/assets/images/blog/widget/post-1.jpg" alt="Post">
                                        </a>
                                    </div><!-- End .entry-media -->
                                    <div class="entry-info">
                                        <a href="single.html">Post Format - Video</a>
                                        <div class="entry-meta">
                                            April 08, 2018
                                        </div><!-- End .entry-meta -->
                                    </div><!-- End .entry-info -->
                                </li>
    
                                <li>
                                    <div class="entry-media">
                                        <a href="single.html">
                                            <img src="static/assets/images/blog/widget/post-2.jpg" alt="Post">
                                        </a>
                                    </div><!-- End .entry-media -->
                                    <div class="entry-info">
                                        <a href="single.html">Post Format - Image</a>
                                        <div class="entry-meta">
                                            March 23, 2016
                                        </div><!-- End .entry-meta -->
                                    </div><!-- End .entry-info -->
                                </li>
                            </ul>
                        </div><!-- End .widget -->
    
                        <div class="widget">
                            <h4 class="widget-title">Tagcloud</h4>
    
                            <div class="tagcloud">
                                <a href="#">Fashion</a>
                                <a href="#">Shoes</a>
                                <a href="#">Skirts</a>
                                <a href="#">Dresses</a>
                                <a href="#">Bags</a>
                            </div><!-- End .tagcloud -->
                        </div><!-- End .widget -->
    
                        <div class="widget">
                            <h4 class="widget-title">Archive</h4>
    
                            <ul class="list">
                                <li><a href="#">April 2018</a></li>
                                <li><a href="#">March 2018</a></li>
                                <li><a href="#">February 2018</a></li>
                            </ul>
                        </div><!-- End .widget -->
    
    
                        <div class="widget widget_compare">
                            <h4 class="widget-title">Compare Products</h4>
    
                            <p>You have no items to compare.</p>
                        </div><!-- End .widget -->
                    </div><!-- End .sidebar-wrapper -->
                </aside><!-- End .col-lg-3 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
    
        <div class="mb-6"></div><!-- margin -->
    </main><!-- End .main -->
</template>

<script>
var todos = [
      {
        id:1,
        day: '1',
        month: 'Jun',
        fullDate: 'June 29, 2018',
        title: '블로그 제목입니다.',
        summary: '블로그 내용 요약입니다.',
        img:'static/assets/images/blog/post-1.jpg'
      },
      {
        id:2,
        day: '1',
        month: 'Jun',
        fullDate: 'June 29, 2018',
        title: '블로그 제목입니다.',
        summary: '블로그 내용 요약입니다.',
        img:'static/assets/images/blog/post-1.jpg'
      },
      {
        id:3,
        day: '1',
        month: 'Jun',
        fullDate: 'June 29, 2018',
        title: '블로그 제목입니다.',
        summary: '블로그 내용 요약입니다.',
        img:'static/assets/images/blog/post-1.jpg'
      },
    ];
    
export default {
  name : 'Blog',
  data : function(){
      return {
          blogs : []
      }
    },
  computed : {
      hasResult: function(){
          return this.blogs.length > 0
      }
  },
  created(){
      this.blogs = todos;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
