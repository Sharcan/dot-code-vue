<template>
    <div>
        <div class="connectedUsers">
            <span v-for="user in connectedUsers" :key="user.socketId">{{ user.username }} </span>
        </div>
        <div class="teams">
            <div class="team-1">
                <h3>Equipe 1</h3>
                <ul>
                    <li v-for="user in team_1" :key="user.socketId">{{ user.username }}</li>
                </ul>
                <button @click="joinTeam('team_1')">Rejoindre</button>
            </div>
            <div class="team-2">
                <h3>Equipe 2</h3>
                <ul>
                    <li v-for="user in team_2" :key="user.socketId">{{ user.username }}</li>
                </ul>
                <button @click="joinTeam('team_2')">Rejoindre</button>
            </div>
        </div>
        <button @click="launchGame()">Lancer la partie</button>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: 'Team',
        data() {
            return {
                connectedUsers: [],
                team_1: [],
                team_2: []
            }
        },
        methods: {
            joinTeam(team) {
                this.$socket.client.emit('joinTeam', {pin: this.$route.params.pin, team: team}, res => {
                    if(!res.error) {
                        this.changeUserTeam(res.user, team);
                    } else {
                        console.log(res.error);
                    }
                });
            },
            changeUserTeam(user, team) {
                // Add user to team and remove from other team
                if(team == 'team_1') {
                    this.team_1.push(user);
                    let userPosition = this.team_2.indexOf(this.team_2.find(member => member.socketId == user.socketId));
                    if(userPosition != -1) {
                        this.team_2.splice(userPosition, 1);
                    }
                } else if(team == 'team_2') {
                    this.team_2.push(user);
                    let userPosition = this.team_1.indexOf(this.team_1.find(member => member.socketId == user.socketId));
                    if(userPosition != -1) {
                        this.team_1.splice(userPosition, 1);
                    }
                }
            },
            launchGame() {
                this.$socket.client.emit('launchGame', {pin: this.$route.params.pin}, res => {
                    if(!res.error) {
                        router.push({ path: `/game/${this.$route.params.pin}`});
                    } else {
                        console.log(res.error);
                    }
                });
            }
        },
        mounted() {
            this.$socket.client.emit('getConnectedUsers', {pin: this.$route.params.pin}, res => {
                if(res.error) {
                    router.push({ path: `/room-connection`});
                } else {
                    this.connectedUsers = res.room.connectedUsers;
                    this.team_1 = res.room.team_1;
                    this.team_2 = res.room.team_2; 
                }
            })
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
                router.push({ path: `/game/${this.$route.params.pin}`});
            }
        }
    }
</script>

<style>
    .connectedUsers {
        height: 50px;
        border: 1px solid #fff;
    }

    .teams {
        display: flex;
        justify-content: space-around;
    }
    .team-1 {
        width: 50%;
        height: 300px;
        border: 1px solid #fff;
    }
    .team-2 {
        width: 50%;
        height: 300px;
        border: 1px solid #fff;
    }
</style>