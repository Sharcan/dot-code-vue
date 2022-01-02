import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import MultiErrors from '../views/games/MultiErrors'
import RoomConnection from '../views/Room/RoomConnection'
import RoomPseudo from '../views/Room/RoomPseudo'
import RoomTeam from '../views/Room/RoomTeam'
import Test from '../views/Test'
import Game from "../views/Room/Game";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room-connection',
    name: 'RoomConnection',
    component: RoomConnection
  },
  {
    path: '/game/:pin',
    component: Game,
    children: [
      {
        path: 'room-pseudo',
        name: 'RoomPseudo',
        component: RoomPseudo
      },
      {
        path: 'room-team',
        name: 'RoomTeam',
        component: RoomTeam
      },
      {
        path: '',
        name: 'Game',
        component: MultiErrors
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
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
