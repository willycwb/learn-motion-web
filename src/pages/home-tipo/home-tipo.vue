<template>
  <div>
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false" :autoplay="true">
      <slide>Slide 1 Content</slide>
      <slide>Slide 2 Content</slide>
    </carousel>
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
    return {};
  },
  computed: {},
  methods: {},
  components: {
    Carousel,
    Slide
  }
};
</script>
