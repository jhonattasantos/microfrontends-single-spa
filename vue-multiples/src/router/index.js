import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    exact: true,
    path: '/',
    name: 'vue-multiples',
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: Home,
    children: [
      {
        exact: true,
        path: '/home',
        name: 'Home',
        component: Home,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: '/vue-multiples',
  routes
})

export default router
