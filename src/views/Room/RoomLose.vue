<template>
  <div class="lose">
    <img class="top-image" src="@/assets/images/SpaceCodeGreenLogo.png">
    <div class="lose-main">
    
      
      <div class="lose-card">
        <Lose/>
        <img class="lose-image" src="@/assets/images/SpaceCode_AstroLoose.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Lose from "../../components/Room/Lose.vue";

export default {
  name: "RoomLose",
  components: { Lose },
};
</script>

<style scoped>
    .lose-card {
        display: flex;
        margin-top: -5%;
    }
    .top-image {
        margin-bottom: 5%;
        margin-top: 2%;
        margin-left: 40%;
        width: 5%;
    }
    .lose-image {
        width: 15%;
        margin-left: -10%;
        margin-bottom: 5%;
        
    }
    

    
</style>
