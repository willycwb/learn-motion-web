<template>
  <div class="principal">
    <div class="conteudo">
      <div class="cabecalho">
        <a class="login" v-on:click="login()">Login</a>
      </div>
      <div class="niveis">
        <div class="card" v-for="nivel in niveis" v-bind:key="nivel.id">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%" />
          <div class="container">
            <h4>
              <b>{{nivel.titulo}}</b>
            </h4>
            <p>{{nivel.descricao}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="rodape">
      <span class="rodapetexto">Copyright ® - 2019</span>
    </div>
  </div>
</template>

<script>
import { getAll } from "../../services/tiponivel";
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
        {
          id: 1,
          titulo: "Básico",
          descricao: "Descrição Básico"
        },
        {
          id: 2,
          titulo: "Intermediario",
          descricao: "Descrição Intermediario"
        },
        {
          id: 3,
          titulo: "Avançado",
          descricao: "Descrição Avançado"
        }
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
        })
        .catch(e => console.log(e.message));
    },
    login() {
      router.push({ name: "login" });
    }
  }
};
</script>
