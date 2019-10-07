<template>
  <div class="principal">

    <div class="conteudo">

      <div class="cabecalho">
        <a class="login" v-on:click="login()">Login</a>
      </div>

      <div class="titulo">
        <span>Interface em Movimento</span>
      </div>

      <div class="sub-titulo">
        <span>Interface em Movimento</span>
      </div>

<div class="search-principal">
      <div class="search">
        <div class="search-wrapper">
          <input type="text" placeholder="Search title.." />
          <label>Search title:</label>
        </div>
      </div>
      </div>

      <div class="niveis">
        <div class="card" v-for="nivel in niveis" v-bind:key="nivel.id" v-on:click="conteudo(nivel.name)">
          <!-- <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%" /> -->
          <div class="container">
            <h4>
              <b>{{nivel.tipoNivel.nome}}</b>
            </h4>
            <p>{{nivel.tipoNivel.descricao}}</p>
          </div>
        </div>
      </div>
      <div>
        <span>Não sei meu nivel</span>
      </div>
      <div class="categorias">
        <a v-on:click="categorias()">Categorias</a>
      </div>

    </div>

    <div class="rodape">
      <span class="rodapetexto">Copyright ® - 2019</span>
    </div>

  </div>
</template>

<script>
import { getAll } from "../../services/publicoNivel";
import router from "../../js/routes";

export default {
  name: "home",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Home"
  },
  data() {
    return {
      niveis: [
        // {
        //   id: 1,
        //   titulo: "Básico",
        //   name: 'basico',
        //   descricao: "Descrição Básico"
        // },
        // {
        //   id: 2,
        //   titulo: "Intermediario",
        //   name: 'intermediario',
        //   descricao: "Descrição Intermediario"
        // },
        // {
        //   id: 3,
        //   titulo: "Avançado",
        //   name: 'avancado',
        //   descricao: "Descrição Avançado"
        // }
      ]
    };
  },
  computed: {},
  created: function() {
    this.buscaTodos();
  },
  methods: {
    buscaTodos() {
      getAll()
        .then(r => {
          console.log(r.data);
          this.niveis = r.data.result;
        })
        .catch(e => console.log(e.message));
    },
    login() {
      router.push({ name: "login" });
    },
    categorias() {
      router.push({ name: "categorias" });
    },
    conteudo(name) {
      router.push({ name: 'subconteudo', params: { name: name }})
    }
  }
};
</script>
