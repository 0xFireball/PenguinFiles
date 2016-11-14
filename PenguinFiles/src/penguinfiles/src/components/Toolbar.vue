<template>
  <div class="toolbar">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">{{ appName }}</h2>

      <md-button class="md-icon-button" v-on:click="visitGitHub">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>