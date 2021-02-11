
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "@/auth/authGuard";
import Permission from "@/auth/permission";


export default createRouter({
  mode: "history",
  base: process.env.BASE_URL,
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/impr',
      name: 'imprint',
      component: () => import('../views/legal/Impr')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings'),
      beforeEnter: authGuard
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/post/review',
      name: 'postReview',
      component: () => import('../views/PostReview.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/post/:id',
      name: 'postSingle',
      component: () => import('../views/PostSingle.vue'),
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
      meta:addMeta(Permission.CREATE_POST),
      component: () => import('../views/create/Post_create'),
      beforeEnter: authGuard
    },
    {
      path: '/create/user',
      name: 'user_create',
      meta:addMeta(Permission.CREATE_USER),
      component: () => import('../views/create/User_create'),
      beforeEnter: authGuard
    },
    {
      path: '/create/author',
      name: 'author_create',
      meta:addMeta(Permission.CREATE_POST,Permission.CREATE_AUTHOR),
      component: () => import('../views/create/Author_create'),
      beforeEnter: authGuard
    },

  ]
})

function addMeta(...perms) {
  let perm =0;
  for(const per of perms){
    perm=perm||per;
  }
  return{
    permission: perm,
  }
}