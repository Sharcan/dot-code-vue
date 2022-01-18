import Vue from 'vue'
import App from './App.vue'
import {io} from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'
import router from './router'
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css' 
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

// Connexion de socket au serveur NestJS
const socket = io(process.env.VUE_APP_API_URL);
// On ajoute SocketIO à Vue pour accéder aux variables globales ($socket)
Vue.use(VueSocketIOExt, socket);

document.title = 'Accueil | Space Code'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
