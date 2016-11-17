<template>
  <div v-md-theme="'muted'">
    <div id="filesplace" class="container">
      <div class="row">
        <div class="twelve columns">
          <filesList :cloudfiles="cloudFiles"></filesList>
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
import FilesList from '../components/filesList'

export default {
  name: 'filesplace',
  data () {
    return {
      cloudFiles: [
        {
          name: 'google-logo.png',
          kind: 'Image',
          id: 1337
        },
        {
          name: 'my-essay.odt',
          kind: 'Document',
          id: 1338
        },
        {
          name: 'totally-not-passwords.txt',
          kind: 'Text File',
          id: 1339,
          isEncrypted: true
        }
      ]
    }
  },
  components: {
    Toolbar,
    FilesList
  }
}
</script>

<style>
  #filesplace {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  #intro-area {
    margin-top: 5%;
  }
  
  #footer {
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
  }
</style>