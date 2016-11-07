<template>
  <div class="container">
    <div id="app">
      <div class="row">
        <div class="twelve columns">
          <intro></intro>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <login></login>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from './components/Intro'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
    Intro,
    Login
  }
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>