<template>
	<div id="roomConnection">
		<div class="top-img">
			<img src="@/assets/images/SpaceCode_DashboardLogOut.png">
		</div>
		<div class="connect-pannel">
			<div id="connection">
				<h3 class="text-center geminis main-title">
					Entrez le numéro de votre partie
				</h3>
				<div class="input">
					<input
						id="id-input"
						v-model="pin"
						type="text"
						class="id-input"
						placeholder="ID Room"
					>
					<span class="error">{{ error }}</span>
				</div>
				<SpaceButton
					text="Annuler"
					link="home"
					class="button-cancel"
				/>
				<SpaceButton
					text="Confirmer"
					class="button-confirm"
					@click.native="roomConnection"
				/>
			</div>
		</div>

		<div class="bottom-img">
			<img
				src="@/assets/images/diamond.png"
				alt=""
			>
		</div>

		<p class="text-center go-create">
			Vous voulez plutot créer votre propre room ? <a :href="'/'">C'est ici !</a>
		</p>
	</div>
</template>

<script>
  import SpaceButton from '../../components/SpaceButton.vue';
  import axios from "axios";

  export default {
    name: "Connection",
    components: { 
      SpaceButton 
    },
    data() {
      return {
        pin: '',
        error: ''
      }
    },
    methods: {
      async roomConnection() {
        // Get room
        const room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.pin}`)
          .then((res) => res.data)
          .catch(() => {
            this.error = 'Cette room est introuvable';
          });

        if(!room) {
          this.error = 'Cette room est introuvable';
          return;
        }

        // Connect user
        const userId = localStorage.getItem('user');
        await axios.patch(`${process.env.VUE_APP_API_URL}user/${userId}/connect`, {
          room_id: room.id
        });

        // Emit connection event
        this.$socket.client.emit('userJoinsRoom', {
          pin: this.pin
        });

        return await this.$router.push({ name: 'room.pseudo', params: { pin: this.pin } });
      }
    }
  };
</script>

<style scoped>
  #roomConnection {
    height: 100vh;
  }

  .top-img {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .connect-pannel {
    margin-top: -10%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .bottom-img img{
      width: 12%;
      height: 10%;
      margin-top: -8%;
      margin-left: 67.5%;
      opacity: 90%;
  }

  .go-create {
      margin-top: -4%;
  }

  a {
      color: white;
      text-decoration: none;
  }

  #connection {
    width: 50%;
    border-radius: 10px;
    background: white;
    color: black;
  }

  .main-title {
    font-size: 250%;
    text-shadow: #30b5ff 1px 0 50px;
    margin-top: 3%;
    margin-bottom: 5%;
  }

  .input {
    width: 50%;
    height: 10%;
    margin-left: 17.5%;
    margin-top: 5%;
  }

  .id-input {
    width: 100%;
    height: 150%;
    font-size: 200%;
    margin-top: 5%;
    margin-left: 15%;
    border-radius: 50px;
    border: none;
    background: #090b31;
    box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
    color: White;
    text-align: center;
  }

  .button-confirm, .button-cancel {
    width: 25%;
    float: right;
    margin-top: 10%;
    margin-right: 5%;
    cursor: pointer;
    color: white;
  }

  .button-confirm{
    float: right;
    margin-right: 15%;
  }

  .button-cancel {
    float: left;
    margin-left: 15%;
  }
  .button-confirm:hover, .button-cancel:hover {
    background-color: #fff;
    color: #4d2a9c;
    cursor: pointer;
    transition: 0.25s;
  }
  .error {
    color: red;
  }
</style>
