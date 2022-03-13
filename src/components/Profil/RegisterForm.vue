<template>
    <div id="RegisterForm">
       <div class="input">
            <input
                type="text"
                id="id-input"
                class="id-input"
                placeholder="Username"
                v-model="name"
            />
            <input
                type="text"
                id="id-input"
                class="id-input"
                placeholder="Email"
                v-model="email"
            />
            <div v-if="!hasValidEmailFormat" class="errors">Le format du mail n'est pas valide</div>
            <input
                type="password"
                id="id-input"
                class="id-input"
                placeholder="Password"
                v-model ="password"
            />
            <input
                type="password"
                id="id-input"
                class="id-input"
                placeholder="Confirm Password"
                v-model="confirmPassword"
            />
            <div v-if="!hasValidPassword" class="errors">Les deux champs ne correspondent pas</div>
       </div>
        <p class="text-center information-text">
            <span class="bold">En soumettant la demande d'inscription, vous acceptez</span> <br>
            nos termes d'utilisation <span class="bold">et</span> la politique de confidentialité
        </p>
      <button :disabled="!hasValidForm" class="connect-button">S'inscrire</button>
      <p class="sub-text text-center">Vous avez déjà un compte ? <a class="connexion-link">Connexion</a></p>
    </div>
</template>

<script>
export default {
    name: "RegisterForm",
    data() {
        return {
            name : "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    },
    computed : {
        hasValidForm() {
            return this.hasValidEmailFormat
            && this.hasValidPassword 
            && this.name.length > 0
            && this.password.length > 0
            && this.email.length > 0
        },
        hasValidEmailFormat() {
            if(this.email.length > 0) return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) // eslint-disable-line
            else return true
            
        },
        hasValidPassword() {
            return this.password === this.confirmPassword 
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