import Vue from 'vue'
import routes from './routes'
import Home from '../pages/home/home.vue';
import NotFound from '../pages/404.vue'
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
})
