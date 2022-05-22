<template>
	<div>
		<div class="main-block">
			<div class="left-div">
				<a
					class="back-link"
					href="/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="back-icon"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Retour dans le cyberspace
				</a>
				<h1 class="main-title geminis">
					WELCOME <br> all space <br> traveler !
				</h1>
			</div>
			<div class="right-div">
				<h2 class="geminis sub-title text-center">
					Creer une partie privée
				</h2>
				<div class="main-creation">
					<div class="user-info">
						<div class="profil-image">
							<img src="@/assets/images/meteore.png">
						</div>
						<div class="profil-text">
							<h3 class="geminis">
								Choisis un Prenom
							</h3>
							<input
								type="text"
								placeholder="Username"
								class="name-input"
							>
						</div>
					</div>
					<SpaceButton
						link="gameMode"
						class="create"
						text="Démarer la partie"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SpaceButton from "../../components/SpaceButton.vue";
export default {
    name: "PrivateCreation",
    components: { SpaceButton }
}
</script>

<style scoped>
  .main-block {
    width: 100%;
    height: 50vh;
    margin-top: 5%;
    display: flex;
    position: relative;
    z-index: 3;
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



.main-creation {
  background-color: white;
  width: 120%;
  padding: 5%;
  border-radius: 10px;
  color: #44f5ba;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-top: 10%;
}
.user-info {
  display: flex;
}

.name-input {
  width: 100%;
  font-size: 200%;
  margin-top: 5%;
  border: none;
  background: #090B31;
  color: white;
  border-radius: 50px;
}

.profil-image {
  background: #090B31;
  border-radius: 100%;
  padding: 7%
}

.profil-text {
  margin-left: 4%;
  margin-top: 6%;
}

.create {
  margin-top: 10%;
}
</style>