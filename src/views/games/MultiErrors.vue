<template>
    <GameLayout>
        <!-- Content -->
        <template #content>
            <div class="game">
                <div class="gamer">
                    <h3 class="geminis subtitle">Corrige le code</h3>
                    <p class="explanation">
                        Le script ci-dessous comporte une erreur cachée. Essaye de la corriger puis appuie sur "Tester" pour voir le résultat et passer à l'exercice suivant. Bonne chance !
                    </p>
                    <div class="progression">
                        <span>Progression: {{ exercice_number }}/10</span>
                        <div class="progress mt-1">
                            <div class="progress-bar" role="progressbar" :style="'width: ' + (exercice_number * 10) + '%'"></div>
                        </div>
                    </div>
                    <div id="editor-1" @click="onIdeClick"></div>
                    <div class="under">
                        <div class="output">
                            <span>Console de sortie :</span><br>
                            <span class="output-result">{{ output }}</span>
                        </div>
                        <div class="button" @click="executeCode">TESTER</div>
                    </div>
                </div>
                <div class="opponent">
                    <h3 class="geminis subtitle">Ton adversaire: Player 2</h3>
                    <div class="progression">
                        <span>Progression de ton adversaire: {{ opponent_exercice_number }}/10</span>
                        <div class="progress mt-1">
                            <div class="progress-bar" role="progressbar" :style="'width: ' + (opponent_exercice_number * 10) + '%'"></div>
                        </div>
                    </div>
                    <div id="editor-2"></div>
                    <img src="@/assets/images/games/astronaut.png" alt="Astronaut" class="astronaut">
                </div>
            </div>
        </template>

        <!-- Sidebar -->
        <template #sidebar>
            <div class="profile">
                <span class="geminis pseudo" v-if="user">{{user.username}}</span>
                <img src="@/assets/images/games/user05.png" alt="Photo de profil">
            </div>
            <SpaceButton text="Déconnexion" width="small" class="deconnexion" />
            <div class="links">
                <div class="link-container">
                    <a href="#" class="geminis">Space Odity</a>
                    <div class="img-container">
                        <img src="@/assets/images/games/space-icon.png" alt="Dashboard">
                    </div>
                </div>
                <div class="link-container active">
                    <a href="#" class="geminis">Space games</a>
                    <div class="img-container">
                        <img src="@/assets/images/games/code-icon.png" alt="Space games">
                    </div>
                </div>
                <div class="link-container">
                    <a href="#" class="geminis">Paramètres</a>
                    <div class="img-container">
                        <img src="@/assets/images/games/params-icon.png" alt="Paramètres">
                    </div>
                </div>
            </div>
            <div class="badges">
                <h5 class="geminis">Badges</h5>
                <div class="badges-list">
                    <div class="badge"></div>
                    <div class="badge"></div>
                    <div class="badge"></div>
                    <div class="badge"></div>
                    <div class="badge"></div>
                    <div class="badge"></div>
                </div>
            </div>
        </template>
    </GameLayout>
</template>

