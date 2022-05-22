<template>
	<div id="RegisterForm">
		<div class="input">
			<input
				id="id-input"
				v-model="name"
				type="text"
				class="id-input"
				placeholder="Username"
			>
			<input
				id="id-input"
				v-model="email"
				type="text"
				class="id-input"
				placeholder="Email"
			>
			<p
				v-if="!hasValidEmailFormat"
				class="errors"
			>
				Le format du mail n'est pas valide
			</p>
			<input
				id="id-input"
				v-model="password"
				type="password"
				class="id-input"
				placeholder="Password"
			>
			<input
				id="id-input"
				v-model="confirmPassword"
				type="password"
				class="id-input"
				placeholder="Confirm Password"
			>
			<p
				v-if="!hasValidPassword"
				class="errors"
			>
				Les deux champs ne correspondent pas
			</p>
		</div>
		<p class="text-center information-text">
			<span class="bold">En soumettant la demande d'inscription, vous acceptez</span> <br>
			nos termes d'utilisation <span class="bold">et</span> la politique de confidentialité
		</p>
		<button
			:disabled="!hasValidForm"
			class="connect-button"
			@click="onRegister"
		>
			S'inscrire
		</button>
		<p class="sub-text text-center">
			Vous avez déjà un compte ? 
			<a
				class="connexion-link"
				href="/login"
			>
				Connexion
			</a>
		</p>
	</div>
</template>

<script>
import axios from "axios";

export default {
    name: "RegisterForm",
    data() {
        return {
            name : "",
            email: "",
            password: "",
            confirmPassword: "",
            id: null
        }
    },
    computed : {
        hasValidForm() {
            return this.hasValidEmailFormat
            && this.hasValidPassword 
            && this.name.length > 0
            && this.password.length > 0
            && this.confirmPassword.length > 0
            && this.email.length > 0;
        },
        hasValidEmailFormat() {
            if(this.email.length > 0) return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) // eslint-disable-line
            else return true;
        },
        hasValidPassword() {
            if (this.password.length > 0 && this.confirmPassword.length > 0) {
              return this.password === this.confirmPassword;
            }
            return true;
        }
    },
    mounted() {
      this.getUserGuest()
    },
    methods: {
        onRegister() {
          axios.post(process.env.VUE_APP_API_URL + `auth/register?id=${this.id}`, {
            email: this.email,
            pseudo: this.name,
            password: this.password,
            socket_id: sessionStorage.getItem('socket_id')
          }).then(async res => {
            localStorage.setItem('user', res.data.user.id);
            await this.$router.push({name: 'login'});
          }).catch(error => console.warn(error.error)); // TODO FAIRE UN TRUC
        },
        getUserGuest() {
          this.id = localStorage.getItem('user')
          axios.get(process.env.VUE_APP_API_URL + `user/${this.id}`)
              .then((response) => {
                this.name = response.data.pseudo ?? '';
              });
        }
    }
}
</script>

<style scoped>

* {
  background: white;
  color: black;
}

#RegisterForm {
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
    margin-top: 3%;
    padding: 2%;
    padding-left: 6%;
    border-radius: 50px;
    border: none;
    background: #090b31;
    color: white;
}
.id-input::placeholder {
    color: #a1a1a1;
    font-size: 1rem;
}

.information-text {
    font-size: small;
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

.connect-button:disabled {
  background-color: grey;
  cursor: default;
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

.errors {
    color: red;
    margin-left: 5%;
}
</style>