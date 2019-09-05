<template>
  <div>
    <h1>App</h1>
    <div>
      <a href="./login">Please click me, and let take you into the login page!!!</a>
    </div>
    <span>Before computed: {{ message }}</span>
    <br />
    <span>Afer computed: {{ computedMessage() }}</span>
     <router-link to="/login">Go to Foo</router-link>
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
    return {
      message: "Hello World!"
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    computedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style lang="scss">
@import "./home.scss";
</style>