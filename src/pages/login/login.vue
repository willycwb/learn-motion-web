<template>
<body>
  <div class="main">
    <p class="sign" align="center">Lear Motion | Login</p>
    <form class="form1">
      <input class="un" v-model="email" type="text" align="center" placeholder="Email" />
      <input
        class="pass"
        v-model="password"
        @keyup.enter="login"
        type="password"
        align="center"
        placeholder="Senha"
      />
      <input
        class="submit"
        type="button"
        v-on:click="login()"
        id="submitLogin"
        value="Entrar"
        align="center"
      />
    </form>
  </div>
  <div class="notify">
    <span id="notifyType" class></span>
  </div>
</body>
</template>

<script>
import { singIn } from "../../services/login";
import router from "../../js/routes";

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
            router.push({ name: "menu" });
          })
          .catch(e => {
            console.log('ERRO: ' + e.message);
          });
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.body {
  background-color: #f3ebf6;
  font-family: "Ubuntu", sans-serif;
}

.main {
  background-color: #ffffff;
  width: 400px;
  height: 400px;
  margin: 7em auto;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}

.sign {
  padding-top: 40px;
  color: #8c55aa;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: 23px;
}

.un {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
}

.un:focus,
.pass:focus {
  border: 2px solid rgba(0, 0, 0, 0.18) !important;
}

.form1 {
  padding-top: 40px;
}

.pass {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
}

.submit {
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9c27b0, #e040fb);
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: "Ubuntu", sans-serif;
  margin-left: 35%;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
}

.a {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  text-decoration: none;
}

.notify {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 0;
  box-sizing: border-box;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  box-sizing: border-box;
  transition: height 0.2s;
}

#notifyType:before {
  display: block;
  margin-top: 15px;
}
</style>