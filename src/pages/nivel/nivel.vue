<template>
    <div class="content-container">
      <div class="site-title">
        <h1>Nível</h1>
      </div>
      <div class="content">
        
        <div class="aaa">
          <label class="label" for="">Tipo Nivel</label>
          <select v-model="tpniveis">
            <option v-bind:value="{ number: 123 }">LALALA</option>
            <option v-bind:value="{ number: 124 }">BUCETA</option>
            <option v-bind:value="{ number: 125 }">ALO</option>
            <option v-bind:value="{ number: 126 }">PIERRE</option>
            <option v-bind:value="{ number: 127 }">XUXUBILAU</option>
          </select>
        </div>

        <div class="aaa">
          <label class="label" for="">Titulo</label>
          <input v-model="nivel.titulo" type="text">
        </div>

        <div class="aaa">
          <label class="label" for="">Sub titulo</label>
          <input v-model="nivel.subtitulo" type="text">
        </div>

        <div class="aaa">
          <label class="label" for="">Descrição</label>
          <input v-model="nivel.descricao" type="text">
        </div>

        <div class="aaa">
          <label class="label" for="">Backgroud</label>
          <input type="file">
        </div>

        <button>salvar</button>

      </div>
    </div>
</template>

<script>
import { getAll, cadastro } from "../../services/tiponivel";
export default {
  name: "nivel",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Nível"
  },
  data() {
    return {
      tpniveis: [],
      nivel: {
        id: null,
        tiponivel: null,
        titulo: '',
        subtitulo: '',
        descricao: '',
      }
    };
  },
  created: function() {
    this.buscaTipoNivel();
  },
  methods: {
    buscaTipoNivel() {
      getAll()
        .then(r => {
          console.log(r.data);
          this.tpniveis = r.data.result;
        })
        .catch(e => console.log(e.message));
    },
    cadastrar() {


    }
  }
};
</script>

<style scoped lang="scss">

/* -- main content -- */
.content-container {
  background-color: burlywood;
  height: 100%;
  position: relative;
  z-index: 0;
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
.aaa{
  height: 100%;
  padding: 10px;
}

.label {
  width: 50px;
}

</style>