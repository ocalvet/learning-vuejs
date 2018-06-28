<template>
  <div class="home-page">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
