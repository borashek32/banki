<template>
  <div id="app">
    <h1>Vue 2 + Webpack</h1>
    <HelloWorld msg="Welcome to your Vue 2 app!" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
