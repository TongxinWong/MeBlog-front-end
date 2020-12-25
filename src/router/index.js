import Vue from 'vue'
import VueRouter from 'vue-router'
const api = require('../util/api.js')

import Home from '../views/Home.vue'
import Archive from '../views/Archive.vue'

import Category from '../views/Category.vue'
import CategoryPosts from '../views/CategoryPosts.vue'

import Tag from '../views/Tag.vue'
import TagPosts from '../views/TagPosts.vue'

import About from '../views/About.vue'
import Post from '../views/Post.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminHome from '../views/AdminHome.vue'
import AdminNewPost from '../views/AdminNewPost.vue'

import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/category/:id/posts',
    name: 'CategoryPosts',
    props: true,
    component: CategoryPosts
  },
  {
    path: '/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/tag/:id/posts',
    name: 'TagPosts',
    props: true,
    component: TagPosts
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/post/:id',
    name: 'Post',
    props: true,
    component: Post
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/',
    name: 'AdminHome',
    component: AdminHome
  },
  {
    path: '/admin/post/:id',
    name: 'AdminPost',
    props: true,
    component: AdminNewPost
  },
  {
    path: '/admin/newpost',
    name: 'AdminNewPost',
    component: AdminNewPost
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// api
router.beforeEach((to, from, next)=>{
  from
  let isAdmin = to.path.startsWith('/admin') || to.path.startsWith('admin')
  isAdmin = isAdmin && (to.path != '/admin/login')
  // 不是后台操作直接过
  if(!isAdmin) return next()
  // 是后台操作
  api.checkLoginState().then((res)=>{
    console.log(res)
    if(res.code == 200){
      return next()
    }
    else{
      return next('/admin/login')
    }
  })
})

export default router
