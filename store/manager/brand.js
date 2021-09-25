export const state = () => ({
  items: {
    brands: [],
  },
})

export const actions = {
  fetchBrandItems({ commit }) {
    return this.$axios.get('/api/brand').then(({ data }) => {
      commit('setBrandItems', data.data)
    })
  },
}

export const mutations = {
  setBrandItems(state, brands) {
    state.items.brands = brands
  },
}

export const getters = {
  getBrandItems(state) {
    return state.items.brands
  },
}
