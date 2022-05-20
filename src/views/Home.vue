<template>
	<HomeLayout>
		<template #content>
			<div class="title-part">
				<div class="title-container">
					<h1 class="main-title geminis">
						Welcome<br>on board !
					</h1>
					<div class="buttons">
						<div class="btn-1">
							<SpaceButton
								text="Jouer en ligne !"
								link="room.connection"
							/>
						</div>
						<div class="btn-2">
							<SpaceButton
								text="Créer une partie privée"
								@click.native="createRoom"
							/>
						</div>
					</div>
				</div>
				<div class="bg-astronaute" />
			</div>

			<div class="text-part">
				<div class="text-container">
					<h2 class="geminis">
						Third Stone from the Sun
					</h2>
					<p>
						<strong>SPACECODE, c'est quoi ?</strong> <br>
						Relevez le défi sur les différents modes de jeux que vous propose SPACECODE. Chaque défi est conçu par la
						communauté pour vous aider à renforcer différentes compétences de développement. Maîtrisez le langage de
						votre choix et développez votre compréhension du code. Résolvez le défi avec votre style de développement
						directement dans le navigateur et résolvez des exercices pour mesurer votre progression. SPACECODE vous
						propose une approche nouvelle, créative et optimisée pour tirer le meilleur parti de votre pratique de la
						programmation.
					</p>
				</div>
				<div>
					<img
						src="@/assets/images/planet-red.png"
						alt="planet-red"
						class="planet-red-img"
					>
					<img
						src="@/assets/images/diamond.png"
						alt="diamonds"
						class="diamond-img"
					>
					<img
						src="@/assets/images/diamond-2.png"
						alt="diamonds"
						class="diamond-img-2"
					>
				</div>
			</div>

			<div class="text-part text-part-right">
				<div class="text-container text-right">
					<h2 class="geminis">
						Interstellar Supernova
					</h2>
					<p>
						<strong> Comment ça fonctionne ? </strong> <br>

						Discutez du défi, des meilleures pratiques et des techniques innovantes avec la communauté. Laissez-vous
						surprendre par la façon dont les autres abordent le même problème que vous. Créez des mini-jeux qui se
						concentrent sur vos connaissances et permettez aux autres de s’entraîner. Défiez la communauté avec vos
						idées et votre compréhension du code. Vous pouvez tout créer : des exercices simples comme des défis qui
						repoussent les limites de votre créativité. Embarquez au sein du vaisseau SPACECODE et devenez le meilleur !
					</p>
				</div>
				<div>
					<img
						src="@/assets/images/diamond-2.png"
						alt="diamonds"
						class="diamond-img-earth"
					>
					<img
						src="@/assets/images/planet-earth.png"
						alt="planet-earth"
						class="planet-earth-img"
					>
					<img
						src="@/assets/images/diamond-5.png"
						alt="diamonds"
						class="diamond-img-earth-2"
					>
				</div>
			</div>

			<div class="text-part">
				<div class="text-container">
					<h2 class="geminis">
						FIGHT LIKE A Rocket Man !
					</h2>
					<p>
						<strong>Ce que propose SPACECODE ?</strong> <br>

						SPACECODE est avant tout un endroit pour apprendre, s'entraider avec une communauté importante de
						joueurs/développeurs, mais c'est aussi et surtout un espace de compétition et de coopération ! <br>

						<strong>En mode Collaboration : </strong> <br>
						Choisissez votre équipe et votre langage et résolvez des exercices de développement. Un classement mensuel
						des meilleures équipes sera mis en avant sur le Dashboard et vous serez invités à participer à nos finales
						mondiales virtuelles. <br>

						<strong>En mode Compétition : </strong> <br>
						C'est dans cet espace-temps que les programmeurs de tous niveaux mettent leurs compétences à l'épreuve. Les
						concurrents se frayent un chemin à travers une série de puzzles en ligne pour remporter le titre de
						champion.
					</p>
				</div>
				<div>
					<img
						src="@/assets/images/diamond-2.png"
						alt="diamonds"
						class="diamond-img-egg"
					>
					<img
						src="@/assets/images/diamond-3.png"
						alt="diamonds"
						class="diamond-img-egg-2"
					>
					<img
						src="@/assets/images/planet-egg.png"
						alt="planet-egg"
						class="planet-egg-img"
					>
				</div>
			</div>

			<div class="button-part">
				<img
					src="@/assets/images/splash.png"
					alt="Splash"
					class="splash"
				>
				<img
					src="@/assets/images/diamond.png"
					alt="Diamond"
					class="diamond"
				>
				<div class="button-text">
					<h3 class="geminis button-title">
						Prêt à rejoindre l'aventure ?
					</h3>
					<h4 class="geminis button-title">
						L'espace a besoin de toi !
					</h4>
					<SpaceButton
						text="Se créer un compte"
						class="bottom-btn"
						link="register"
					/>
				</div>
			</div>

			<div class="footer">
				<img
					src="@/assets/images/dotcode.png"
					alt="Dotcode"
					class="footer-img"
				>
				<div class="geminis footer-txt-1">
					Made with love by l'équipe 12
				</div>
				<div class="geminis footer-txt-2">
					2022, Dotcode
				</div>
			</div>
		</template>
	</HomeLayout>
