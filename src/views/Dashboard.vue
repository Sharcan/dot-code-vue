<template>
  <div class="Dashboard">
    <div class="DashInfo">
      <MainDashboard class="Main"/>
      <div class="progression">
        <Evolution />
        <Progression class="progression1" />
        <Progression />
      </div>
      <div class="evolution">
        <Titres class="Titre"/>
        <Badges />
      </div>
    </div>
    <div class="tournoisInfo">
      <Tournois/>
    </div>
      
  </div>
</template>

<script>
import MainDashboard from '../components/Dahsboard/MainDashboard.vue'
import Evolution from '../components/Dahsboard/Evolution.vue'
import Progression from '../components/Dahsboard/Progression.vue'
import Titres from '../components/Dahsboard/Titres.vue'
import Badges from '../components/Dahsboard/Badges.vue'
import Tournois from '../components/Dahsboard/Tournois.vue'

export default {
  name: 'Dashboard',
  components: {
    MainDashboard,
    Evolution,
    Progression,
    Titres,
    Badges,
    Tournois,
  }
}
</script>

<style scoped>
.DashInfo {
  margin-left: 45px;
  margin-top: 40px;
}
.tournoisInfo {
  margin-left: 45px;
  margin-top: 40px;
}
.progression {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
}
.progression1 {
  margin-left: 20px;
  margin-right: 30px;
}
.evolution {
  display: flex;
  flex-direction: row;
}
.Titre {
  margin-right: 20px;
}

.Dashboard {
  display: flex;
  flex-direction: row;
}
</style>
