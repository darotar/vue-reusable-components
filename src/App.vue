<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p><NButton type="is-submit">Begin your experience</NButton></p>
    <p><NButton type="is-action-tile">Mass order create</NButton></p>
  </div>
</template>

<script>
import NButton from './components/Button/Button';

export default {
  name: 'App',
  components: {
    NButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
