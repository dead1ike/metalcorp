export const state = () => ({
  items: {
    parameterPrice: [],
  },
  item: {},
})
export const actions = {
  async fetchParameterPrice({ commit }) {
    const { data } = await this.$axios.get('/api/rack/rackPriceParameter')
    commit('setParameterPrice', data.data)
  },
  postParameterPrice({ commit }, data) {
    return this.$axios.post('/api/rack/rackPriceParameter', {
      ...data,
    })
  },
  deletePriceItem({ commit }, uuid) {
    return this.$axios.delete(`/api/rack/rackPriceParameter/${uuid}`)
  },
}
export const mutations = {
  setParameterPrice(state, data) {
    state.items.parameterPrice = data
  },
  setRackPrice(state, data) {},
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getParameterPrice(state) {
    return state.items.parameterPrice
  },
  getBlank1(state) {},
  getBlank2(state) {},
}
