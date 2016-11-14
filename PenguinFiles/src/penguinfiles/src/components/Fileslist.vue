<template>
  <div class="fileslist">
    <panel :title="header">
      <md-list class="custom-list md-triple-line">
        <md-subheader>{{ header }}</md-subheader>

        <md-list-item>
          <md-avatar>
            <md-icon class="md-primary">cloud</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Ali Connors</span>
            <span>Brunch this weekend?</span>
            <p>I'll be in your neighborhood doing errands...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">star</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <md-icon class="md-primary">cloud</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>me, Scott, Jennifer</span>
            <span>Summer BBQ</span>
            <p>Wish I could come, but I'm out of town ...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>star_border</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <md-icon class="md-primary">cloud</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Sandra Adams</span>
            <span>Oui oui</span>
            <p>Do you have Paris recommendations ...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>star_border</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <md-icon class="md-primary">cloud</md-icon>
          </md-avatar>

          <div class="md-list-text-container">
            <span>Trevor Hansen</span>
            <span>Order confirmation</span>
            <p>Thank you for your recent order from ...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>star_border</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>
    </panel>
  </div>
</template>

<script>
import Panel from './Panel'

export default {
  name: 'fileslist',
  data () {
    return {
      header: 'My Files'
    }
  },
  methods: {
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