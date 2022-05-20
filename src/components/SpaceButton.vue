<template>
	<router-link :to="{ name: link }">
		<div class="button">
			{{ text.toUpperCase() }} 
		</div>
	</router-link>
</template>

<script>
    export default {
        name: 'SpaceButton',
        props: {
            text: String,
            link: String
        }
    }
</script>

<style scoped>
    .button {
        text-align: center;
        background-color: #090B31;
        border-radius: 30px;
        font-weight: 700;
        padding: 12px 0;
        box-shadow: 0px 0px 50px 5px rgba(48,181,255,0.8);
        transition: 0.25s;
        cursor: pointer;
        color: #fff;
    }
    .button:hover {
        background-color: #fff;
        color: #4D2A9C;
        cursor: pointer;
        transition: 0.25s;
    }
    .btn-small {
        padding: 3px 0;
        font-size: 1rem;
    }
    a {
    color: white;
    text-decoration: none;
    }
</style>