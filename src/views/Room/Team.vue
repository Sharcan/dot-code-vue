<template>
	<div id="roomTeam">
		<a
			class="back"
			href="#"
		> Retour dans le cyberspace</a>
		<div class="pseudo-pannel">
			<div id="team">
				<h4 class="id-room">
					#<span class="geminis">{{ $route.params.pin }}</span>
				</h4>
				<h3 class="geminis main">
					Rejoins ton équipe avant <br>de commencer la partie !
				</h3>

				<!-- Teams -->
				<div
					v-if="room"
					class="teams"
				>
					<!-- Team 1 -->
					<div class="team-1">
						<h3 class="team-title geminis t1">
							{{ room.teams[0] ? room.teams[0].name : '...' }}
						</h3>
						<div class="team-card">
							<div class="text-card">
								<div
									v-if="room.teams[0] && room.teams[0].users.length > 0"
									class="list-player"
								>
									<ul>
										<li
											v-for="user in room.teams[0].users"
											:key="user.slug"
										>
											{{ user.pseudo }}
										</li>
									</ul>
								</div>
								<div
									v-else
									class="list-player"
								>
									<p>L'équipe est actuellement <br>vide</p>
								</div>
							</div>

							<button
								v-if="room.teams[0]"
								class="join-button"
								@click="joinTeam(room.teams[0].id)"
							>
								Rejoindre l'équipe {{ room.teams[0].name }}
							</button>
						</div>
					</div>

					<!-- Icons -->
					<div class="team-logo logo1">
						<img src="@/assets/images/satelite.png">
					</div>
					<div class="team-logo logo2">
						<img src="@/assets/images/meteore.png">
					</div>

					<!-- Team 2 -->
					<div class="team-2">
						<h3 class="team-title geminis t2">
							{{ room.teams[1] ? room.teams[1].name : '...' }}
						</h3>
						<div class="team-card">
							<div class="text-card">
								<div
									v-if="room.teams[1] && room.teams[1].users.length > 0"
									class="list-player"
								>
									<ul>
										<li
											v-for="user in room.teams[1].users"
											:key="user.slug"
										>
											{{ user.pseudo }}
										</li>
									</ul>
								</div>
								<div
									v-else
									class="list-player"
								>
									<div>
										<p>L'équipe est actuellement <br>vide</p>
									</div>
								</div>
							</div>

							<button
								v-if="room.teams[1]"
								class="join-button"
								@click="joinTeam(room.teams[1].id)"
							>
								Rejoindre l'équipe {{ room.teams[1].name }}
							</button>
						</div>
					</div>
				</div>

				<div v-if="room">
					Joueurs dans la room: 
					<span
						v-for="user in room.users"
						:key="user.id"
					>
						{{ (user.pseudo ? user.pseudo : 'Guest ' + user.id) + ' ' }}
					</span>
				</div>

				<div class="start-game">
					<button
						class="start-button"
						@click="launchGame()"
					>
						Démarrer la partie !
					</button>

					<div
						v-if="err"
						class="error"
					>
						{{ err }}
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-img">
			<img src="@/assets/images/diamond.png">
		</div>
	</div>
</template>

