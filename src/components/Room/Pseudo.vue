<template>
  <div id="Pseudo">
    
    <h1 class="geminis text-center main-title">Entre ton Nom</h1>
    <div class="input">
      <input type="text" placeholder="Pseudo" class="pseudo-input" v-model="username"/>
    </div>
    
    <div>{{ error }}</div>
    <!-- <select name="teamSelect" id="teamSelect" v-model="team">
      <option value="equipe_1">Equipe 1</option>
      <option value="equipe_2">Equipe 2</option>
    </select> -->
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
      // team: null,
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
  height: 40vh;
  border-radius: 10px;
  padding: 0.1px;
  margin-left: 24%;
}

.main-title {
  font-size: 250%;
  text-shadow: #30b5ff 1px 0 50px;
  margin-top: 3%;
  margin-bottom: 5%;
  height: 15%;
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
  height: 150%;
  font-size: 200%;
  margin-top: 5%;
  margin-left: 15%;
  border-radius: 50px;
  border: none;
  background: #090b31;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  color: White;
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