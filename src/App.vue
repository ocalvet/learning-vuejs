<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HomePage title="Home Page"/> -->
  </div>
</template>

<script>
import HomePage from './components/HomePage/HomePage.vue';
import router from './router.js';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
</style>
