<template>
	<div class="navbar">
		<img
			class="btn-moon"
			src="@/assets/images/btn-moon.svg"
			alt="Moon button"
		>
		<span class="navbar-title">SpaceCode</span>
		<img
			class="btn-astro"
			src="@/assets/images/btn-astro.svg"
			alt="Astro button"
		>
	</div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
    .navbar {
        height: 12vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 999;
        background-color: #090B31;
    }

    .btn-moon {
        height: 40%;
        margin-left: 40px;
    }
    .navbar-title {
        font-family: 'Geminis';
        font-size: 2rem;
    }
    .btn-astro {
        height: 40%;
        margin-right: 40px;
    }
</style>