<template>
    <div class="button">
        {{ text.toUpperCase() }}
    </div>
</template>

<script>
    export default {
        name: 'SpaceButton',
        props: [
            'text'
        ]
    }
</script>

<style scoped>
    .button {
        width: 100%;
        text-align: center;
        background-color: #090B31;
        border-radius: 30px;
        font-weight: 700;
        padding: 12px 0;
        box-shadow: 0px 0px 50px 5px rgba(48,181,255,0.8);
    }
    .button:hover {
        background-color: #fff;
        color: #4D2A9C;
        cursor: pointer;
    }
</style>