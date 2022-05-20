<template>
	<div class="lose">
		<div class="topbar">
			<img
				class="top-image"
				src="@/assets/images/SpaceCodeGreenLogo.png"
			>
		</div>
		<div class="lose-main">
			<div class="lose-card-container">
				<Lose />
			</div>
		</div>
		<img
			src="@/assets/images/Moon.png"
			class="font-image"
		>
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

.lose {
  height: 100vh;
}

.topbar {
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.lose-main {
  width: 100%;
  height: 83vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lose-card-container {
  display: flex;
  position: relative;
  z-index: 3;
  justify-content: center;
}

.font-image {
  opacity: 70%;
  width: 40%;
  top: -80%;
  position: relative;
  z-index: 1;
}
</style>
