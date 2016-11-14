<template>
  <div class="intro">
    <img src="../assets/logo.png" width="240" height="240">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      msg: 'PenguinFiles'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .intro {
    text-align: center;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>