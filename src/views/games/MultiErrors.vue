<template>
	<GameLayout>
		<!-- Content -->
		<template #content>
			<div class="game">
				<div class="gamer">
					<h3 class="geminis subtitle">
						Corrige le code
					</h3>
					<p class="explanation">
						Le script ci-dessous comporte une erreur cachée. Essaye de la corriger puis appuie sur "Tester" pour voir le résultat et passer à l'exercice suivant. Bonne chance !
					</p>
					<div class="progression">
						<span>Progression: {{ exercise_number }}/10</span>
						<div class="progress mt-1">
							<div
								class="progress-bar"
								role="progressbar"
								:style="'width: ' + (exercise_number * 10) + '%'"
							/>
						</div>
					</div>
					<div
						id="editor-1"
						@click="onIdeClick"
					/>
					<div class="under">
						<div class="output">
							<span>Console de sortie :</span><br>
							<span class="output-result">{{ output }}</span>
						</div>
						<div
							class="button"
							@click="executeCode"
						>
							TESTER
						</div>
					</div>
				</div>
				<div class="opponent">
					<h3 class="geminis subtitle">
						Ton adversaire: Player 2
					</h3>
					<div class="progression">
						<span>Progression de ton adversaire: {{ opponent_exercise_number }}/10</span>
						<div class="progress mt-1">
							<div
								class="progress-bar"
								role="progressbar"
								:style="'width: ' + (opponent_exercise_number * 10) + '%'"
							/>
						</div>
					</div>
					<div id="editor-2" />
					<img
						src="@/assets/images/games/astronaut.png"
						alt="Astronaut"
						class="astronaut"
					>
				</div>
			</div>
		</template>

		<!-- Sidebar -->
		<template #sidebar>
			<div class="profile">
				<span
					v-if="user"
					class="geminis pseudo"
				>{{ user.username }}</span>
				<img
					src="@/assets/images/games/user05.png"
					alt="Photo de profil"
				>
			</div>
			<SpaceButton
				text="Déconnexion"
				width="small"
				class="deconnexion"
			/>
			<div class="links">
				<div class="link-container">
					<a
						href="#"
						class="geminis"
					>Space Odity</a>
					<div class="img-container">
						<img
							src="@/assets/images/games/space-icon.png"
							alt="Dashboard"
						>
					</div>
				</div>
				<div class="link-container active">
					<a
						href="#"
						class="geminis"
					>Space games</a>
					<div class="img-container">
						<img
							src="@/assets/images/games/code-icon.png"
							alt="Space games"
						>
					</div>
				</div>
				<div class="link-container">
					<a
						href="#"
						class="geminis"
					>Paramètres</a>
					<div class="img-container">
						<img
							src="@/assets/images/games/params-icon.png"
							alt="Paramètres"
						>
					</div>
				</div>
			</div>
			<div class="badges">
				<h5 class="geminis">
					Badges
				</h5>
				<div class="badges-list">
					<div class="badge" />
					<div class="badge" />
					<div class="badge" />
					<div class="badge" />
					<div class="badge" />
					<div class="badge" />
				</div>
			</div>
		</template>
	</GameLayout>
</template>

