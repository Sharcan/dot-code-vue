import Vue from 'vue'
import App from './App.vue'
import {io} from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'
import router from './router'
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

// Connexion de socket au serveur NestJS
const socket = io('http://localhost:3000');
// On ajoute SocketIO à Vue pour accéder aux variables globales ($socket)
Vue.use(VueSocketIOExt, socket);

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
