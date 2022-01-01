<template>
  <div id="Connection">
    <h3 class="text-center geminis main-title">
      Entrez le numéro de votre partie
    </h3>
    <div class="input">
      <input
        type="text"
        id="id-input"
        class="id-input"
        placeholder="ID Room"
        v-model="pin"
      />
      <span class="error">{{ error }}</span>
    </div>
    <SpaceButton text="Annuler"  link="Home" class="button-cancel"/>
    <SpaceButton text="Confirmer" class="button-confirm" @click.native="roomConnection"/>
  </div>
</template>

<script>
import SpaceButton from '../SpaceButton.vue';
import router from "../../router";

export default {
  components: { SpaceButton },
  name: "Connection",
  data() {
    return {
      pin: '',
      error: ''
    }
  },
  methods: {
    roomConnection() {
      this.$socket.client.emit('roomConnection', {pin: this.pin}, (res) => {
        if (res.pin) {
          router.push({ path: `/game/${res.pin}/room-pseudo`});
        } else if (res.error) {
          this.error = 'Cette room est introuvable';
        }
      })
    }
  },
  mounted() {
    console.log(this.$socket);
  }
};
</script>

<style scoped>
* {
  background: white;
  color: black;
}
#Connection {
  width: 1000px;
  height: 400px;
  border-radius: 10px;
  padding: 0.1px;
  margin-left: 24%;
}
.main-title {
  font-size: 50px;
  text-shadow: #30b5ff 1px 0 50px;
  margin-bottom: 20px;
  margin-top: 3%;
  height: 50px;
}
.input {
  width: 600px;
  height: 200px;
  margin-left: 15%;
  margin-top: 5%;
}

.id-input {
  width: 500px;
  height: 60px;
  font-size: 40px;
  margin-top: 5%;
  margin-left: 15%;
  border-radius: 50px;
  border: none;
  background: #090b31;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  color: White;
  text-align: center;
}

.button-confirm, .button-cancel {
  width: 25%;
  float: right;
  margin-top: -5%;
  margin-right: 5%;
  cursor: pointer;
  color: white;
}

.button-confirm{
    float: right;
    margin-right: 15%;
}

.button-cancel {
    float: left;
    margin-left: 15%;
}
.button-confirm:hover, .button-cancel:hover {
  background-color: #fff;
  color: #4d2a9c;
  cursor: pointer;
  transition: 0.25s;
}
.error {
  color: red;
}
</style>
