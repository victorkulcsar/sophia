import Vue from 'vue'
import Vuex from 'vuex'
import squad from './squad'
import user from './user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    squad,
    user
  },
  strict: debug
})
