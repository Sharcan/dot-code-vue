<template>
    <GameLayout>
        <!-- Content -->
        <template #content>
            <div class="game">
                <div class="gamer">
                    <h3 class="geminis subtitle">Corrige le code</h3>
                    <p class="explanation">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <div class="progression">
                        <span>Progression: 1/10</span>
                        <div class="progress mt-1">
                            <div class="progress-bar" role="progressbar" style="width: 10%"></div>
                        </div>
                    </div>
                    <div id="editor-1"></div>
                    <div class="button">TESTER</div>
                </div>
                <div class="opponent">
                    <h3 class="geminis subtitle">Ton adversaire: Player 2</h3>
                    <div class="progression">
                        <span>Progression de ton adversaire: 1/10</span>
                        <div class="progress mt-1">
                            <div class="progress-bar" role="progressbar" style="width: 10%"></div>
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
                <span class="geminis pseudo">Tirrador</span>
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

    export default {
        name: 'MultiErrors',
        components: {
            GameLayout,
            SpaceButton
        },
        data() {
            return {
                language: 'php',
                editorGamer: null,
                output: null
            }
        },
        methods: {
            executeCode() {
                $.ajax({
                    url: 'http://localhost:3000/editor',
                    method: 'POST',
                    data: {
                        language: this.language,
                        code: monaco.editor.getModels()[0].getValue()
                    },
                    success: (res) => {
                        this.output = res;
                    }
                })
            }
        },
        mounted() {
            this.editorGamer = monaco.editor.create(document.getElementById("editor-1"), {
                value: "<?php \n\nfunction hello() {\n\techo 'Hello world !';\n} \nhello();",
                language: "php",
                theme: 'vs-dark'
            });
            this.editorOpponent = monaco.editor.create(document.getElementById("editor-2"), {
                value: "<?php \n\nfunction hello() {\n\techo 'Hello world !';\n} \nhello();",
                language: "php",
                theme: 'vs-dark'
            });
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
</style>