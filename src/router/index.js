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
<<<<<<< HEAD
    path: '/room-connection',
=======
    path: '/multi-errors',
    name: 'MultiErrors',
    component: MultiErrors,
  },
  {
    path: '/RoomConnection',
>>>>>>> 15555128b806c7fdd2c86f9e9fd8bb98cc14fa22
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
