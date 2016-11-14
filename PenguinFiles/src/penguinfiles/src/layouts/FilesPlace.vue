<template>
  <div v-md-theme="'apptheme'">
    <toolbar></toolbar>
    <div id="app" class="container">
      <div class="row">
        <div class="twelve columns">
          <fileslist></fileslist>
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
import Toolbar from '../components/Toolbar'
import Fileslist from '../components/Fileslist'

export default {
  name: 'app',
  components: {
    Toolbar,
    Fileslist
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
    margin-bottom: 5%;
    text-align: center;
  }
</style>