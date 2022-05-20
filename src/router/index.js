import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import MultiErrors from '../views/games/MultiErrors'
import Connection from '../views/Room/Connection'
import Pseudo from '../views/Room/Pseudo'
import Team from '../views/Room/Team'
import Test from '../views/Test'
import Game from "../views/Room/Game"
import RoomWin from "../views/Room/RoomWin"
import RoomLose from "../views/Room/RoomLose"
import PrivateParty from '../views/Room/PrivateParty'
import PrivateCreation from '../views/privateparty/Creation'
import PrivateMode from '../views/privateparty/Mode'
import test from "../middlewares/test"
import Register from '../views/profil/Register.vue'
import Login from '../views/profil/Login.vue'

Vue.use(VueRouter)

/**
 * Route list
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      middlewares: [test]
    }
  },
  {
    path: '/register',
    name : 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/room-connection',
    name: 'room.connection',
    component: Connection
  },
  {
    path:'/private-party',
    component: PrivateParty,
    children : [
      {
        path: '',
        component: PrivateCreation
      },
      {
        path: 'mode',
        name:'gameMode',
        component: PrivateMode
      }
    ]
  },
  {
    path: '/room/:pin/',
    component: Game,
    children: [
      {
        path: 'pseudo',
        name: 'room.pseudo',
        component: Pseudo
      },
      {
        path: 'team',
        name: 'room.team',
        component: Team
      },
      {
        path: '',
        name: 'room.game',
        component: MultiErrors
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/room-win',
    name: 'RoomWin',
    component: RoomWin
  },
  {
    path: '/room-lose',
    name: 'RoomLose',
    component: RoomLose
  }
  
]

/**
 * Define router
 */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * Router event before navigation (middlewares)
 */
router.beforeEach((to, from, next) => {
  if(to.meta.middlewares && Array.isArray(to.meta.middlewares)) {
    const middlewares = to.meta.middlewares;
    const context = { from, next, router, to };
    const nextMiddleware = nextFactory(context, middlewares, 1);

    return middlewares[0]({ ...context, next: nextMiddleware });
  }

  return next();
})

/**
 * Launch all middlewares recursively
 * 
 * @param {*} context 
 * @param {*} middlewares 
 * @param int index 
 * @returns 
 */
function nextFactory(context, middlewares, index) {
  const middleware = middlewares[index];

  if (!middleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middlewares, index + 1);
    middleware({ ...context, next: nextMiddleware });
  }
}


export default router
