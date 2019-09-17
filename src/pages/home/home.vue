<template>
  <div class="principal">
    <div class="cabecalho"></div>
    <div class="conteudo"></div>
    <div class="rodape"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Home"
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.principal {
  height: 100%;
  width: 100%;
  background-color: green;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // background-image: url("../../../web_assets/images/paisagem.jpg");
}
.cabecalho {
  height: 150px;
  width: 100%;
  background-color: aquamarine;
}
.conteudo {
  height: 700px;
  width: 100%;
  background-color: coral;
}
.rodape {
  height: 100px;
  width: 100%;
  background-color: seagreen;
}
</style>