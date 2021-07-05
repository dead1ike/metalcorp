export const state = () => ({
  items: {
    parameterPrice: [],
  },
  item: {},
})
export const actions = {
  async fetchParameterPrice({ commit }) {
    const { data } = await this.$axios.get('https://api-dev.skladskoi.com/api/rackPriceParameter')
    commit('setParameterPrice', data.data)
  },
  postParameterPrice({ commit }, data) {
    return this.$axios.post('https://api-dev.skladskoi.com/api/rackPriceParameter', {
      ...data,
    })
  },
  putBlank({ commit }, data) {},
}
export const mutations = {
  setParameterPrice(state, data) {
    state.items.parameterPrice = data
  },
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
