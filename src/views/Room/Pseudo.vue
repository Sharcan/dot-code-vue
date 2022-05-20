<template>
	<div id="roomPseudo">
		<p class="id-room">
			#<span class="geminis">{{ $route.params.pin }}</span>
		</p>
		<div class="top-img">
			<img
				src="@/assets/images/SpaceCode_DashboardLogOut.png"
				alt=""
			>
		</div>
		<div class="pseudo-pannel">
			<div id="pseudo">
				<h1 class="geminis text-center main-title">
					Entre ton Nom
				</h1>
				<div class="input">
					<input
						v-model="pseudo"
						type="text"
						placeholder="Pseudo"
						class="pseudo-input"
					>
				</div>
        
				<div>{{ error }}</div>
				<SpaceButton
					class="continue"
					text="Continuer"
					@click.native="sendPseudo"
				/>
			</div>
		</div>
		<div class="bottom-img">
			<img
				src="@/assets/images/diamond.png"
				alt=""
			>
		</div>
	</div>
</template>

<script>
  import SpaceButton from '../../components/SpaceButton'
  import axios from 'axios'

  export default {
    name: "Pseudo",
    components: { 
      SpaceButton 
    },
    data() {
      return {
        pseudo: '',
        error: ''
      }
    },
    mounted() {
      this.getPseudo();
    },
    methods: {
      async getPseudo() {
        // Get user pseudo
        const userId = localStorage.getItem('user');
        const user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId).then(res => res.data);
        this.pseudo = user.pseudo;
      },
      async sendPseudo() {
        // Update user pseudo
        const userId = localStorage.getItem('user');
        await axios.patch(process.env.VUE_APP_API_URL + 'user/' + userId + '/pseudo', {
            pseudo: this.pseudo
        });

        // Emit connection event
        this.$socket.client.emit('userSendPseudo', {
          pin: this.$route.params.pin
        });

        await this.$router.push({ name: 'room.team', params: { pin: this.$route.params.pin } });
      }
    }
  };
</script>

<style scoped>
  #roomPseudo {
    height: 100vh;
  }

  .top-img {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .pseudo-pannel {
    margin-top: -10%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .bottom-img img {
    width: 12%;
    height: 10%;
    margin-top: -8%;
    margin-left: 67.5%;
    opacity: 90%;
  }

  #pseudo {
    width: 50%;
    height: auto;
    border-radius: 10px;
    background: white;
    color: black;
  }

  .main-title {
    font-size: 250%;
    text-shadow: #30b5ff 1px 0 50px;
    margin-top: 3%;
  }

  .input {
    width: 50%;
    height: 10%;
    margin-left: 17.5%;
    margin-top: 5%;
    margin-bottom: 10%;
  }

  .pseudo-input {
    width: 100%;
    font-size: 200%;
    margin-top: 5%;
    margin-left: 15%;
    border-radius: 50px;
    border: none;
    background: #090b31;
    box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
    color: white;
    text-align: center;
  }

  .continue {
    width: 50%;
    float: right;
    margin-right: 25%;
    cursor: pointer;
    color: white;
  }
</style>
