<script setup>
import LandingPage from "./views/Landing.vue";
import navigation from "./components/nav.vue";
import footercomp from "./components/footer.vue";
</script>
<template>
  <router-view></router-view>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
