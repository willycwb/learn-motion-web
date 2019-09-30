<template>
    <div class="content-container">
      <div class="site-title">
        <h1>Nível</h1>
      </div>
      <div class="content">
        <h1>5 Best Desinations in the World</h1>
        <img src="https://placehold.it/700x250" alt class />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla mollis, efficitur urna nec, viverra dolor. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent efficitur finibus eros sit amet sagittis. Ut sollicitudin sodales neque et volutpat. Curabitur dictum ante vel fermentum volutpat. Curabitur ac neque et erat viverra egestas.</p>
      </div>
    </div>
</template>

<script>

export default {
  name: "nivel",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Nível"
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

</style>