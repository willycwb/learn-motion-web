<template>
  <div class="main">
    <div class="frame">
        <router-view></router-view>
    </div>
    
    <div class="menu">
      <span class="menu-button"></span>
      <ul>
        <li><router-link to="/nivel">Nível</router-link></li>
        <li><router-link to="/tipoconteudo">Tipo Conteúdo</router-link></li>
        <li><router-link to="/conteudo">Conteúdo</router-link></li>
        <li><router-link to="/usuario">Usuário</router-link></li>
        <li><input type="button" @click="buscaTodos()" value="Lista Todos"/></li>
        <li><input type="button" @click="buscaUm()" value="Lista um"/></li>
        <li><input type="button" @click="buscaTodos()" value="Criar"/></li>
        <li><input type="button" @click="buscaTodos()" value="Editar"/></li>
        <li><input type="button" @click="buscaTodos()" value="Deletar todos"/></li>
        <li><input type="button" @click="buscaTodos()" value="Deletar um"/></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getAll, getById } from "../../services/tiponivel";
import router from "../../js/routes";

export default {
  name: "Menu",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Menu"
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    buscaUm() {
      getById(2)
        .then(r => {
          console.log(r.data);
        })
        .catch(e => console.log(e.message));
    },
     buscaTodos() {
      getAll()
        .then(r => {
          console.log(r.data);
        })
        .catch(e => console.log(e.message));
    }
  }
};
</script>

<style scoped lang="scss">

.body {
  font-family: "Lato", arial, sans-serif;
  margin: 0;
  height: 100%;
}

.frame {
  height: 100%;
  width: 100%;
}

.main {
  display: flex;
  height: 100%;
  justify-content: center;
}

.menuOpen {
  padding-left: 185px;
  position: relative;
  transition: padding 300ms;
}
</style>