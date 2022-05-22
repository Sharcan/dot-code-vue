<template>
	<div class="footer">
		<a href="#">MENTIONS LEGALES</a>
		<a href="#">DONNEES PERSONNELLES & COOKIES</a>
		<a href="#">CONDITIONS D'UTILISATION</a>
		<a href="#">SIGNALER UN PROBLEME</a>
	</div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .footer {
        background-color: #090B31;
        font-size: 0.6rem;
        height: 50px;
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
    }
    .footer a {
        color: #fff;
        text-decoration: none;
        font-weight: 800;
    }
</style>