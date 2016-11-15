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
      }
    }
  }
</script>

<style scoped>
  .panel {
    max-width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #fafafa;
    margin-top: 16px;
  }
  
  .panel .panel-body {
    background-color: #FFF;
  }
</style>