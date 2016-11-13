<template>
  <div class="login">
    <h3>Log In / Sign Up</h3>
    <md-tabs>
      <md-tab id="movies" md-label="Movies">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas
          voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab id="music" md-label="Music">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas
          voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas
          voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab id="books" md-label="Books">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>

      <md-tab id="pictures" md-label="Pictures">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>
    <form v-on:submit.prevent="tryLogin">
      <div class="row">
        <div class="six columns">
          <label for="Username">Username</label>
          <input class="u-full-width" type="text" placeholder="Username" id="Username">
        </div>
        <div class="six columns">
          <label for="Password">Password</label>
          <input class="u-full-width" type="password" id="Password">
        </div>
      </div>
      <input class="button-primary" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  methods: {
    tryLogin: function () {
      // nothing
      window.alert('Can\'t submit yet.')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>