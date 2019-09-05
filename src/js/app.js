import Vue from 'vue'
import router from './routes';
import Router from 'vue-router';
import App from './app.vue';
Vue.use(Router);
const app = new Vue({
  render: h => h(App),
  router,
  components: {App}
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
})