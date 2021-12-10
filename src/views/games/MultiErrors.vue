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
                            <div class="progress-bar bg-success" role="progressbar" style="width: 10%"></div>
                        </div>
                    </div>
                </div>
                <div class="opponent">
                    <h3 class="geminis subtitle">Ton adversaire: Player 2</h3>
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
                        <img src="@/assets/images/games/params-icon.png" alt="Space games">
                    </div>
                </div>
                <div class="link-container">
                    <a href="#" class="geminis">Paramètres</a>
                    <div class="img-container">
                        <img src="@/assets/images/games/code-icon.png" alt="Paramètres">
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

    export default {
        name: 'MultiErrors',
        components: {
            GameLayout,
            SpaceButton
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