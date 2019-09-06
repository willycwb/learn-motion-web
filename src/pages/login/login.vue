<template>
<div>
    <form id="loginForm">
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
.login {
  border: 1px solid black;
  border-radius: 5px;
  padding: 1.5rem;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  .container-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  form {
    display: flex;
    flex-flow: column;
    *:not(:last-child) {
      margin-bottom: 1rem;
    }
    input {
      padding: 0.5rem;
    }
    button {
      padding: 0.5rem;
      background-color: lightgray;
      border: 1px solid gray;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: lightslategray;
      }
    }
  }
}
</style>