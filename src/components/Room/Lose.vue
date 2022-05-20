<template>
	<div id="lose">
		<a
			class="back-link"
			href=""
		>Retour dans le CyberSpace</a>
		<div class="lose-card">
			<div class="geminis">
				<h2 class="text-title">
					Dommage !
				</h2>
				<p class="sub-title">
					Tu t'es fait propulser vers <br> d'autres cieux...
				</p>
			</div>
			<div>
				<p class="text-main">
					Souhaites-tu repartir à l’assaut ?
				</p>
			</div>
			<img
				class="lose-image"
				src="@/assets/images/SpaceCode_AstroLoose.png"
			>
		</div>
		<div class="buttons">
			<button class="continue">
				Evidemment !
			</button>
			<button class="finished">
				Non, j'ai eu ma dose
			</button>
		</div>
	</div>
</template>

<script>
export default {
  name: "Lose",
};
</script>

<style scoped>
* {
  color: black;
}

.text-title {
  font-size: 400%;
  text-shadow: #30b5ff 1px 0 50px;
  margin-top: 3%;
}

.sub-title {
    margin-top: -5%;
    font-size: 150%;
}

.text-main {
    font-size: 250%;
    font-weight: bold;
    width: 55%;
    line-height: 90%;
    margin-top: -2%;
}

.back-link {
  color: white;
  text-decoration: none;
}

.lose-card {
  position: relative;
  background: white;
  height: 40vh;
  border-radius: 10px;
  padding: 3%;
}

.lose-image {
  position: absolute;
  right: -15%;
  top: -5%;
  width: 40%;
}
.buttons {
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
  padding: 10px 0;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  transition: 0.25s;
  cursor: pointer;
  color: #fff;
  border: none;
  position: relative;
}

.continue:hover{
   background-color: #22c790;
}
.finished {
  width: 100%;
  margin-left: 5%;
  background-color: #db3737;
  text-align: center;
  border-radius: 30px;
  font-weight: 700;
  padding: 10px 0;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  transition: 0.25s;
  cursor: pointer;
  color: #fff;
  border: none;
  position: relative;
}

.finished:hover{
    background-color: #a82323;
}
</style>
