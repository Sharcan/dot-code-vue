<template>
  <div id="Team">
    <h4 class="id-room">
      #<span class="geminis">{{ $route.params.pin }}</span>
    </h4>
    <h3 class="geminis main">
      Rejoins ton équipe avant <br />
      de commencer la partie !
    </h3>
    <div class="teams">
      <div class="team-1">
        <h3 class="team-title geminis t1">Equipe ixion</h3>
        <div class="team-card">
          <div class="text-card">
            <div class="list-player" v-if="team_1.length > 0">
              <ul>
                <li v-for="(user, index) in team_1" :key="user.socketId">
                  Joueur {{ index + 1 }} : <br />
                  {{ user.username }}
                </li>
              </ul>
            </div>
            <div class="list-player" v-else>
              <p>
                L'équipe est actuellement <br />
                vide
              </p>
            </div>
          </div>

          <button class="join-button" @click="joinTeam('team_1')">
            Rejoindre l'équipe 1
          </button>
        </div>
      </div>
      <div class="team-logo logo1">
        <img src="@/assets/images/satelite.png" />
      </div>
      <div class="team-logo logo2">
        <img src="@/assets/images/meteore.png" />
      </div>
      <div class="team-2">
        <h3 class="team-title geminis t2">Equipe Météion</h3>
        <div class="team-card">
          <div class="text-card">
            <div class="list-player" v-if="team_2.length > 0">
              <ul>
                <li v-for="(user, index) in team_2" :key="user.socketId">
                  Joueur {{ index + 1 }} : <br />
                  {{ user.username }}
                </li>
              </ul>
            </div>
            <div class="list-player" v-else>
              <div>
                <p>
                  L'équipe est actuellement <br />
                  vide
                </p>
              </div>
            </div>
          </div>

          <button class="join-button" @click="joinTeam('team_2')">
            Rejoindre l'équipe 2
          </button>
        </div>
      </div>
    </div>

    <div class="start-game">
      <button class="start-button" @click="launchGame()">
        Démarrer la partie !
      </button>

      <div v-if="err" class="error">
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "Team",
  data() {
    return {
      connectedUsers: [],
      team_1: [],
      team_2: [],
      err: null,
    };
  },
  methods: {
    joinTeam(team) {
      this.$socket.client.emit(
        "joinTeam",
        { pin: this.$route.params.pin, team: team },
        (res) => {
          if (!res.error) {
            this.changeUserTeam(res.user, team);
          } else {
            console.log(res.error);
            this.err = res.error;
          }
        }
      );
    },
    changeUserTeam(user, team) {
      // Add user to team and remove from other team
      if (team == "team_1") {
        this.team_1.push(user);
        let userPosition = this.team_2.indexOf(
          this.team_2.find((member) => member.socketId == user.socketId)
        );
        if (userPosition != -1) {
          this.team_2.splice(userPosition, 1);
        }
      } else if (team == "team_2") {
        this.team_2.push(user);
        let userPosition = this.team_1.indexOf(
          this.team_1.find((member) => member.socketId == user.socketId)
        );
        if (userPosition != -1) {
          this.team_1.splice(userPosition, 1);
        }
      }
    },
    launchGame() {
      this.$socket.client.emit(
        "launchGame",
        { pin: this.$route.params.pin },
        (res) => {
          if (!res.error) {
            router.push({ path: `/game/${this.$route.params.pin}` });
          } else {
            console.log(res.error);
            this.err = res.error;
          }
        }
      );
    },
  },
  mounted() {
    this.$socket.client.emit(
      "getConnectedUsers",
      { pin: this.$route.params.pin },
      (res) => {
        if (res.error) {
          router.push({ path: `/room-connection` });
        } else {
          this.connectedUsers = res.room.connectedUsers;
          this.team_1 = res.room.team_1 ?? [];
          this.team_2 = res.room.team_2 ?? [];
        }
      }
    );
  },
  sockets: {
    // New user connected to room
    newUserConnected(params) {
      this.connectedUsers.push(params.user);
    },
    // User join a team
    userJoinTeam(params) {
      this.changeUserTeam(params.user, params.team);
    },
    // Game is launching
    launchGame() {
      router.push({ path: `/game/${this.$route.params.pin}` });
    },
  },
};
</script>

<style>
#Team {
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
