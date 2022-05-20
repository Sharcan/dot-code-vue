<template>
	<div class="body">
		<Navbar />
		<div class="home-container">
			<slot name="content" />
		</div>
		<Footer />
	</div>
</template>

<script>
    import Navbar from '@/layouts/partials/home-layout/Navbar'
    import Footer from '@/layouts/partials/home-layout/Footer'

    export default {
        name: 'HomeLayout',
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style scoped>
    .home-container {
        margin-top: 12vh;
        padding: 0 100px;
    }
</style>