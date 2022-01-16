<template>
  <div class="win">
    <img class="top-image" src="@/assets/images/SpaceCodeGreenLogo.png">
    <div class="win-main">
    
      
      <div class="win-card">
        <Win />
        <img class="win-image" src="@/assets/images/SpaceCode_AstroWin.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Win from "../../components/Room/Win.vue";

export default {
  name: "RoomWin",
  components: { Win },
};
</script>

<style scoped>
    .win-card {
        display: flex;
        margin-top: -5%;
    }
    .top-image {
        margin-bottom: 5%;
        margin-top: 2%;
        margin-left: 40%;
        width: 5%;
    }
    .win-image {
        width: 25%;
        margin-left: -15%;
        
    }
    

    
</style>
