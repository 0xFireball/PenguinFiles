import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// Routes
import routes from './routes'

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

let router = new VueRouter({
  hashbang: false,
  routes
})

router.afterEach((currentRoute) => {
  let mainContent = document.querySelector('.main-content')

  if (mainContent) {
    mainContent.scrollTop = 0
  }
})

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