</template>

<script>
  import HomeLayout from "@/layouts/HomeLayout"
  import SpaceButton from "@/components/SpaceButton"
  import axios from 'axios'

  export default {
    name: "Home",
    components: {
      HomeLayout,
      SpaceButton,
    },
    mounted() {
      this.disconnectFromAll();
    },
    methods: {
      async getUser() {
        // Get user
        const userId = parseInt(localStorage.getItem('user'));
        this.user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId).then(res => res.data);
      },
      async createRoom() {
        const userId = parseInt(localStorage.getItem('user'));

        // Create room
        const room = await axios.post(process.env.VUE_APP_API_URL + 'room/with-teams', {
          owner_id: userId
        }).then(res => res.data);

        // Join room
        this.$socket.client.emit('joinRoom', {
          pin: room.pin
        });

        // Redirect
        return await this.$router.push({ name: 'room.pseudo', params: { pin: room.pin } });
      },
      async disconnectFromAll() {
        const userId = parseInt(localStorage.getItem('user'));
        if(userId) {
          await axios.patch(process.env.VUE_APP_API_URL + 'user/' + userId + '/disconnect');
        }
      }
    }
  };
</script>

<style>
  /* Title part */
  .title-part {
    position: relative;
    height: 88vh;
  }

  .bg-astronaute {
    position: absolute;
    top: 60px;
    height: 95%;
    width: 85%;
    background: url("~@/assets/images/bg-astronaute-2.png");
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .title-container {
    height: 45%;
    width: 48%;
    float: right;
    margin-top: 3.5rem;
  }

  .main-title {
    font-size: 7rem;
    text-shadow: #30b5ff 1px 0 50px;
    margin-bottom: 20px;
  }

  .buttons {
    width: 95%;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  .btn-1,
  .btn-2 {
    width: 48%;
  }

  /* Text parts */
  .text-part {
    position: relative;
    height: 60vh;
    display: flex;
    align-items: center;
    margin-top: -50px;
  }

  .text-part-right {
    justify-content: end;
  }

  .text-container {
    width: 50%;
    margin-top: 25px;
  }

  .text-container h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
  }

  .text-container p {
    margin-top: 0;
    font-size: 0.9rem;
  }

  /** Planet PART **/
  .planet-red-img {
    position: absolute;
    width: 25%;
    right: 10%;
    bottom: 50px;

    animation-name: planet-movement;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .diamond-img {
    position: absolute;
    width: 10%;
    right: 3%;
    bottom: 20px;

    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .diamond-img-2 {
    position: absolute;
    width: 10%;
    right: 35%;
    bottom: 200px;

    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .planet-earth-img {
    position: absolute;
    width: 25%;
    left: 10%;
    top: 15%;

    animation-name: planet-movement;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: reverse;
  }

  .diamond-img-earth {
    position: absolute;
    width: 8%;
    left: 30%;
    top: 8%;
    transform: rotate(180deg);

    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .diamond-img-earth-2 {
    position: absolute;
    width: 8%;
    left: 4%;
    bottom: 4%;
    transform: rotate(180deg);

    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .planet-egg-img {
    position: absolute;
    width: 25%;
    right: 10%;
    bottom: 50px;

    animation-name: planet-movement;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: normal;
  }

  .diamond-img-egg {
    position: absolute;
    width: 10%;
    right: 3%;
    top: 10%;

    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .diamond-img-egg-2 {
    position: absolute;
    width: 7%;
    right: 3%;
    top: 40%;

    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .button-part {
    height: 33vh;
    width: 100%;
    margin-top: 150px;
    background-color: #fff;
    border-radius: 150px;
    position: relative;
    z-index: -1;
  }

  .splash {
    width: 200px;
    position: absolute;
    top: -15px;
    left: 0;
  }

  .diamond {
    width: 250px;
    position: absolute;
    bottom: -100px;
    right: -30px;

    animation-name: diamond-movement;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .button-text {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-title {
    color: #090b31;
  }

  h3.button-title {
    margin-top: 25px;
  }

  .button-text h3 {
    font-size: 3.3rem;
    margin-bottom: 0;
  }

  .button-text h4 {
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .bottom-btn {
    width: 30%;
  }

  .footer {
    width: 100%;
    text-align: center;
  }

  .footer-img {
    margin-top: -15px;
  }

  .footer-txt-1 {
    margin-top: 20px;
  }

  @keyframes planet-movement {
    0% {
      transform: rotate(0) translate(0, 0);
    }
    50% {
      transform: rotate(180deg) translate(50px, -40px);
    }
    100% {
      transform: rotate(360deg) translate(0, 0);
    }
  }

  @keyframes diamond-movement {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
