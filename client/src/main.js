import Vue from './registerComponents'
import VueCookies from 'vue-cookies'
import Vuetify from 'vuetify'
import route from './router'
import './assets/css/vue-material.css'
import './assets/css/main.css'
import './scss/_variables.scss'
import './scss/_functions.scss'
import 'vuetify/dist/vuetify.min.css'

Vue.use(route)
Vue.use(VueCookies)
Vue.use(Vuetify)

new Vue({ el: '#root' });
