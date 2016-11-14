import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// Styles
import './assets/styles/global.css'
import './assets/styles/material-icons.css'
import './assets/styles/normalize.css'
import './assets/styles/ffskeleton.css'

// UI
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// Register plugins
Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.theme.register('apptheme', {
  primary: 'pink',
  accent: {
    color: 'light-blue',
    hue: 600
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
