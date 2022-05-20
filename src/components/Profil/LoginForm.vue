<template>
	<div id="LoginForm">
		<div class="input">
			<input
				id="id-input"
				v-model="email"
				type="text"
				class="id-input"
				placeholder="Username"
			>
			<input
				id="id-input"
				v-model="password"
				type="text"
				class="id-input"
				placeholder="Password"
			>
		</div>
		<button
			class="connect-button"
			@click="onLogin"
		>
			Se connecter
		</button>
	</div>
</template>

<script>
import axios from "axios";

export default {
    name: "LoginForm",
    data() {
      return {
        email: "sharcan@gmail.com",
        password: "azerty123",
      }
    },
    methods: {
      onLogin() {
        const userId = localStorage.getItem('user');

        axios.post(process.env.VUE_APP_API_URL + `auth/login?id=${userId}`, {
          email: this.email,
          password: this.password
        }).then((response) => {
          if ('id' in response.data) {
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('user', response.data.id)
            return this.$router.push({name: 'home'});
          }
        })
      }
    }
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

.connect-button {
  width: 80%;
  margin-top: 5%;
  margin-left: 10%;
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
</style>