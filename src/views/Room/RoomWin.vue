<template>
	<div class="win">
		<div class="topbar">
			<img
				class="top-image"
				src="@/assets/images/SpaceCodeGreenLogo.png"
			>
		</div>
		<div class="win-main">
			<div class="win-card-container">
				<Win />
			</div>
		</div>
		<img
			src="@/assets/images/Moon.png"
			class="font-image"
		>
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

.win {
  height: 100vh;
}

.topbar {
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.win-main {
  width: 100%;
  height: 83vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.win-card-container {
  display: flex;
  position: relative;
  z-index: 3;
  justify-content: center;
}

.font-image {
  opacity: 70%;
  width: 40%;
  margin-top: -70%;
  position: relative;
  z-index: 1;
}
</style>
