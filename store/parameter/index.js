export const state = () => ({
  items: {
    parameter: [],
    rackTypeParameter: [],
  },
  item: {},
})
export const actions = {
  async fetchParameter({ commit }) {
    const { data } = await this.$axios.get('https://api-dev.skladskoi.com/api/rackParameter')
    commit('setParameter', data.data)
  },
  async fetchRackTypeParameter({ commit }) {
    const { data } = await this.$axios.get('https://api-dev.skladskoi.com/api/rackTypeParameter')
    commit('setRackTypeParameter', data.data)
  },
  postParameter({ commit }, data) {
    return this.$axios.post('https://api-dev.skladskoi.com/api/rackParameter', {
      ...data,
    })
  },
  postRackTypeParameter({ commit }, data) {
    return this.$axios.post('https://api-dev.skladskoi.com/api/rackTypeParameter', {
      ...data,
    })
  },
  deleteRackTypeParameter({ commit }, uuid) {
    return this.$axios.delete(`https://api-dev.skladskoi.com/api/rackTypeParameter/${uuid}`)
  },
  deleteParameter({ commit }, uuid) {
    return this.$axios.delete(`https://api-dev.skladskoi.com/api/rackParameter/${uuid}`)
  },
}
export const mutations = {
  setParameter(state, data) {
    state.items.parameter = data
  },
  setRackTypeParameter(state, data) {
    console.warn('rackTypeParameters', data)
    state.items.rackTypeParameter = data
  },
  setBlank2(state, data) {},
}
export const getters = {
  getParameter(state) {
    return state.items.parameter
  },
  getRackTypeParameter(state) {
    return state.items.rackTypeParameter
  },
  getBlank2(state) {},
}
