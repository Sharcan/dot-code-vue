<template>
    <div id="RoomPseudo">
        <div class="pseudo-pannel-input">
            <Team />
        </div>
    </div>
</template>

<script>
import Team from '@/components/Room/Team.vue';

export default {
    name: 'RoomTeam',
    components: {
        Team
    }
}
</script>

<style scoped>

.pseudo-pannel-input {
    margin-top: 2%;
}
</style>