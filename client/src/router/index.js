
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
      meta:addMeta(Permission.CREATE_POST,Permission.CREATE_USER),
      component: () => import('../views/create/Post_create'),
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
  console.log(perms)
  for(const per of perms){
    perm=perm||per;
    console.log(perm)
  }
  return{
    permission: perm,
  }
}