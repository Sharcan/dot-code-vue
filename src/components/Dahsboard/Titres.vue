<template>
  <div id="Titre">
    <h3 class="text-left geminis">Evolution des titres</h3>
    <p class="sub-title text-left">Lorem ipsum</p>
    <div class="progressbar text-left">
      <div class="bar">
        <label for="eval1" class="label-progress">Evaluation 1</label> <br />
        <progress
          id="eval1"
          max="500"
          value="50"
          class="progress-bar"
        ></progress>
        <p class="text-right progress-value">50/500</p>
      </div>
      <div class="bar">
        <label for="eval2" class="label-progress">Evaluation 2</label><br />
        <progress
          id="eval2"
          max="500"
          value="100"
          class="progress-bar"
        ></progress>
        <p class="text-right progress-value">50/500</p>
      </div>
      <div class="bar">
        <label for="eval3" class="label-progress"> Evaluation 3</label><br />
        <progress
          id="eval3"
          max="500"
          value="150"
          class="progress-bar"
        ></progress>
        <p class="text-right progress-value">50/500</p>
      </div>
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
  name: "Titres",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background: white;
  color: black;
}
#Titre {
  width: 487px;
  height: 269px;
  border-radius: 10px;
}

.text {
  width: 443px;
  margin: auto;
  margin-top: 30px;
}
</style>
