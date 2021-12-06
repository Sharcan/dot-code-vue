<template>
    <div>
        <Navbar />
        <div class="container">
            <slot name="content"></slot>
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
    .container {
        margin-top: 12vh;
        padding: 0 100px;
    }
</style>