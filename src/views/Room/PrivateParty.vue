<template>
    <private-layout>
        <template #content>
            <router-view></router-view>
        </template>
    </private-layout>
</template>

<script>
import PrivateLayout from '../../layouts/PrivateLayout.vue'
export default {
  components: { PrivateLayout },
 name : 'PrivateParty'
}
</script>

<style>

</style>