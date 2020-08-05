const state = () => ({})

// getters
const getters = {
  teste: (state, getters, rootState) => {},
}

// actions
const actions = {
  teste ({ commit, state }, products) {
    commit('setCheckoutStatus', null)
    commit('setCartItems', { items: [] })
  },
}

// mutations
const mutations = {
  teste (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}