export const state = () => ({
  items: {
    goodParameters: [],
  },
  item: {
    goodItem: {},
  },
  filter: {
    category_uuid: null,
  },
})

export const actions = {
  fetchBlankItems({ commit }) {
    return this.$axios.get('/api/resource').then(({ data }) => {
      commit('setBlankItems', data.data)
    })
  },
  fetchGoodParameters({ commit, getters }) {
    return this.$axios
      .get('/api/good/goodParameter', {
        // params: getters.getFilters,
      })
      .then(({ data }) => {
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
  deleteParameter({ commit }, data) {
    return this.$axios.delete('/api/resource/' + data.uuid)
  },
}

export const mutations = {
  editGood(state, good) {
    state.item.goodItem = good
  },
  setGoodParameters(state, data) {
    console.warn('goodParameters', state.items.goodParameters)
    state.items.goodParameters = data
  },
  setCategoryUuid(state, data) {
    state.filter.category_uuid = data
  },
}

export const getters = {
  getGoodParameters(state) {
    return state.items.goodParameters
  },
  getGoodItem(state) {
    return state.item.goodItem
  },
  getFilters(state) {
    return state.filter
  },
}
