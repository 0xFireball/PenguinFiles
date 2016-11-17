<template>
  <div v-md-theme="'apptheme'">
    <div id="app" class="container">
      <div class="row" id="intro-area">
        <div class="twelve columns">
          <intro></intro>
        </div>
      </div>
      <div class="row">
        <div class="six columns offset-by-three">
          <login></login>
        </div>
      </div>
      <div class="row" id="footer">
        <div class="six columns offset-by-three ">
          <h6><a href="https://github.com/0xFireball/PenguinFiles " target="_blank ">PenguinFiles on GitHub</a></h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Login from '../components/Login'
import Toolbar from '../components/Toolbar'

export default {
  name: 'app',
  components: {
    Toolbar,
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
  }
  
  #intro-area {
    margin-top: 5%;
  }
  
  #footer {
    margin: auto;
    text-align: center;
  }
</style>