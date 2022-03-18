<template>
  <div id="RoomPseudo">
    <p class="id-room">
      #<span class="geminis">{{ $route.params.pin }}</span>
    </p>
    <div class="top-img">
      <img src="@/assets/images/SpaceCode_DashboardLogOut.png" alt="" />
    </div>
    <div class="pseudo-pannel">
      <pseudo />
    </div>
    <div class="bottom-img">
      <img src="@/assets/images/diamond.png" alt="" />
    </div>
  </div>
</template>

<script>
  import Pseudo from "@/components/Room/Pseudo.vue";

  export default {
    components: { Pseudo },
    name: "RoomPseudo",
  };
</script>

<style scoped>
  #RoomPseudo {
    height: 100vh;
  }

  .top-img {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .pseudo-pannel {
    margin-top: -10%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .bottom-img img {
    width: 12%;
    height: 10%;
    margin-top: -8%;
    margin-left: 67.5%;
    opacity: 90%;
  }
</style>
