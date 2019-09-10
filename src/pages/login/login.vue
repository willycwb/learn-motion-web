<template>
  <div>
    <form class="form" id="loginForm">
      <div>
        <label for="inputUser">E-mail</label>
        <input
          v-model="email"
          id="inputUser"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        <label for="inputPassword">Password</label>
        <input
          v-model="password"
          @keyup.enter="login"
          id="inputPassword"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <input type="button" v-on:click="login()" id="submitLogin" value="Entrar" />
    </form>
  </div>
</template>

<script>
import { getDemo, singIn } from "../../services/login";

export default {
  name: "Login",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Login"
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log(this.email);
      if (this.email != "" && this.password != "") {
        singIn(this.email, this.password)
          .then(r => {
            console.log(r.data);
            localStorage.setItem("token", JSON.stringify(r.data.token));
          })
          .catch(e => console.log(e.message));
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  background-color: darksalmon;
}
</style>