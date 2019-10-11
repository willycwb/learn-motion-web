<template>
    <div class="content-container">
      <div class="site-title">
        <h1>Usuário</h1>
      </div>
      <div class="content">
        <div class="email">
          <label class="label" for="">Email</label>
          <input v-model="usuario.email" type="text">
        </div>

        <div class="senha">
          <label class="label" for="">Senha</label>
          <input v-model="usuario.senha" type="text">
        </div>

         <button>salvar</button>
      </div>
    </div>
</template>

<script>
import { getAll } from "../../services/usuario";
export default {
  name: "usuario",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Usuário"
  },
 data() {
    return {
      usuario: {
        id: null,
        email: '',
        senha: '',
        token: '',
      },
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
  background-color: cadetblue;
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