<template>
    <div class="content-container">
      <div class="site-title">
        <h1>Tipo Conteúdo</h1>
      </div>
      <div class="content">

       <div class="Tipo Conteudo">
          <label class="label" for="">Tipo Conteudo</label>
          <select v-model="tpconteudo">
            <option v-bind:value="{ number: 123 }">LALALA</option>
          </select>
        </div>

        <div class="descricao">
          <label class="label" for="">Descricao</label>
          <input v-model="tipoconteudo.descricao" type="text">
        </div>

        <div class="nome">
          <label class="label" for="">Nome</label>
          <input v-model="tipoconteudo.nome" type="text">
        </div>

         <button>salvar</button>

      </div>
    </div>
</template>

<script>
import { getAll, cadastro } from "../../services/tipoconteudo";
export default {
  name: "tipoconteudo",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Tipo Conteudo"
  },
  data() {
    return {
      tpconteudo: [],
      tipoconteudo: {
        id: null,
        descricao: '',
        nome: '',
        selected: null
      }
    };
  },
  created: function() {
    this.buscaConteudo();
  },
  methods: {
    buscaConteudo() {
      getAll()
        .then(r => {
          console.log(r.data);
          this.tipoconteudo = r.data.result;
        })
        .catch(e => console.log(e.message));
    },
    cadastrar() {


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

/* -- main content -- */
.content-container {
  background-color: darkorange;
  position: relative;
  z-index: 0;
  height: 100%;
  overflow: hidden;
  transition: all 300ms ease-in-out;
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

</style>