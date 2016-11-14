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
      </md-tab>

      <md-tab id="t-signup" md-label="Sign Up">
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
      window.alert('Can\'t submit yet.')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>