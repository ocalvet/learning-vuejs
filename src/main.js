import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