<script>
    import GameLayout from '@/layouts/GameLayout'
    import SpaceButton from '@/components/SpaceButton'
    import $ from 'jquery'
    import router from "../../router";
    import exercices from '../../../exercices/errors'
    import loader from "@monaco-editor/loader";
    import * as MonacoCollabExt from "@convergencelabs/monaco-collab-ext";
    import axios from 'axios'

    export default {
        name: 'MultiErrors',
        components: {
            GameLayout,
            SpaceButton
        },
        data() {
            return {
                language: 'javascript',
                userEditor: null,
                opponentEditor: null,
                output: null,
                loading: false,

                user: null,
                room: null,

                exercise_number: 0,
                opponent_exercise_number: 0,

                /** Variables pour le partage des IDEs */
                userRemoteCursorManager: null,
                opponentRemoteCursorManager: null,
                userEditorContentManager: null,
                opponentEditorContentManager: null,
            }
        },
        watch: {
            async exercise_number(newVal) {

                await axios.patch(
                    process.env.VUE_APP_API_URL + `team/${this.user.team.id}/add-point`,
                    {
                      points: newVal
                    }
                ).then(res => res.data)
                .catch(error => console.warn('Warning: ', error));

                // Emit exercise number
                this.$socket.client.emit('nextExercise', {
                    pin: this.$route.params.pin
                });

                if(newVal <= 9) {
                    // Next exercise
                    this.userEditor.getModel().setValue(exercices[newVal].code);
                    this.output = null;
                    this.loading = false;
                } else {
                    // Success page
                    await router.push({path: `/room-win`});
                }
            },
            async opponent_exercise_number(newVal) {
                if(newVal <= 9) {
                    // Next exercise for opponent
                    this.opponentEditor.getModel().setValue(exercices[newVal].code);
                } else {
                    // Loose page
                    await router.push({ path: `/room-lose` });
                }
            }
        },
        async mounted() {
            document.title = 'Corrige le code | DotCode'

            // Get user
            const userId = parseInt(localStorage.getItem('user'));
            this.user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId)
                .then(res => res.data)
                .catch(() => this.$router.push({ name: 'room.connection' }));

            // Get room
            this.room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.$route.params.pin}`)
                .then(res => res.data)
                .catch(() => this.$router.push({ name: 'room.connection' }));

            const userTeam = this.room.teams.find(team => team.id === this.user.team.id);
            const opponentTeam = this.room.teams.find(team => team.id !== this.user.team.id);

            // Initialization of the team number, in case of reloading
            this.exercise_number = userTeam.points;
            this.opponent_exercise_number = opponentTeam.points;

            // Init Monaco
            const monaco = await loader.init()

            // Create editors
            this.userEditor = monaco.editor.create(document.getElementById("editor-1"), {
                value: exercices[userTeam.points].code,
                language: this.language,
                theme: 'vs-dark',
                minimap: {enabled: false}
            });
            this.opponentEditor = monaco.editor.create(document.getElementById("editor-2"), {
                value: exercices[opponentTeam.points].code,
                language: this.language,
                theme: 'vs-dark',
                lineNumbers: false,
                minimap: {enabled: false}
            });

            // Cursor management
            this.userRemoteCursorManager = new MonacoCollabExt.RemoteCursorManager({
                editor: this.userEditor,
                tooltips: true,
                tooltipDuration: 4
            });
            this.opponentRemoteCursorManager = new MonacoCollabExt.RemoteCursorManager({
                editor: this.opponentEditor,
                tooltips: true,
                tooltipDuration: 4
            });

            // Create cursors
            userTeam.users.forEach(user => {
                // Don't create for this user
                if (user.id === this.user.id) {
                    return;
                }

                // Add cursor
                const newCursor = this.userRemoteCursorManager.addCursor(
                    user.id.toString(),
                    this.getRandomColor(),
                    user.pseudo
                );
                newCursor.setPosition({column: 1, lineNumber: 1});

                // Add to user
                this.room.users.find(u => u.id === user.id ).cursor = newCursor;
            });

            opponentTeam.users.forEach(user => {
                // Add cursor
                const newCursor = this.opponentRemoteCursorManager.addCursor(
                    user.id.toString(),
                    this.getRandomColor(),
                    user.pseudo
                );
                newCursor.setPosition({column: 1, lineNumber: 1});

                // Add to user
                this.room.users.find(u => u.id === user.id).cursor = newCursor;
            });

            // Editor content managers
            const vm = this;
            this.userEditorContentManager = new MonacoCollabExt.EditorContentManager({
                editor: this.userEditor,
                onInsert(index, text) {
                    vm.$socket.client.emit('newTextInsert', {
                        index: index, 
                        text: text, 
                        team_id: vm.user.team.id, 
                        pin: vm.$route.params.pin
                    });
                },
                onDelete(index, length) {
                    vm.$socket.client.emit('newTextDelete', {
                        index: index, 
                        length: length, 
                        team_id: vm.user.team.id, 
                        pin: vm.$route.params.pin
                    });
                }
            });
            this.opponentEditorContentManager = new MonacoCollabExt.EditorContentManager({
                editor: this.opponentEditor,
            });

            // IDE on key up
            this.userEditor.onKeyUp((e) => {
                if (e.code === 'Tab') {
                    this.$socket.client.emit('onTab', {
                        text: this.userEditor.getValue(),
                        team_id: this.user.team.id, 
                        pin: this.$route.params.pin
                    });
                }
                this.$socket.client.emit('userCursorChange', {
                    pin: this.$route.params.pin, 
                    user: this.user, 
                    position: this.userEditor.getPosition()
                });
            });
        },
        methods: {
            executeCode() {
                if(!this.loading) {
                    $.ajax({
                        url: process.env.VUE_APP_API_URL + 'editor',
                        method: 'POST',
                        data: {
                            language: this.language,
                            code: this.userEditor.getModel().getValue(),
                            expectedResult: exercices[this.exercise_number].expectedResult,
                            expectedCode: exercices[this.exercise_number].expectedCode
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
                                    this.exercise_number++;
                                }, 1500);
                            }
                        }
                    });
                }
            },

            onIdeClick() {
                this.$socket.client.emit('userCursorChange', {
                    pin: this.$route.params.pin,
                    user: this.user,
                    position: this.userEditor.getPosition()
                });
            },

            getRandomColor() {
                return '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        },

        sockets: {
            userCursorChange(params) {
                this.room.users.find(user => user.id === params.user.id).cursor.setPosition(params.position);
                this.room.users.find(user => user.id === params.user.id).cursor.show();
            },

            newTextInsert(params) {
                if (this.user.team.id === params.team_id) {
                    this.userEditorContentManager.insert(params.index, params.text);
                    this.userEditorContentManager.dispose();
                } else {
                    this.opponentEditorContentManager.insert(params.index, params.text);
                    this.opponentEditorContentManager.dispose();
                }
            },

            newTextDelete(params) {
                if (this.user.team.id === params.team_id) {
                    this.userEditorContentManager.delete(params.index, params.length);
                    this.userEditorContentManager.dispose();
                } else {
                    this.opponentEditorContentManager.delete(params.index, params.length);
                    this.opponentEditorContentManager.dispose();
                }
            },

            onTab(params) {
                if (this.user.team.id === params.team_id) {
                    this.userEditor.setValue(params.text);
                } else {
                    this.opponentEditor.setValue(params.text);
                }
            },

            opponentSuccess() {
                this.opponent_exercise_number++;
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