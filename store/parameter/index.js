export const state = () => ({
  items: {
    parameter: [],
  },
  item: {},
})
export const actions = {
  async fetchParameter({ commit }) {
    const { data } = await this.$axios.get('https://api-dev.skladskoi.com/api/rackParameter')
    commit('setParameter', data.data)
  },
  postParameter({ commit }, data) {
    this.$axios.post('https://api-dev.skladskoi.com/api/rackParameter', {
      ...data,
    })
  },
  putBlank({ commit }, data) {},
}
export const mutations = {
  setParameter(state, data) {
    state.items.parameter = data
  },
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getParameter(state) {
    return state.items.parameter
  },
  getBlank1(state) {},
  getBlank2(state) {},
}
