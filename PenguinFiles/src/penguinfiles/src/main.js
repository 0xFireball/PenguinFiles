import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// Styles
import './assets/styles/global.css'
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'

// UI
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// Register plugins
Vue.use(VueRouter)
Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
