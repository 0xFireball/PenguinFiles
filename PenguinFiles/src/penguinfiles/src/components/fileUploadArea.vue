<template>
  <div class="fileUploadArea">
    <md-button class="space-v md-raised md-primary" @click="toggleUploader()">Upload File</md-button>
    <div class="container">
      <slot></slot>
    </div>
    </md-button-toggle>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleVisible: false
    }
  },
  methods: {
    toggleUploader: function () {
      this.toggleVisible = !this.toggleVisible
    },
    uploadFile: function () {
      // hi
    }
  }
}
</script>

<style scoped>
  .align-right {
    text-align: right;
  }
</style>