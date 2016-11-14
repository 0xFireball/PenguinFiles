<template>
  <div class="login">
    <md-tabs v-md-theme="'apptheme'" class="md-accent">
      <md-tab id="t-login" md-label="Log In">

        <form v-on:submit.prevent="tryLogin">
          <md-input-container>
            <label>Username</label>
            <md-input></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password"></md-input>
          </md-input-container>
        </form>
        <md-button class="md-raised md-primary" v-on:click="tryLogin">Log In</md-button>
      </md-tab>

      <md-tab id="t-signup" md-label="Sign Up">
        <form v-on:submit.prevent="trySignup">
          <md-input-container>
            <label>Username</label>
            <md-input></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Confirm Password</label>
            <md-input type="password"></md-input>
          </md-input-container>
        </form>
        <md-button class="md-raised md-primary" v-on:click="trySignup">Sign Up</md-button>
      </md-tab>

      <md-tab id="t-about" md-label="About">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas
          voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas
          voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>
    </md-tabs>
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
      window.alert('Can\'t log in yet.')
    },
    trySignup: function () {
      // nothing
      window.alert('Can\'t sign up yet.')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>