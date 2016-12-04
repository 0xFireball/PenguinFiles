<template>
  <div class="fileslist">
    <panel :title="title" bodyTheme="apptheme">
      <md-tabs ref="fileListTabs">
        <md-tab id="t-files" md-label="Files">
          <md-list class="custom-list md-triple-line">
            <md-subheader>{{ header }}</md-subheader>
            <!-- Available Files -->
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

          <md-list class="custom-list md-triple-line" v-md-theme="uploadingTheme">
            <md-subheader>{{ progressHeader }}</md-subheader>
            <!-- In-progress Files -->
            <div v-for="ufile in uploadingFiles">
              <md-list-item>
                <md-avatar>
                  <md-icon class="md-primary">file_upload</md-icon>
                </md-avatar>

                <div class="md-list-text-container">
                  <span>{{ ufile.name }}</span>
                  <span>{{ ufile.kind }}</span>
                  <p>{{ ufile.progress }}% uploaded</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                  <md-icon class="md-primary">star</md-icon>
                </md-button>

                <md-divider class="md-inset"></md-divider>
              </md-list-item>
            </div>
          </md-list>
        </md-tab>

        <md-tab id="t-upload" md-label="upload">
          <md-subheader>File Options</md-subheader>
          <div>
            <md-checkbox v-model="shouldEncryptUploadedFile">Store Encrypted (Significantly Slower)</md-checkbox>
          </div>
          <md-button class="space-v md-raised md-primary" @click="uploadFile()">Upload File</md-button>
          <input type="file" ref="fileInput" class="invisible">
        </md-tab>
      </md-tabs>
    </panel>
  </div>
</template>

<script>
import Panel from './Panel'

export default {
  props: [
    'cloudfiles'
  ],
  data () {
    return {
      title: 'My Files',
      header: 'All Files',
      progressHeader: 'Uploading',
      shouldEncryptUploadedFile: false,
      uploadingTheme: 'muted',
      uploadingFiles: [
        {
          name: 'bob',
          kind: 'fake',
          progress: 99,
          id: 9324
        }
      ]
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
    },
    uploadFile: function () {
      this.$refs.fileInput.click()
    },
    cancelUpload: function (id) {
      // nothing yet
    }
  },
  mounted: function () {
    let vm = this
    vm.$refs.fileInput.addEventListener('change', function (ea) {
      let file = vm.$refs.fileInput.files[0]
      if (!file) return // upload canceled
      let reader = new window.FileReader()
      reader.onload = function (e) {
        // process the file contents
        // reader.result
        // console.log(reader.result)
        // change active tab and add uploading status
        vm.uploadingFiles.push({
          name: 'Random File #2',
          kind: 'Book',
          progress: 0,
          id: 494
        })
        console.log(vm.uploadingFiles)
        vm.$refs.fileListTabs.changeTab('t-files')
      }
      reader.readAsDataURL(file)
    })
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
  
  .md-checkbox {
    padding-left: 16px;
  }
</style>