<template>
    <div class="navbar">
        <img class="btn-moon" src="@/assets/images/btn-moon.svg" alt="Moon button">
        <img class="title" src="@/assets/images/spacecode.svg" alt="SpaceCode">
        <img class="btn-astro" src="@/assets/images/btn-astro.svg" alt="Astro button">
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
        z-index: 200;
        background-color: #090B31;
    }

    .btn-moon {
        height: 40%;
        margin-left: 40px;
    }
    .title {
        height: 45%;
    }
    .btn-astro {
        height: 40%;
        margin-right: 40px;
    }
</style>