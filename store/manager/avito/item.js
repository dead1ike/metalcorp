export const state = () => ({
  items: {
    items: [],
  },
})

export const actions = {
  fetchItems({ commit }) {
    return this.$axios.get('/api/avito/avitoItem').then(({ data }) => {
      commit('setItems', data.data)
    })
  },
}

export const mutations = {
  setItems(state, items) {
    state.items.items = items
  },
}

export const getters = {
  getItems(state) {
    return state.items.items
  },
}
