<template>
  <div class="toolbar">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">{{ appName }}</h2>

      <md-button class="md-icon-button" v-on:click="visitGitHub">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">{{ appName }}</h3>
        </div>
      </md-toolbar>
      <div class="container toolbar-content">
        <h3>GitHub</h3>
        <p>Star {{ appName }} on GitHub!</p>
        <md-button class="md-raised md-accent" @click="visitGitHub">Star</md-button>
      </div>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      appName: 'PenguinFiles'
    }
  },
  methods: {
    visitGitHub: function () {
      window.open('https://github.com/0xFireball/PenguinFiles')
    },
    toggleLeftSidenav: function () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolbar-content {
    margin-top: 15%;
  }
</style>