<script>
  import router from "../../router";
  import axios from 'axios'

  export default {
    name: "Team",
    data() {
      return {
        user: null,
        room: null,
        err: null,
      };
    },
    async mounted() {
      const userId = localStorage.getItem('user');
      this.user = await axios.get(`${process.env.VUE_APP_API_URL}user/${userId}`).then(res => res.data);

      // Get room details
      this.room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.$route.params.pin}`)
        .then((res) => res.data)
        .catch(() => this.$router.push({ name: 'room.connection' }));
    },
    methods: {
      async joinTeam(teamId) {
        if(!this.user || !this.checkNotAlreadyInTeam(teamId)) {
          return;
        }

        // Update user team
        await axios.patch(`${process.env.VUE_APP_API_URL}user/${this.user.id}/join-team`, {
          team_id: teamId
        });

        // Emit event
        this.$socket.client.emit('userJoinsTeam', {
          pin: this.$route.params.pin
        });
      },
      checkNotAlreadyInTeam(teamId) {
        if(this.room.teams[0].id == teamId && this.room.teams[0].users.find(user => user.id == this.user.id)) {
          return false;
        }
        if(this.room.teams[1].id == teamId && this.room.teams[1].users.find(user => user.id == this.user.id)) {
          return false;
        }
        return true;
      },

      launchGame() {
        if(!this.room.teams[0].users?.length || !this.room.teams[1].users?.length) {
          this.err = "Une équipe est vide :("
          return;
        }

        this.$socket.client.emit(
          "launchGame",
          { pin: this.$route.params.pin },
          (res) => {
            if (res.error) {
              this.err = res.error;
            }
          }
        );
      },
    },
    sockets: {
      // New user connected to room
      userJoinsRoom(room) {
        this.room = room;
      },
      // User send a new pseudo
      userSendPseudo(room) {
        this.room = room;
      },
      // User joins a team
      userJoinsTeam(room) {
        this.room = room
      },
      // Game is launching
      launchGame() {
        router.push({ path: `/room/${this.$route.params.pin}` });
      },
    },
  };
</script>

<style scoped>
  .pseudo-pannel {
    margin-top: 1%;
    border: solid #44f5ba;
    box-shadow: 0 0 0.1vw 0vw #44f5ba, 0 0 0.5vw 0.1vw #44f5ba,
      inset 0 0 0.1vw 0 #44f5ba, inset 0 0 0.1vw 0 #44f5ba,
      inset 0 0 0.1vw 0 #44f5ba;
    border-radius: 10px;
    margin-left: 2%;
    margin-right: 2%;
    padding: 1%;
  }

  .back {
    margin-left: 2%;
    color: #fff;
    text-decoration: none;
  }

  .bottom-img > img {
    width: 10%;
      height: 10%;
    margin-top: -10%;
    margin-left: 90%;
    opacity: 90%;
  }

  #team {
    display: flex;
    flex-direction: column;
  }

  .connectedUsers {
    height: 50px;
    border: 1px solid #fff;
  }

  .id-room {
    font-size: 200%;
    color: #44f5ba;
  }



  .main {
    color: #44f5ba;
    font-size: 300%;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
  }

  .team-card {
    background: #fff;
    height: 250px;
    color: #090b31;
    width: 75%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .teams {
    display: flex;
    justify-content: space-between;
    height: 400px;
    margin-left: 10%;
  }
  .team-logo {
    background: black;
    border-radius: 100%;
    height: 25%;
  }
  .team-logo > img {
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
  }

  .logo1 {
    margin-left: -25%;
  }

  .logo2 {
    margin-right: -17.5%;
    position: relative;
  }
  .team-title {
    color: #44f5ba;
  }
  .team-1 {
    width: 50%;
    height: 300px;
  }
  .team-2 {
    width: 50%;
    height: 300px;
    margin-left: 5%;
  }

  .t2 {
    text-align: end;
    width: 75%;
  }

  .list-player {
    height: 200px;
    padding-top: 20%;
    font-weight: 700;
    font-size: 150%;
    text-align: center;
  }

  .list-player > ul {
    list-style: none;
  }

  .join-button {
    text-align: center;
    background-color: #090b31;
    border-radius: 30px;
    border: none;
    height: 42px;
    width: 60%;
    padding: 10px 0;
    font-weight: 700;
    box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
    transition: 0.25s;
    cursor: pointer;
    color: #fff;
  }

  .join-button:hover {
    background-color: #fff;
    color: #090b31;
  }

  .start-game {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .start-button {
    text-align: center;
    background-color: #fff;
    font-weight: 700;
    font-size: 150%;
    border-radius: 30px;
    height: 60px;
    width: 30%;
    box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
    transition: 0.25s;
    cursor: pointer;
    color: #090b31;
    border: none;
  }

  .start-button:hover {
    background-color: #090b31;
    color: #fff;
  }

  .error {
    color: red;
    background: #fff;
    text-align: center;
    width: 40%;
    height: 30px;
    border-radius: 10px;
    margin-top: 1%;
  }
</style>
