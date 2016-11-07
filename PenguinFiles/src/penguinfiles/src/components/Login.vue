<template>
  <div class="login">
    <h3>Log In / Sign Up</h3>
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