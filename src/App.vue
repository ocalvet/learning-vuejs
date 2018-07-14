<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Welcome to a TODO App build using VueJS</span>
      </md-app-toolbar>
    </md-app>
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
  </div>
</template>

<script>
import HomePage from './components/HomePage/HomePage.vue';
// import router from './router';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
body, * {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  width: 100vw;
}
nav {
  display: flex;
  margin-bottom: 35px;
}
.nav-link {
  padding: 10px 15px;
  background-color: azure;
}
a:link, a:visited, a:hover, a:active {
  text-decoration: none;
}
.nav-link:hover {
  background-color: bisque;
}
</style>
