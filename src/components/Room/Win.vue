<template>
  <div id="win">
    <a class="back-link" href="">Retour dans le CyberSpace</a>
    <div class="win-text">
      <div class="geminis">
        <h2 class="text-title">Bravo !</h2>
        <p class="sub-title">
          Tu as remporté cette <br />
          bataille intergalactique
        </p>
      </div>
      <div>
        <p class="text-main">Souhaites-tu repartir à l’asault ?</p>
      </div>
    </div>
    <div class="button">
      <button class="continue">Evidemment !</button>
      <button class="finished">Non, j'ai eu ma dose</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Win",
};
</script>

<style scoped>
* {
  color: black;
}
#win {
  width: 35%;
  margin-left: 24%;
}

.text-title {
  font-size: 400%;
  text-shadow: #30b5ff 1px 0 50px;
  margin-top: 3%;
  margin-bottom: 5%;
}

.sub-title {
    margin-top: -5%;
    font-size: 150%;
}

.text-main {
    font-size: 50px;
    font-weight: bold;
    width: 55%;
    line-height: 90%;
}

.back-link {
  color: white;
  text-decoration: none;
}

.win-text {
  background: white;

  height: 40vh;
  border-radius: 10px;
  padding: 3%;
}
.button {
  display: flex;
  padding: 1%;
  margin-left: 2%;
}

.continue {
  width: 100%;
  background-color: #44f5ba;
  text-align: center;
  border-radius: 30px;
  font-weight: 700;
  padding: 12px 0;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  transition: 0.25s;
  cursor: pointer;
  color: #fff;
  border: none;
  position: relative;
}
.finished {
  width: 100%;
  margin-left: 5%;
  background-color: #db3737;
  text-align: center;
  border-radius: 30px;
  font-weight: 700;
  padding: 12px 0;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  transition: 0.25s;
  cursor: pointer;
  color: #fff;
  border: none;
  position: relative;
}
</style>
