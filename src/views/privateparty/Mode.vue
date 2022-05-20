<template>
	<div>
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
			retour
		</a>
		<div class="main-block">
			<div class="player-card">
				<h3 class="geminis player-title">
					Joueurs {{ playerNumber }}/{{ playerMaxNumber }}
				</h3>
				<div class="player-card-list">
					<select
						id="PlayerMaxNbr"
						v-model="playerMaxNumber"
						name="PlayerMaxNumber"
						class="player-max"
					>
						<option value="2">
							2 joueurs
						</option>
						<option value="4">
							4 joueurs
						</option>
						<option value="6">
							6 joueurs
						</option>
						<option value="10">
							10 joueurs
						</option>
						<option value="20">
							20 joueurs
						</option>
						<option value="30">
							30 joueurs
						</option>
					</select>
					<div class="player-list">
						<div class="player">
							<p>Momoko</p>
						</div>
					</div>
				</div>
			</div>
			<div class="game-mode-block">
				<h3 class="geminis player-title">
					Mode de jeux
				</h3>
				<div class="mode-list">
					<div class="mode-card">
						Mode De Jeu 1
					</div>
				</div>
				<div class="mode-button">
					<SpaceButton
						class="button-mode"
						text="Inviter dans la partie"
					/>
					<SpaceButton
						class="button-mode"
						text="Démarer la partie"
					/>
				</div>
			</div>
		</div>
		<div />
	</div>
</template>

<script>
import SpaceButton from "../../components/SpaceButton.vue"
export default {
    name: "PrivateMode",
    components: { SpaceButton },
    data() {
        return {
            playerMaxNumber: 2,
            playerNumber: 0
        };
    }
}
</script>

<style scoped>
.main-block {
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  z-index: 3;
}
.back-link {
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    color: white;
    margin-left: 1%;
}
.back-icon {
  width: 1%;
  margin-top: 0.5px;
}
.player-card {
  width: 20%;
  margin-left: 10%;
  text-align: center;
}
.player-title {
  color: #44f5ba;
  font-size: 250%;
}
.player-card-list {
  background-color: white;
  border-radius: 10px;
  padding: 2%;
  height: 65vh;
}
.player-max {
  width: 90%;
  padding: 2%;
  border-radius: 10px;
  font-weight: bold;
  font-family: 'Geminis';
}

.player {
  background-color: #090B31;
  font-size: large;
  font-weight: bolder;
  margin-top: 5%;
  padding-top:2%;
  padding-bottom: 0.5%;
  border-radius: 50px;
}

.game-mode-block{
 margin-left: 5%;
 width: 60%;
}

.mode-list{
  background-color: white;
  border-radius: 10px;
  padding: 2%;
  height: 45vh;
}
.mode-button {
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
  background-color: white;
  border-radius: 10px;
  padding: 2%;
  height: 15vh;
}

.mode-card {
  width: 30%;
  height: 20vh;
  border-radius: 10px;
  background-color: #090B31;
  margin-right: 3%;
  margin-bottom: 1%;
  font-weight: bolder;
  font-size: 150%;
  text-align: center;

}

.button-mode {
  width: 40%;
  margin-top: 2%;
}

</style>