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
      <!-- <div class="search">
        <div class="search-wrapper">
          <input type="text" placeholder="Search title.." />
          <label>Search title:</label>
        </div>
        <div class="search-wrapper">
          <input type="text" placeholder="Search title.." />
          <label>Search title:</label>
        </div>
      </div> -->
      </div>

      <div class="niveis">
        <div class="card" v-for="nivel in niveis" v-bind:key="nivel.id" v-on:click="conteudo(nivel.name)">
          <!-- <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%" /> -->
          <div class="container" v-bind:class="{ 'background-image': nivel.tipoNivel.backgroud }" style='background-image: url(https://i.pinimg.com/originals/ae/8e/92/ae8e92b44241d7486697097b053b78e6.jpg)'>
            <h4>
              <b>{{nivel.tipoNivel.nome}}</b>
            </h4>
          </div>
        </div>
      </div>
      <div class="meu-nivel">
        <div class="meu-nivel-container">
          <span class="texto">Não sei meu nivel</span>
        </div>
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
      foto1 : 'https://videohive.img.customer.envatousercontent.com/files/243749253/preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=da844794c5494aca3a6c093180766c8d',
      foto2 : 'https://media.istockphoto.com/vectors/blue-lines-abstract-background-vector-id1081735384?k=6&m=1081735384&s=612x612&w=0&h=Ps4Dd_TAqMMl15lAnm-iqeFakf1Bw0M41fhd9VLfKVQ=',
      foto3 : 'https://i.pinimg.com/originals/ae/8e/92/ae8e92b44241d7486697097b053b78e6.jpg',
      niveis: []
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
          this.niveis.forEach(element => {
            if(element.id == 1) {
              element.backgroud = this.foto1;
            } else if(element.id == 2) {
              element.backgroud = this.foto2;
            } else {
              element.backgroud = this.foto3;
            }
          });
          console.log(this.niveis);
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
