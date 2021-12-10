<template>
  <div id="Tournois">
    <h3 class="title geminis text-center">
      Tournois <br />
      En cours
    </h3>
    <div class="img">
      <img src="@/assets/images/SpaceCode_illu08.png" alt="" srcset="" />
    </div>
    <h3 class="title2 geminis text-center">mars attack !</h3>
    <p class="sub-date text-center">Du 20/12/2021 au 05/01/2022</p>
    <p class="text text-center">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur !
    </p>
    <button class="go">Participer !</button>
  </div>
</template>

<script>
export default {
  name: "Tournois",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Tournois {
  width: 486px;
  height: 861px;
  border-radius: 10px;
  border: solid #44f5ba;
  color: #ffffff;

  box-shadow: 0 0 0.1vw 0vw #44f5ba, 0 0 0.5vw 0.1vw #44f5ba,
    inset 0 0 0.1vw 0 #44f5ba, inset 0 0 0.1vw 0 #44f5ba,
    inset 0 0 0.1vw 0 #44f5ba;
}
.title {
  width: 230px;

  height: 97px;
  font-size: 50px;
  margin: auto;
  margin-top: 30px;

  text-shadow: 0vw 0vw 0.25vw #30b5ff, 0vw 0vw 0.25vw #30b5ff,
    0vw 0vw 0.1vw #30b5ff, 0vw 0vw 0.1vw #30b5ff, 0vw 0vw 1vw #30b5ff;
}
.title2 {
  width: 400px;

  height: 47px;
  font-size: 50px;
  margin: auto;
  margin-top: 30px;
  color: #ffffff;

  text-shadow: 0vw 0vw 0.25vw #30b5ff, 0vw 0vw 0.25vw #30b5ff,
    0vw 0vw 0.1vw #30b5ff, 0vw 0vw 0.1vw #30b5ff, 0vw 0vw 1vw #30b5ff;
}

.img {
  margin-top: 25px;
  margin-left: 100px;
}

img {
  width: 273px;
  height: 285px;
}

.sub-date {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}

.text {
  width: 346px;
  height: 115px;
  margin: auto;
  margin-top: -15px;
  margin-bottom: 60px;
}
.go {
  background: #ffffff;
  width: 350px;
  height: 60px;
  color: black;
  margin-left: 70px;

  box-shadow: 0px 0px 50px 5px rgba(48,181,255,0.8);
  border-radius: 50px;
  border: none;
  font-size: 30px;
  font-weight: bold;
}
.go:hover {
  cursor: pointer;
  background-color: #090B31;
  color: white;
  border: none;
}
</style>
