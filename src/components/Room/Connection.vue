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
      />
    </div>
    <router-link :to="{path: '/'}">
      <div class="button-cancel">Annuler</div>
    </router-link>
    <router-link :to="{path: '/RoomPseudo'}">
      <div class="button-confirm">Rejoindre la partie</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Connection",
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
  text-align: center;
  width: 25%;
  background-color: #090b31;
  color: white;
  border-radius: 30px;
  font-weight: 700;
  padding: 12px 0;
  float: right;
  margin-top: -5%;
  margin-right: 5%;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  transition: 0.25s;
  cursor: pointer;
}

.button-confirm{
    float: right;
    margin-right: 5%;
}

.button-cancel {
    float: left;
    margin-left: 5%;
}
.button-confirm:hover, .button-cancel:hover {
  background-color: #fff;
  color: #4d2a9c;
  cursor: pointer;
  transition: 0.25s;
}
</style>
