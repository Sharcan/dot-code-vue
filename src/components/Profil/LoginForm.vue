<template>
    <div id="LoginForm">
       <div class="input">
            <input
                type="text"
                id="id-input"
                class="id-input"
                placeholder="Username">
            <input
                type="text"
                id="id-input"
                class="id-input"
                placeholder="Password"
            />
       </div>
      <SpaceButton class="connect-button" text="Se connecter" />
    </div>
</template>

<script>
import SpaceButton from "../SpaceButton.vue";
export default {
    name: "LoginForm",
    components: { SpaceButton }
}
</script>

<style scoped>

* {
  background: white;
  color: black;
}

#LoginForm {
    padding: 5%;
    border-radius: 30px;
}

.input {
    display: block;
    margin-top: 5%;
    margin-bottom: 5%;
}

.id-input {
    width: 100%;
    height: 150%;
    font-size: 150%;
    margin-top: 3%;
    padding: 2%;
    padding-left: 6%;
    border-radius: 50px;
    border: none;
    background: #090b31;
    color: White;
    text-align: left;
}

.id-input::placeholder {
    color: white;
}

.connect-button {
    width: 80%;
    margin-top: 5%;
    margin-left: 10%;
}

.sub-text {
    font-size: small;
    margin-top: 10%;
}

.connexion-link {
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
}
</style>