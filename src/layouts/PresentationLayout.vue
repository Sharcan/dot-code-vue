<template>
    <div>
        <Navbar></Navbar>
        <div class="container">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/layouts/partials/presentation-layout/Navbar'

    export default {
        name: 'PresentationLayout',
        components: {
            Navbar
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 12vh;
        padding: 0 100px;
    }
</style>