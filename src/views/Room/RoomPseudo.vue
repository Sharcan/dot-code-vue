<template>
    <div id="RoomPseudo">
        <div class="pseudo-pannel-input">
            <pseudo />
        </div>
        
    </div>
</template>

<script>
import Pseudo from '@/components/Room/Pseudo.vue';

export default {
  components: { Pseudo },
    name: 'RoomPseudo'
}
</script>

<style scoped>

.pseudo-pannel-input {
    margin-top: 2%;
}
</style>