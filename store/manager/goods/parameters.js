export const state = () => ({
  items: {
    goodParameters: [],
  },
  item: {
    goodItem: {},
  },
})

export const actions = {
  fetchBlankItems({ commit }) {
    return this.$axios.get('/api/resource').then(({ data }) => {
      commit('setBlankItems', data.data)
    })
  },
  fetchGoodParameters({ commit }, uuid) {
    return this.$axios.get('/api/good/goodParameter').then(({ data }) => {
      commit('setGoodParameters', data.data)
    })
  },
  postParameter({ commit }, data) {
    return this.$axios.post('/api/good/goodParameter', {
      good_uuid: data.good_uuid,
      parameter_uuid: data.parameter_uuid,
      parameter_value: data.value,
    })
  },
  deleteGoodParameter({ commit }, goodParameterUuid) {
    return this.$axios.delete('/api/good/goodParameter/' + goodParameterUuid)
  },
}

export const mutations = {
  editGood(state, good) {
    state.item.goodItem = good
  },
  setGoodParameters(state, data) {
    state.items.goodParameters = data
  },
  setBlank(state, data) {
    //
  },
}

export const getters = {
  getGoodParameters(state) {
    return state.items.goodParameters
  },
  getGoodItem(state) {
    return state.item.goodItem
  },
  getBlank(state) {
    //
  },
}
