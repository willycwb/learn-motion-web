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
}

.main {
  display: flex;
  justify-content: center;
}

.menuOpen {
  left: 181px;
  padding-right: 181px;
  position: relative;
}

/* -- main content -- */
.content-container {
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.site-title {
  text-align: center;
  border-bottom: 1px solid #111111;
  margin-bottom: 24px;
}

.site-title h1 {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 10px;
}

img {
  width: 100%;
}

.content p {
  line-height: 1.6em;
  margin-bottom: 24px;
}

/* -- Slideout Sidebar -- */

.slideout-sidebar {
  position: fixed;
  top: 0;
  left: -190px;
  z-index: 0;
  width: 150px;
  height: 100%;
  padding: 20px;
  background-color: #212121;
  transition: all 300ms ease-in-out;
}

.slideout-sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.slideout-sidebar ul li {
  cursor: pointer;
  padding: 18px 0;
  border-bottom: 1px solid rgba(244, 244, 244, 0.4);
  color: rgba(244, 244, 244, 0.7);
}

.slideout-sidebar ul li:last-child {
  border-bottom: 0;
}

.slideout-sidebar ul li:hover {
  color: rgba(244, 244, 244, 1);
}

/* -- Menu Icon -- */

#menu-toggle {
  display: none;
}

.menu-icon {
  position: absolute;
  top: 18px;
  left: 30px;
  font-size: 24px;
  z-index: 1;
  transition: all 300ms ease-in-out;
}

/*-- The Magic --*/
#menu-toggle:checked ~ .slideout-sidebar {
  left: 0px;
}

#menu-toggle:checked + .menu-icon {
  left: 210px;
}

#menu-toggle:checked ~ .content-container {
  padding-left: 190px;
}
</style>