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
        <button class="go">Je suis prêt</button>
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
                        // Add user to team if not already in, and remove from other team
                        if(team == 'team_1' && !this.team_1.find(member => member.socketId == res.user.socketId)) {
                            this.team_1.push(res.user);
                            this.team_2.splice(this.team_2.indexOf(this.team_2.find(member => member.socketId == res.user.socketId)));
                        } else if(team == 'team_2' && !this.team_2.find(member => member.socketId == res.user.socketId)) {
                            this.team_2.push(res.user);
                            this.team_1.splice(this.team_1.indexOf(this.team_1.find(member => member.socketId == res.user.socketId)));
                        }
                    }
                });
            }
        },
        mounted() {
            this.$socket.client.emit('getConnectedUsers', {pin: this.$route.params.pin}, res => {
                if(res.error) {
                    router.push({ path: `/room-connection`});
                } else {
                    this.connectedUsers = res.connectedUsers;
                    this.team_1 = res.team_1;
                    this.team_2 = res.team_2; 
                }
            })
        },
        sockets: {
            newUserConnected: (user) => {
                console.log('new user');
                this.connectedUsers.push(user);
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