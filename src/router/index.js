import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import MultiErrors from '../views/games/MultiErrors'
import RoomConnection from '../views/Room/RoomConnection'
import RoomPseudo from '../views/Room/RoomPseudo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/multi-errors',
    name: 'MultiErrors',
    component: MultiErrors,
  },
  {
    path: '/room-connection',
    name: 'RoomConnection',
    component: RoomConnection
  },
  {
    path: '/room-pseudo',
    name: 'RoomPseudo',
    component: RoomPseudo
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
  base: process.env.BASE_URL,
  routes
})

export default router
