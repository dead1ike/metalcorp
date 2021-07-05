export const state = () => ({
  items: {},
  item: {},
})

export const actions = {
  fetchBlank({ commit }) {
    return this.$axios.get('/api/resource').then(({ data }) => {
      commit('setBlank', data.data)
    })
  },
  saveBlank({ commit }, payload) {
    return this.$axios.put('/api/resource', {
      ...payload,
    })
  },
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},
}

export const mutations = {
  setBlank(state, data) {},
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}

export const getters = {
  getBlank(state) {},
  getBlank1(state) {},
  getBlank2(state) {},
}
