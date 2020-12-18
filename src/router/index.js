import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Archive from '../views/Archive.vue'
import Category from '../views/Category.vue'
import CategoryPosts from '../views/CategoryPosts.vue'
import Tag from '../views/Tag.vue'
import About from '../views/About.vue'
import Post from '../views/Post.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
