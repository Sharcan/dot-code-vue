import Vue from 'vue'
import App from './App.vue'
import {io} from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'
import router from './router'
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css' 
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import socketAuth from './middlewares/socket-auth'

Vue.config.productionTip = false

// Socket connexion to Nest
const socket = io(process.env.VUE_APP_API_URL);
Vue.use(VueSocketIOExt, socket);

document.title = 'Accueil | Space Code'

new Vue({
  sockets: {
    connect() {
      socketAuth(this.$socket)
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
