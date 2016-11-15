<template>
  <md-whiteframe class="panel" :class="classes" :style="{ height: height + 'px' }">
    <md-toolbar v-md-theme="titleTheme" class="panel-toolbar">
      <h2 class="md-title">{{ title }}</h2>
    </md-toolbar>

    <section v-md-theme="bodyTheme" class="panel-body">
      <slot></slot>
    </section>
  </md-whiteframe>
</template>

<script>
  export default {
    props: {
      title: [String, Number],
      titleTheme: {
        type: String,
        default: 'muted'
      },
      bodyTheme: {
        type: String,
        default: 'apptheme'
      },
      size: [String, Number],
      height: [String, Number]
    },
    computed: {
      classes () {
        if (!this.size) {
          return false
        }
        return 'size-' + this.size
      }
    }
  }
</script>

<style scoped>
  .panel {
    max-width: 100%;
    min-width: 320px;
    position: relative;
    overflow: hidden;
    background-color: #fafafa;
    margin-top: 16px;
  }
  
  .panel.size-1 {
    width: 320px;
  }
  
  .panel.size-2 {
    width: 412px;
  }
  
  .panel.size-3 {
    width: 480px;
  }
  
  .panel.size-4 {
    width: 600px;
  }
  
  .panel.size-5 {
    width: 768px;
  }
  
  .panel .panel-body {
    padding: 16px;
    background-color: #FFF;
  }
</style>