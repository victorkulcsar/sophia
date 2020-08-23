import userApi from '../api/userApi'

const state = () => ({
  user: {}
})

// getters
const getters = {
  getUser: (state, getters, rootState) => {
    return state.user
  }
}

// actions
const actions = {
  setUser ({ commit, state }, products) {
    userApi.getUser()
      .then(({ data }) => {
        commit('setUser', data)
      })
  }
}

// mutations
const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
