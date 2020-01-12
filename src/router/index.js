import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/layouts/main/Main'
import Product from '@/layouts/product/Product'
import Blog from '@/layouts/blog/Blog'
import Category from '@/layouts/category/Category'
import Cart from '@/layouts/cart/Cart'
import ShippingForMember from '@/layouts/checkout/ShippingForMember'
import ShippingForNonMember from '@/layouts/checkout/ShippingForNonMember'
import Review from '@/layouts/checkout/Review'
import About from '@/layouts/about/about'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/categories/:categoryId/products/:id',
      name: 'Product',
      component: Product,
      props:true
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/categories/:id',
      name: 'Category',
      component: Category,
      props:true
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Shipping-for-member',
      name: 'ShippingForMember',
      component: ShippingForMember
    },
    {
      path: '/Shipping-for-non-member',
      name: 'ShippingForNonMember',
      component: ShippingForNonMember
    },
    {
      path: '/checkout-review',
      name: 'Review',
      component: Review
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
