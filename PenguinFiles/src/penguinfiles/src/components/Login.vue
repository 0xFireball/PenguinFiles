<template>
  <div class="login">
    <md-tabs class="md-accent">
      <md-tab id="t-login" md-label="Log In">

        <form v-on:submit.prevent="tryLogin">
          <md-input-container>
            <label>Username</label>
            <md-input v-model="lUsername"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" v-model="lPassword"></md-input>
          </md-input-container>
          <input type="submit" class="invisible"></input>
          <md-button class="md-raised md-primary" v-on:click="tryLogin">Log In</md-button>
        </form>
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
          <input type="submit" class="invisible"></input>
          <md-button class="md-raised md-primary" v-on:click="trySignup">Sign Up</md-button>
        </form>
      </md-tab>

      <md-tab id="t-about" md-label="About" v-md-ink-ripple>
        <aboutWidget></aboutWidget>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import AboutWidget from './widgets/aboutWidget'
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      lUsername: '', // login username
      lPassword: '', // login password
      rPassword: '', // register password
      rConfirmPassword: '' // register confirm password
    }
  },
  methods: {
    tryLogin: function () {
      // nothing
      window.alert('Can\'t log in yet.')
      let vm = this
      // send login post
      axios.post('/p/login', {
        username: lUsername,
        password: lPassword
      })
      .then((response) => {
        // TODO: process response
      })
      .catch((error) => {
        // TODO: handle error
      })
    },
    trySignup: function () {
      // nothing
      window.alert('Can\'t sign up yet.')
    }
  },
  components: {
    AboutWidget
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .invisible {
    display: none;
  }
</style>