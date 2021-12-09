<template>
  <div id="Progression">
    <h3 class="text-left geminis">Progression</h3>
    <p class="sub-title text-left">Lorem ipsum</p>
    <div class="pourcent">
      <p class="pourcentage geminis text-center">70%</p>
    </div>
    <div class="text">
      <p class="sub-title text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progression",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background: White;
  color: black;
}
#Progression {
  width: 228px;
  height: 269px;
  border-radius: 10px;
}

.pourcentage {
  font-size: 56px;
}

.text {
  width: 194px;
  margin: auto;
}
</style>
