import Vue from 'vue'
import App from './App.vue'
import {io} from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'

Vue.config.productionTip = false

// Connexion de socket au serveur NestJS
const socket = io('http://localhost:3000');
// On ajoute SocketIO à Vue pour accéder aux variables globales ($socket)
Vue.use(VueSocketIOExt, socket);

new Vue({
  render: h => h(App),
}).$mount('#app')
