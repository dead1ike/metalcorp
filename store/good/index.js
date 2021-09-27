export const state = () => ({
  items: {
    good: [],
  },
  item: {
    good: {},
  },
  filter: {
    search: '',
    parameters: {},
    category_uuid: null,
  },
})

export const actions = {
  async fetchGoods({ commit, getters }) {
    const { data } = await this.$axios.post('/api/good/good/list', {
      ...getters.getFilters,
    })
    commit('setGoods', data.data)
  },
  fetchGood({ commit }, uuid) {
    return this.$axios.get(`/api/good/good/${uuid}`).then(({ data }) => {
      commit('setGood', data.data)
    })
  },
  postBlank({ commit }, payload) {
    return this.$axios.post('/api/resource', {
      ...payload,
    })
  },
  updateBlank({ commit }, payload) {
    return this.$axios.put('/api/resource/' + payload.uuid, {
      ...payload,
    })
  },
}

export const mutations = {
  setGood(state, data) {
    state.item.good = data
  },
  setGoods(state, data) {
    state.items.good = data
  },
  setFilterItem(state, data) {
    state.filter.parameters[data.slug] = data.value
  },
  setCategoryUuid(state, uuid) {
    state.filter.category_uuid = uuid
  },
  setClearFilter(state) {
    state.filter.parameters = {}
  },
}

export const getters = {
  getGoodItems(state) {
    return state.items.good
  },
  getGood(state) {
    return state.item.good
  },
  getFilters(state) {
    return state.filter
  },
}
