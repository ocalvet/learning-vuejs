<template>
  <div id="app">
    <h1 class="app-title">Welcome to a TODO App build using VueJS</h1>
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
import router from './router';

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
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)); 
  height: 100vh;
  width: 100vw;
  padding: 15px;
}
.app-title {
  color: #0000ff;
}
nav {
  display: flex;
  margin-bottom: 35px;
}
.nav-link {
  margin-left: 10px;
}
</style>
