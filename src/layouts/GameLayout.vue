<template>
	<div class="body">
		<div class="game-container">
			<div class="content-part">
				<Topbar />
				<slot name="content" />
			</div>
			<div class="sidebar">
				<img
					src="@/assets/images/games/halfmoon.png"
					alt="Lune"
					class="moon"
				>
				<h1 class="geminis text-center sidebar-title">
					Space<br>Code
				</h1>
				<slot name="sidebar" />
			</div>
		</div>
	</div>
</template>

<script>
    import Topbar from '@/layouts/partials/game-layout/Topbar'

    export default {
        name: 'GameLayout',
        components: {
            Topbar
        }
    }
</script>

<style scoped>
    .game-container {
        display: flex;
        height: 100vh;
    }
    .content-part {
        width: 80%;
        height: 100%;
        margin-left: 30px;
        margin-right: 30px;
    }
    .sidebar {
        width: 20%;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #090B31;
    }
    .moon {
        margin-top: 25px;
        margin-bottom: 15px;
        width: 40px;
    }
    .sidebar-title {
        font-size: 2.5rem;
        margin-bottom: 30px;
        font-size: 2rem;
    }
</style>