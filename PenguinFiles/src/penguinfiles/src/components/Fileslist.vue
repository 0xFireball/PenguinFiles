<template>
  <div class="fileslist" v-md-theme="'inverse'">
    <panel :title="title">
      <md-list class="custom-list md-triple-line">
        <md-subheader>{{ header }}</md-subheader>

        <div v-for="cfile in cloudfiles">
          <md-list-item>
            <md-avatar v-if="cfile.isEncrypted">
              <md-icon class="md-primary">lock</md-icon>
            </md-avatar>
            <md-avatar v-else>
              <md-icon class="md-primary">lock_open</md-icon>
            </md-avatar>

            <div class="md-list-text-container">
              <span>{{ cfile.name }}</span>
              <span>{{ cfile.kind }}</span>
              <p>Uploaded some time ago.</p>
            </div>

            <md-menu>
              <md-button class="md-icon-button md-list-action" md-menu-trigger>
                <md-icon class="md-primary">more_horiz</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item v-if="cfile.isEncrypted" @click="decryptFile(cfile.id)">Decrypt</md-menu-item>
                <md-menu-item v-else @click="encryptFile(cfile.id)">Encrypt</md-menu-item>
                <md-menu-item @click="deleteFile(cfile.id)">Delete</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-button class="md-icon-button md-list-action" @click="downloadFile(cfile.id)">
              <md-icon class="md-primary">file_download</md-icon>
            </md-button>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>
        </div>
      </md-list>
      <md-button class="align-right space-v md-raised md-primary">Upload File</md-button>
    </panel>
  </div>
</template>

<script>
import Panel from './Panel'

export default {
  name: 'fileslist',
  props: [
    'cloudfiles'
  ],
  data () {
    return {
      title: 'My Files',
      header: 'All Files'
    }
  },
  methods: {
    downloadFile: function (id) {
      console.log('downloading file ' + id)
    },
    deleteFile: function (id) {
      if (window.confirm('are you sure you want to delete this file?')) {
        console.log('deleting file ' + id)
      }
    },
    encryptFile: function (id) {
      console.log('encrypting file ' + id)
    },
    decryptFile: function (id) {
      console.log('decrypting file ' + id)
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .invisible {
    display: none;
  }
  
  .space-v {
    margin-top: 5%;
    margin-bottom: 5%;
  }
  
  .align-right {
    float: right;
  }
</style>