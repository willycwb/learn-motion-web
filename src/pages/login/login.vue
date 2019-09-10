<template>
<div>
    <form class="form" id="loginForm">
        <div>
            <label for="inputUser">E-mail</label>
            <input v-model="email" @focus="clearError()" id="inputUser" type="text" name="username" placeholder="Username">
        </div>
        <div>
            <label for="inputPassword">Password</label>
            <input v-model="password" @focus="clearError()" @keyup.enter="login" id="inputPassword" type="password" name="password" placeholder="Password">
        </div>
        <input type="button" v-on:click="login()" id="submitLogin" value="Entrar">
        <span>Status: {{ message }}</span>
    </form>
</div>
</template>

<script>
export default {
  name: "Login",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Login"
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      sucess: ""
    };
  },
  methods: {
    login() {
      console.log(this.email)
      if (this.email != "" && this.password != "") {
        this.sucess = "Login sucess";
        console.log("Hiiii");
      } else {
        this.error = "Enter a valid e-mail and password";
        console.log("A username and password must be present");
      }
    },
    clearError() {
      this.error = "";
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  background-color: violet;
  }
</style>