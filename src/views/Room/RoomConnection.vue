<template>
  <div id="RoomConnection">
      <div class="top-img">
          <img src="@/assets/images/SpaceCode_DashboardLogOut.png">
      </div>
    <div class="connect-pannel">
      <connection />
    </div>

    <div class="bottom-img">
          <img src="@/assets/images/diamond.png" alt="">
      </div>

    <p class="text-center go-create">Vous voulez plutot créer votre propre room ? <a :href="'/'">C'est ici !</a></p>
    
  </div>
</template>

<script>
import Connection from "@/components/Room/Connection.vue";
export default {
  components: { Connection },
  name: "RoomConnection",
};
</script>

<style scoped>
#RoomConnection {
  height: 100vh;
}

.top-img {
  width: 100%;
  display: flex;
  justify-content: center;
}

.connect-pannel {
  margin-top: -10%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.bottom-img img{
    width: 12%;
    height: 10%;
    margin-top: -8%;
    margin-left: 67.5%;
    opacity: 90%;
}

.go-create {
    margin-top: -4%;
}

a {
    color: white;
    text-decoration: none;
}
</style>
