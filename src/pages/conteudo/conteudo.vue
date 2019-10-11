<template>
    <div class="content-container">
      <div class="site-title">
        <h1>Conteúdo</h1>
      </div>
      <div class="content">
        <div class="Conteudo">
          <label class="label" for="">Conteudo</label>
          <select v-model="conteudo">
            <option v-bind:value="{ number: 123 }">LALALA</option>
          </select>
        </div>

        <div class="conteudos">
          <label class="label" for="">Conteudos</label>
          <input v-model="conteudo.conteudos" type="text">
        </div>

         <button>salvar</button>
      </div>
    </div>
</template>

<script>
import { getAll, cadastro } from "../../services/conteudo";
export default {
  name: "conteudo",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Conteúdo"
  },
  data() {
    return {
      conteudo: {
        id: null,
      },
      nivel: {
        id: null,
        tiponivel: null,
        titulo: '',
        subtitulo: '',
        descricao: '',
      }
    };
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
  background-color: crimson;
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