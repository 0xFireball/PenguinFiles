import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// UI
import Keen from 'keen-ui'

// Register plugins
Vue.use(VueRouter)
Vue.use(Keen)

// Styles
import './assets/styles/global.css'
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
