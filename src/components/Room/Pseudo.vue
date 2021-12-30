<template>
  <div id="Pseudo">
    <h1 class="geminis text-center main-title">Entre ton Nom</h1>
    <input type="text" placeholder="Pseudo" class="pseudo-input" v-model="username"/>
    <select name="teamSelect" id="teamSelect" v-model="team">
      <option value="equipe_1">Equipe 1</option>
      <option value="equipe_2">Equipe 2</option>
    </select>
    <SpaceButton text="Continuer" @click.native="newUser" v-model="username"/>
  </div>
</template>

<script>
import SpaceButton from '../SpaceButton.vue';

export default {
  components: { SpaceButton },
  name: "Pseudo",
  data() {
    return {
      username: '',
      team: null
    }
  },
  methods: {
    newUser() {
      this.$socket.client.emit('newUser', {pin: this.$route.params.pin, username: this.username, team: this.team});
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
  width: 600px;
  height: 200px;
  border-radius: 10px;
  padding: 0.1px;
  margin-left: 30%;
}

.main-title {
  font-size: 30px;
  text-shadow: #30b5ff 1px 0 50px;
  margin-bottom: 20px;
  height: 50px;
}

.pseudo-input {
  width: 300px;
  height: 40px;
  font-size: 30px;
  margin-left: 25%;
  border-radius: 50px;
  border: none;
  background: #090b31;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  color: White;
  text-align: center;
}
</style>