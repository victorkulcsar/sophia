import Vue from './registerComponents'
import VueCookies from 'vue-cookies'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import route from './router'

import './assets/css/main.css'
import './scss/_variables.scss'
import './scss/_functions.scss'
import 'mdi/css/materialdesignicons.min.css'
import 'flag-icon-css/css/flag-icon.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/scss/style.scss'

Vue.use(route)
Vue.use(VueCookies)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store
})
