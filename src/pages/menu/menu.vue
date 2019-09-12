<template>
  <div>
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="menu-icon">
      <i class="fa fa-bars"></i>
    </label>
    <div class="content-container">
      <div class="site-title">
        <h1>Elite World Explorer</h1>
      </div>
      <div class="content">
        <h1>5 Best Desinations in the World</h1>
        <img src="https://placehold.it/700x250" alt class />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla mollis, efficitur urna nec, viverra dolor. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent efficitur finibus eros sit amet sagittis. Ut sollicitudin sodales neque et volutpat. Curabitur dictum ante vel fermentum volutpat. Curabitur ac neque et erat viverra egestas.</p>
      </div>
    </div>
    <div class="slideout-sidebar">
      <ul>
        <li>Home</li>
        <li>Catalog</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getAll } from "../../services/tiponivel";
import router from "../../js/routes";

export default {
  name: "Menu",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Menu"
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    tiponivel() {
      getAll()
        .then(r => {
          console.log(r.data);
        })
        .catch(e => console.log(e.message));
    }
  }
};
</script>

<style scoped lang="scss">
.body {
  font-family: "Lato", arial, sans-serif;
  margin: 0;
}

/* -- main content -- */
.content-container {
  position: relative;
  z-index: 0;
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
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

/* -- Slideout Sidebar -- */

.slideout-sidebar {
  position: fixed;
  top: 0;
  left: -190px;
  z-index: 0;
  width: 150px;
  height: 100%;
  padding: 20px;
  background-color: #212121;
  transition: all 300ms ease-in-out;
}

.slideout-sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.slideout-sidebar ul li {
  cursor: pointer;
  padding: 18px 0;
  border-bottom: 1px solid rgba(244, 244, 244, 0.4);
  color: rgba(244, 244, 244, 0.7);
}

.slideout-sidebar ul li:last-child {
  border-bottom: 0;
}

.slideout-sidebar ul li:hover {
  color: rgba(244, 244, 244, 1);
}

/* -- Menu Icon -- */

#menu-toggle {
  display: none;
}

.menu-icon {
  position: absolute;
  top: 18px;
  left: 30px;
  font-size: 24px;
  z-index: 1;
  transition: all 300ms ease-in-out;
}

/*-- The Magic --*/
#menu-toggle:checked ~ .slideout-sidebar {
  left: 0px;
}

#menu-toggle:checked + .menu-icon {
  left: 210px;
}

#menu-toggle:checked ~ .content-container {
  padding-left: 190px;
}
</style>