<script>
    import GameLayout from '@/layouts/GameLayout'
    import SpaceButton from '@/components/SpaceButton'
    import * as monaco from 'monaco-editor'
    import $ from 'jquery'
    import exercices from '../../../exercices/errors'
    import router from "../../router";
    import * as MonacoCollabExt from "@convergencelabs/monaco-collab-ext";

    export default {
        name: 'MultiErrors',
        components: {
            GameLayout,
            SpaceButton
        },
        data() {
            return {
                language: 'javascript',
                editorGamer: null,
                editorOpponent: null,
                output: null,
                exercice_number: 0,
                loading: false,
                opponent_exercice_number: 0,

                /** Variables pour du joueur et des différentes équipes */
                connectedUsers: [],
                team_1: [],
                team_2: [],
                user: null,
                myTeam: null,

                /** Variables pour le partage des IDEs */
                remoteCursorManagerGamer: null,
                remoteCursorManagerOpponent: null,
                remoteContentManagerGamer: null,
                remoteContentManagerOpponent: null,
            }
        },
        watch: {
            exercice_number(newVal) {
                if(newVal <= 9) {
                    // Next exercice
                    this.editorGamer.getModel().setValue(exercices[newVal].code);
                    this.output = null;
                    this.loading = false;
                } else {
                    // Success page
                    // TODO - change route
                    router.push({ path: `/game/win` });
                }

                // Emit exercice number
                this.$socket.client.emit('nextExercice', {
                    pin: this.$route.params.pin
                });
            },
            opponent_exercice_number(newVal) {
                if(newVal <= 9) {
                    // Next exercice for opponent
                    this.editorOpponent.getModel().setValue(exercices[newVal].code);
                } else {
                    // Loose page
                    // TODO - change route
                    router.push({ path: `/game/loose` });
                }
            }
        },
        methods: {
            executeCode() {
                if(!this.loading) {
                    $.ajax({
                        url: process.env.VUE_APP_API_URL + 'editor',
                        method: 'POST',
                        data: {
                            language: this.language,
                            code: monaco.editor.getModels()[0].getValue(),
                            expectedResult: exercices[this.exercice_number].expectedResult,
                            expectedCode: exercices[this.exercice_number].expectedCode
                        },
                        success: (res) => {
                            if(res.error) {
                                // Display error
                                $('.output-result').css('color', 'red');
                                this.output = res.error;
                            } else {
                                // Display result
                                $('.output-result').css('color', '#fff');
                                this.output = res.output;
                                this.loading = true;

                                // Next exercice
                                setTimeout(() => {
                                    this.exercice_number++;
                                }, 1500);
                            }
                        }
                    });
                }
            },

            /**
             * On crée les différents curseurs pour les IDEs
             */
            createCursorsGamer() {
                const teamGamer = this.myTeam === 'team_1' ? this.team_1 : this.team_2;
                const teamOpponent = this.myTeam !== 'team_1' ? this.team_1 : this.team_2;

                teamGamer.forEach((user) => {
                    // Création du curseur
                    const newCursor = this.remoteCursorManagerGamer.addCursor(
                        user.socketId,
                        this.getRandomColor(),
                        user.username
                    );

                    // Early return pour ne pas créer de curseur pour le propre utilisateur
                    if (user.socketId === this.user.socketId) {
                        // this.user.cursor = newCursor;
                        return;
                    }

                    // Ajout du curseur pour le user 
                    user.cursor = newCursor;
                    newCursor.setPosition({column: 1, lineNumber: 1});
                });
                // Création des curseur sur l'autre IDE
                this.createCursorsOpponent(teamOpponent);
            },

            createCursorsOpponent(team) {
                team.forEach((user) => {
                    // Création du curseur
                    const newCursor = this.remoteCursorManagerOpponent.addCursor(
                        user.socketId,
                        this.getRandomColor(),
                        user.username
                    );

                    // Early return pour ne pas créer de curseur pour le propre utilisateur
                    if (user.socketId === this.user.socketId) {
                        // this.user.cursor = newCursor;
                        return;
                    }

                    // ajout du curseur pour le user
                    user.cursor = newCursor;
                    newCursor.setPosition({column:1, lineNumber: 1});
                });
            },

            onIdeClick() {
              this.$socket.client.emit('gamerCursorChange',
                    {pin: this.$route.params.pin, user: this.user, position: this.editorGamer.getPosition()}
              );
            },

            onIdeAction() {
              this.editorGamer.onKeyUp((e) => {
                if (e.code === 'Tab') {
                    this.$socket.client.emit('onTab', {
                        value: this.editorGamer.getValue(), 
                        team: this.myTeam, 
                        pin: this.$route.params.pin
                    });
                }
                this.$socket.client.emit('gamerCursorChange', {
                    pin: this.$route.params.pin, 
                    user: this.user, 
                    position: this.editorGamer.getPosition()
                });
              })
            },

            sharedContentIde(thisVue) {
                /** Création de l'objet permettant de rentranscrire écriture pour l'IDE principal */
                this.remoteContentManagerGamer = new MonacoCollabExt.EditorContentManager({
                    editor: this.editorGamer,
                    onInsert(index, text) {
                        thisVue.$socket.client.emit('newTextInsert', {index: index, value: text, team: thisVue.myTeam, pin: thisVue.$route.params.pin});
                    },
                    onDelete(index, length) {
                        thisVue.$socket.client.emit('newTextDelete', {
                            index: index, 
                            length: length, 
                            team: thisVue.myTeam, 
                            pin: thisVue.$route.params.pin
                        });
                    }
                });

                /** Création de l'objet permettant de rentranscrire écriture pour l'IDE secondaire */
                this.remoteContentManagerOpponent = new MonacoCollabExt.EditorContentManager({
                    editor: this.editorOpponent,
                });
            },

            getRandomColor() {
                return '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        },
        mounted() {
            this.editorGamer = monaco.editor.create(document.getElementById("editor-1"), {
                value: exercices[this.exercice_number].code,
                language: this.language,
                theme: 'vs-dark'
            });
            this.editorOpponent = monaco.editor.create(document.getElementById("editor-2"), {
                value: exercices[this.exercice_number].code,
                language: this.language,
                theme: 'vs-dark'
            });

            /** Création de l'objet permettant de créer plusieurs curseurs pour l'IDE principal */
            this.remoteCursorManagerGamer = new MonacoCollabExt.RemoteCursorManager({
                editor: this.editorGamer,
                tooltips: true,
                tooltipDuration: 4
            });

            /** Création de l'objet permettant de créer plusieurs curseurs pour l'IDE secondaire */
            this.remoteCursorManagerOpponent = new MonacoCollabExt.RemoteCursorManager({
                editor: this.editorOpponent,
                tooltips: true,
                tooltipDuration: 4
            });

            this.$socket.client.emit('getConnectedUsers', {pin: this.$route.params.pin}, res => {
                if(res.error) {
                    router.push({ path: `/room-connection`});
                    return;
                } 
                this.connectedUsers = res.room.connectedUsers;
                this.team_1 = res.room.team_1;
                this.team_2 = res.room.team_2;
                this.user = res.user;
                this.myTeam = res.user.team;
                console.log(this.user);
                this.createCursorsGamer();
            });

            /** Création des objets pour l'écriture dans l'ide */
            this.sharedContentIde(this);
            this.onIdeAction();
        },

        sockets: {
            gamerCursorChange(cursorInformations) {
                const team = cursorInformations.user.team === 'team_1' ? this.team_1 : this.team_2;
                const user = team.find((user) => user.socketId === cursorInformations.user.socketId)
                user.cursor.setPosition(cursorInformations.position);
                user.cursor.show();
            },

            newTextInsert(value) {
                const mainIde = this.myTeam === value.team;
                if (mainIde) {
                    this.remoteContentManagerGamer.insert(value.index, value.value);
                    this.remoteContentManagerGamer.dispose();
                    return;
                }
                this.remoteContentManagerOpponent.insert(value.index, value.value);
                this.remoteContentManagerOpponent.dispose();
            },

            newTextDelete(value) {
                const mainIde = this.myTeam === value.team;
                if (mainIde) {
                    this.remoteContentManagerOpponent.delete(value.index, value.length);
                    this.remoteContentManagerOpponent.dispose();
                    return;
                }
                this.remoteContentManagerOpponent.delete(value.index, value.length);
                this.remoteContentManagerOpponent.dispose();
            },

            onTab(newText) {
                const mainIde = this.myTeam === newText.team;
                 if (mainIde) {
                    this.editorGamer.setValue(newText.value);
                    return;
                }
                this.editorOpponent.setValue(newText.value);
            },

            opponentSuccess() {
                this.opponent_exercice_number++;
            }
        }
    }
</script>

<style scoped>
    /* Content */
    .game {
        width: 100%;
        height: 85%;
        border: 3px solid #44F5BA;
        border-radius: 15px;
        display: flex;
        padding: 30px 15px;
    }
    .gamer {
        width: 70%;
        padding-right: 40px;
    }
    .opponent {
        width: 30%;
    }
    .subtitle {
        color: #44F5BA;
        font-size: 1.3rem;
    }
    .explanation {
        font-size: 0.8rem;
    }
    .progression {
        margin-bottom: 20px;
        font-size: 0.8rem;
    }
    #editor-1 {
        height: 320px;
    }
    #editor-2 {
        height: 180px;
    }
    .progress-bar {
        background-color: #44F5BA;
    }
    .under {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    .output {
        width: 100%;
        height: 75px;
        background-color: #1e1e1e;
        padding: 10px 20px;
    }
    .output-result::before {
        content: '> ';
    }
    .button {
        text-align: center;
        background-color: #fff;
        border-radius: 30px;
        font-weight: 700;
        padding: 4px 0;
        box-shadow: 0px 0px 50px 5px rgba(48,181,255,0.8);
        transition: 0.25s;
        cursor: pointer;
        color: #090B31;
        width: 20%;
        margin-right: 20px;
        margin-top: 20px;
    }
    .astronaut {
        width: 110%;
        margin-top: 15px;
    }

    /* Sidebar */
    .profile {
        width: 85%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .pseudo {
        color: #44F5BA;
        font-size: 1.5rem;
    }
    .profile img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
    }
    .deconnexion {
        width: 80%;
        margin-top: 30px;
        margin-bottom: 50px;
    }

    .links {
        display: flex;
        flex-direction: column;
        padding: 0 40px;
        width: 100%;
    }
    .link-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .link-container a {
        color: #090B31;
        text-decoration: none;
        font-size: 1.2rem;
        margin-top: 5px;
    }
    .active a {
        color: #44F5BA;
    }
    .active .img-container {
        background-color: #44F5BA;
    }
    .img-container {
        background-color: #090B31;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-container img {
        width: 50%;
    }

    .badges {
        width: 100%;
        padding: 0 30px;
        margin-top: 20px;
    }
    .badges h5 {
        color: #44F5BA;
        font-size: 1.2rem;
    }
    .badges-list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .badge {
        background-color: #090B31;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }

    #editor {
        overflow-y: hidden;
    }
    #editor-2 {
        overflow-y: hidden;
        filter: blur(3px);
    }
</style>