import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UofT Index',
    component: Home
  },
  {
    path: '/maintenance',
    name: 'Maintenance | UofT Index',
    component: () => import('../views/Maintenance.vue')
  },
  {
    path: '/error',
    name: 'Error | UofT Index',
    component: () => import('../views/Error.vue')
  },
  {
    path: '/redirect',
    name: 'Redirect | UofT Index',
    component: () => import('../views/Redirect.vue')
  },
  {
    path: '*',
    name: 'UofT Index',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
