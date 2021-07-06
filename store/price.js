export const state = () => ({
  items: {
    parameterPrice: [],
  },
  item: {},
})
export const actions = {
  async fetchParameterPrice({ commit }) {
    const { data } = await this.$axios.get('/api/rackPriceParameter')
    commit('setParameterPrice', data.data)
  },
  postParameterPrice({ commit }, data) {
    return this.$axios.post('/api/rackPriceParameter', {
      ...data,
    })
  },
  deletePriceItem({ commit }, uuid) {
    return this.$axios.delete(`https://api-dev.skladskoi.com/api/rackPriceParameter/${uuid}`)
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
