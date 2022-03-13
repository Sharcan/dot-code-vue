import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import MultiErrors from '../views/games/MultiErrors'
import RoomConnection from '../views/Room/RoomConnection'
import RoomPseudo from '../views/Room/RoomPseudo'
import RoomTeam from '../views/Room/RoomTeam'
import Test from '../views/Test'
import Game from "../views/Room/Game"
import RoomWin from "../views/Room/RoomWin"
import RoomLose from "../views/Room/RoomLose"
import test from "../middlewares/test"
import Register from '../views/profil/Register.vue'

Vue.use(VueRouter)

/**
 * Route list
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      middlewares: [test]
    }
  },
  {
    path: '/register',
    name : 'Register',
    component: Register
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
