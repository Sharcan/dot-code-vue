<template>
	<div class="topbar">
		<div class="search">
			<i class="fa fa-search" />
			<input
				type="text"
				class="form-control form-control-sm"
				placeholder="Recherche de profils"
			>
		</div>
		<div class="users">
			<i class="fa fa-chevron-left" />
			<img
				src="@/assets/images/games/user01.png"
				alt="User 1"
				class="user-image"
			>
			<img
				src="@/assets/images/games/user02.png"
				alt="User 2"
				class="user-image"
			>
			<img
				src="@/assets/images/games/user03.png"
				alt="User 3"
				class="user-image"
			>
			<img
				src="@/assets/images/games/user04.png"
				alt="User 4"
				class="user-image"
			>
			<!-- <img src="@/assets/images/games/user05.png" alt="User 5" class="user-image"> -->
			<i class="fa fa-chevron-right" />
		</div>
		<div class="title geminis">
			Welcome to your space games !
		</div>
	</div>
</template>

<script>
    export default {
        name: 'Topbar'
    }
</script>

<style scoped>
    .topbar {
        width: 100%;
        height: 11%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .search {
        width: 25%;
        display: flex;
        align-items: center;
    }
    .fa-search {
        margin-right: 10px;
    }
    .users {
        width: 27%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .user-image {
        border-radius: 50%;
        width: 35px;
        height: 35px;
    }
    .title {
        width: 30%;
        font-size: 1.3rem;
    }
</style>