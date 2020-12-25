import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "@/auth/authGuard";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/post/:id',
      name: 'postSingle',
      component: () => import('../views/PostSingle.vue'),
      beforeEnter: authGuard
    },

    //auth
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login')
    },
    //create
    {
      path: '/create/post',
      name: 'post_create',
      component: () => import('../views/create/Post_create')
    },

  ]
})