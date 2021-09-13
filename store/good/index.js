export const state = () => ({
  items: {
    good: [],
  },
  item: {
    good: {},
  },
  filter: {
    search: '',
    parameter_slug: null,
    parameter_value: '',
    category_uuid: null,
    uuid: [],
  },
})

export const actions = {
  async fetchGoods({ commit, getters }, filters) {
    const { data } = await this.$axios.get('/api/good/good', {
      params: getters.getFilters,
    })
    console.warn('fetchGoods', data)
    commit('setGoods', data.data)
  },
  fetchGood({ commit }, uuid) {
    return this.$axios.get(`/api/good/good/${uuid}`).then(({ data }) => {
      commit('setGood', data)
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
    state.filter.parameter_slug = data.parameter_slug
    state.filter.parameter_value = data.parameter_value
  },
  setCategoryUuid(state, uuid) {
    state.filter.category_uuid = uuid
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
