<template>
	<div id="Register">
		<div class="top-img">
			<img src="@/assets/images/SpaceCodeGreenLogo.png">
		</div>
		<div class="main-block">
			<div class="left-div">
				<a class="back-link">Retour dans le cyberspace</a>
				<h1 class="main-title geminis">
					Welcome<br>on board !
				</h1>
				<ul class="links-list">
					<li class="link-list">
						FOLLOW US
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
				<h2 class="geminis sub-title text-center">
					Créer Notre compte
				</h2>
				<register-form />
			</div>
		</div>
		<img
			class="bg-planet"
			src="@/assets/images/planet-ice.png"
		>
	</div>
</template>

<script>
import RegisterForm from '../../components/Profil/RegisterForm.vue'
export default {
    name : "Register",
  components: { RegisterForm }
}
</script>

<style scoped>
#Register {
    height: 100vh;
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

.main-block {
    width: 100%;
    height: 50vh;
    margin-top: 1%;
    display: flex;
    position: relative;
    z-index: 3;
}

.bg-planet {
    opacity: 70%;
    width: 30%;
    top: -70%;
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
    margin-top: 5%;
}
.links-list {
    display: flex;
    width: full;
    list-style: none;
    font-weight: bold;
    color: #44f5ba;
}
.link-list {
    margin-right: 5%;
}
.link-image {
    margin-left : 10%;
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