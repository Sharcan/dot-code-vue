<template>
	<div>
		{{ test }}
	</div>
</template>

<script>
    export default {
        name: 'Test',
        data() {
            return {
                test: null
            }
        },
        mounted() {
            this.$socket.client.emit('getRooms', {}, (res) => {
                this.test = res;
            })
        }
    }
</script>