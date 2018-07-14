import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage/HomePage.vue';
import AboutPage from './components/AboutPage/AboutPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
  ],
});
