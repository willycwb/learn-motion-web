<template>
  <div class="principal">
    
    <div class="conteudo2">
      <div v-for="cat in categorias" v-bind:key="cat.titulo">
        <span>{{cat.titulo}}</span>
        <carousel :per-page="1" :mouse-drag="false" :autoplay="false">
          <slide v-for="cat2 in cat.categorias" v-bind:key="cat2.id">
            <span>{{cat2.titulo}}</span>
            <span>{{cat2.descricao}}</span>
          </slide>
        </carousel>
      </div>
    </div>

    <div class="rodape">
      <span class="rodapetexto">Copyright ® - 2019</span>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "hometipo",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Home Tipo"
  },
  data() {
    return {
      categorias: [
        {
          id: 1,
          titulo: "Básico",
          name: "basico",
          categorias: [
            {
              id: 1,
              titulo: "button",
              name: "button",
              descricao: "Button tricks"
            },
            {
              id: 2,
              titulo: "span",
              name: "span",
              descricao: "Span tricks"
            },
            {
              id: 3,
              titulo: "div",
              name: "div",
              descricao: "Div tricks"
            }
          ]
        },
        {
          id: 2,
          titulo: "Inter",
          name: "intermediario",
          categorias: [
            {
              id: 1,
              titulo: "Básico",
              name: "basico",
              descricao: "Descrição Básico"
            },
            {
              id: 2,
              titulo: "Intermediario",
              name: "intermediario",
              descricao: "Descrição Intermediario"
            },
            {
              id: 3,
              titulo: "Avançado",
              name: "avancado",
              descricao: "Descrição Avançado"
            }
          ]
        },
        {
          id: 1,
          titulo: "Avançado",
          name: "avancado",
          categorias: [
            {
              id: 1,
              titulo: "Básico",
              name: "basico",
              descricao: "Descrição Básico"
            },
            {
              id: 2,
              titulo: "Intermediario",
              name: "intermediario",
              descricao: "Descrição Intermediario"
            },
            {
              id: 3,
              titulo: "Avançado",
              name: "avancado",
              descricao: "Descrição Avançado"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {
    conteudo(name) {
      router.push({ name: "subconteudo", params: { name: name } });
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>