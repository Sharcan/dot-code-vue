<template>
  <div id="Pseudo">
    <h1 class="geminis text-center main-title">Entre ton Nom</h1>
    <div class="input">
      <input type="text" placeholder="Pseudo" class="pseudo-input" v-model="username"/>
    </div>
    
    <div>{{ error }}</div>
    <SpaceButton class="continue" text="Continuer" @click.native="sendPseudo" />
  </div>
</template>

<script>
import SpaceButton from '../SpaceButton.vue';
import router from "../../router";

export default {
  components: { SpaceButton },
  name: "Pseudo",
  data() {
    return {
      username: '',
      error: ''
    }
  },
  methods: {
    sendPseudo() {
      this.$socket.client.emit('sendPseudo', { pin: this.$route.params.pin, username: this.username }, (res) => {
        console.log(res);
        if(!res.error) {
          router.push({ path: `/game/${this.$route.params.pin}/room-team`});
        } else {
          this.error = res.error;
        }
      });
    }
  },
  sockets: {
    newUser: function(values) {
      console.log('Hey i\'m a new user and my username is : ' + values.username);
    },
    userHasDisconnected: function(message) {
      console.log(message);
    }
  }
};

</script>

<style scoped>
* {
  background: white;
  color: black;
}

#Pseudo {
  width: 50%;
  height: auto;
  border-radius: 10px;
}

.main-title {
  font-size: 250%;
  text-shadow: #30b5ff 1px 0 50px;
  margin-top: 3%;
}

.input {
  width: 50%;
  height: 10%;
  margin-left: 17.5%;
  margin-top: 5%;
  margin-bottom: 10%;
}

.pseudo-input {
  width: 100%;
  font-size: 200%;
  margin-top: 5%;
  margin-left: 15%;
  border-radius: 50px;
  border: none;
  background: #090b31;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  color: white;
  text-align: center;
}

.continue {
  width: 50%;
  float: right;
  margin-right: 25%;
  cursor: pointer;
  color: white;
}
</style>