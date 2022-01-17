<template>
  <div id="RoomPseudo">
    <a class="back" href="#"> Retour dans le cyberspace</a>
    <div class="pseudo-pannel">
      <Team />
    </div>
    <div class="bottom-img">
      <img src="@/assets/images/diamond.png"/>
    </div>
  </div>
</template>

<script>
import Team from "@/components/Room/Team.vue";

export default {
  name: "RoomTeam",
  components: {
    Team,
  },
};
</script>

<style scoped>
.pseudo-pannel {
  margin-top: 1%;
  border: solid #44f5ba;
  box-shadow: 0 0 0.1vw 0vw #44f5ba, 0 0 0.5vw 0.1vw #44f5ba,
    inset 0 0 0.1vw 0 #44f5ba, inset 0 0 0.1vw 0 #44f5ba,
    inset 0 0 0.1vw 0 #44f5ba;
  border-radius: 10px;
  margin-left: 2%;
  margin-right: 2%;
  padding: 1%;
}

.back {
  margin-left: 2%;
  color: #fff;
  text-decoration: none;
}

.bottom-img > img {
  width: 10%;
    height: 10%;
  margin-top: -10%;
  margin-left: 90%;
  opacity: 90%;
}
</style>
