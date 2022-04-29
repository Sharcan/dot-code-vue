<template>
</template>

<script>
  import SpaceButton from '../SpaceButton.vue'
  import axios from 'axios'

  export default {
    components: { SpaceButton },
    name: "Pseudo",
    data() {
      return {
        pseudo: '',
        error: ''
      }
    },
    methods: {
      async sendPseudo() {
        // Update user pseudo
        const userId = localStorage.getItem('user');
        await axios.patch(process.env.VUE_APP_API_URL + 'user/' + userId, {
            pseudo: this.pseudo
        });
        this.$router.push({ name: 'room.team', params: { pin: this.$route.params.pin } });
      }
    },
    sockets: {
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