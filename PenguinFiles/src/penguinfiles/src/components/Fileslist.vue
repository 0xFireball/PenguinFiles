<template>
  <div class="fileslist">
    <panel :title="title">
      <md-list class="custom-list md-triple-line">
        <md-subheader>{{ header }}</md-subheader>

        <div v-for="cfile in cloudfiles">
          <md-list-item>
            <md-avatar>
              <md-icon class="md-primary">cloud</md-icon>
            </md-avatar>

            <div class="md-list-text-container">
              <span>{{ cfile.name }}</span>
              <span>{{ cfile.kind }}</span>
              <p>Uploaded some time ago.</p>
            </div>

            <md-button class="md-icon-button md-list-action" @click="downloadFile(cfile.id)">
              <md-icon class="md-primary">file_download</md-icon>
            </md-button>

            <md-divider class="md-inset"></md-divider>
          </md-list-item>
        </div>
      </md-list>
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
      window.alert('downloading file ' + id)
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
</style>