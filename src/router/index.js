import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Calls from '@/views/Calls.vue'
import Profile from '@/views/Profile.vue'
import ifAuthenticated from './guards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Calls,
    meta: { requiresAuth: true },
    beforeEnter: ifAuthenticated
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false },
    props: true
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresAuth: false },
    props: true
  },
  {
    path: '/calls',
    name: 'calls',
    component: Calls,
    meta: { requiresAuth: true },
    beforeEnter: ifAuthenticated
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true },
    beforeEnter: ifAuthenticated
  },
  {
    path: '/tags',
    name: 'tags',
    component: Profile,
    meta: { requiresAuth: true },
    beforeEnter: ifAuthenticated
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
