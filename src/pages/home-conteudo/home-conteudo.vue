<template>
  <h3>alo - {{page}}</h3>
</template>

<script>
export default {
  name: "homeconteudo",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Home Conteudo"
  },
  data() {
    return {
      page: this.$route.params.name
    };
  },
  computed: {},
  methods: {}
};
</script>
