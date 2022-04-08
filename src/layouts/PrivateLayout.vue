<template>
  <div>
        <div class="topbar">
            <img class="top-image" src="@/assets/images/SpaceCodeGreenLogo.png" />
        </div>
        <div class="party-main">
            <slot name="content"></slot>
        </div>
        <img src="@/assets/images/Moon.png" class="font-image" />
        
  </div>
</template>

<script>
export default {
    name : 'PrivateLayout',
}
</script>

<style scoped>
.topbar {
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.party-main {
    width: 100%;
    z-index: 3;
}

.font-image {
  opacity: 70%;
  width: 25%;
  left: 10%;
  position: relative;
  z-index: 1;
}
</style>