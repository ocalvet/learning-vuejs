<template>
  <div id="app">
    <nav>
    <router-link to="/">
      <div class="nav-link">Home</div>
    </router-link>
    <router-link to="/about">
      <div class="nav-link">About</div>
    </router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
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
nav {
  display: flex;
  margin-bottom: 35px;
}
.nav-link {
  margin-left: 10px;
}
</style>
