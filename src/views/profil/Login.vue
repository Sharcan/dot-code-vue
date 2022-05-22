<template>
	<div id="Login">
		<div class="top-img">
			<img src="@/assets/images/SpaceCodeGreenLogo.png">
		</div>
		<div class="nav-button">
			<SpaceButton
				class="register-button"
				text="Se créer un compte"
				link="register"
			/>
			<SpaceButton
				class="game-button"
				text="Créer une partie privé"
			/>
		</div>
		<div class="main-block">
			<div class="left-div">
				<a class="back-link">Retour dans le cyberspace</a>
				<h1 class="main-title geminis">
					Welcome<br>Back
				</h1>
				<ul class="links-list">
					<li class="link-list">
						<a href="#">FOLLOW US</a>
					</li>
					<li class="link-list link-image">
						<a href="#"><img src="@/assets/images/twitter.png"></a>
					</li>
					<li class="link-list">
						<a href="#"><img src="@/assets/images/facebook.png"></a>
					</li>
					<li class="link-list">
						<a href="#"><img src="@/assets/images/linkedin.png"></a>
					</li>
					<li class="link-list">
						<a href="#"><img src="@/assets/images/discord.png"></a>
					</li>
					<li class="link-list">
						<a href="#"><img src="@/assets/images/twitch.png"></a>
					</li>
				</ul>
			</div>
			<div class="right-div">
				<LoginForm />
				<ConnexionButton />
			</div>
		</div>
		<img
			class="bg-planet"
			src="@/assets/images/planet-ring.png"
		>
	</div>
</template>

<script>
import LoginForm from "../../components/Profil/LoginForm.vue";
import SpaceButton from "../../components/SpaceButton.vue";
import ConnexionButton from "../../components/Profil/ConnexionButton.vue";
export default {
    name : "Login",
  components: { LoginForm, SpaceButton, ConnexionButton }
}
</script>

<style scoped>
#Login {
    height: 100vh
}
.top-img {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1%;
}
.top-img > img {
    width: 7%;
}

.nav-button {
    width: 100%;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.register-button {
    width: 30%;
}

.game-button {
    width: 30%;
    margin-left: 10%;
}

.main-block {
    width: 100%;
    margin-top: 3%;
    display: flex;
    position: relative;
    z-index: 3;
}

.bg-planet {
    width: 50%;
    margin-top: -60%;
    margin-left: -5%;
    position: relative;
    z-index: 1;
}
.back-link {
    text-decoration: none;
    font-weight: bold;
    font-size: 25px;
    color: white;
    cursor: pointer;
}

.left-div {
    width: 50%;
    margin-left: 10%;
}
.links-list {
    display: flex;
    width: full;
    list-style: none;
    font-weight: bold;
}
.link-list {
    margin-right: 5%;
}
.link-image {
    margin-left : 10%;
}

.link-list > a{
    color: #44f5ba;
    text-decoration: none;
}

.link-list > a > img{
    width : 80%
}

.right-div {
    margin-left: -5%;
    width: 30%;
}
.main-title {
  font-size: 7rem;
  text-shadow: #30b5ff 1px 0 50px;
  margin-bottom: 20px;
}
.sub-title {
    color: #44f5ba;
}
</style>