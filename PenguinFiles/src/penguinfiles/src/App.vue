<template>
  <div id="app">
    <img src="./assets/logo.png" width="240" height="240">
    <intro></intro>
  </div>
</template>

<script>
import Intro from './components/Intro'

export default {
  name: 'app',
  components: {
    Intro
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
