export const state = () => ({
  items: {
    parameter: [],
    rackTypeParameter: [],
  },
  item: {},
})
export const actions = {
  async fetchParameter({ commit }) {
    const { data } = await this.$axios.get('/api/rack/rackParameter')
    commit('setParameter', data.data)
  },
  async fetchRackTypeParameter({ commit }) {
    const { data } = await this.$axios.get('/api/rack/rackTypeParameter')
    commit('setRackTypeParameter', data.data)
  },
  postParameter({ commit }, data) {
    return this.$axios.post('/api/rack/rackParameter', {
      ...data,
    })
  },
  postRackTypeParameter({ commit }, data) {
    return this.$axios.post('/api/rack/rackTypeParameter', {
      ...data,
    })
  },
  deleteRackTypeParameter({ commit }, uuid) {
    return this.$axios.delete(`/api/rack/rackTypeParameter/${uuid}`)
  },
  deleteParameter({ commit }, uuid) {
    return this.$axios.delete(`/api/rack/rackParameter/${uuid}`)
  },
}
export const mutations = {
  setParameter(state, data) {
    state.items.parameter = data
  },
  setRackTypeParameter(state, data) {
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
