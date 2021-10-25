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
    limit: 20,
    page: 1,
  },

  pagination: {
    goods: {
      current_page: 1,
      total: 0,
    },
  },
})

export const actions = {
  async fetchGoods({ commit, getters }) {
    const { data } = await this.$axios.post('/api/good/good/list', {
      ...getters.getGoodFilter,
    })
    commit('setGoods', data.data)
    commit('setGoodsTotal', data.meta.total)
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
  setGoodsTotal(state, total) {
    state.pagination.goods.total = total
  },
  setCurrentPageGoods(state, currentPage) {
    if (state.filter.page === currentPage) return
    state.filter.page = currentPage
  },
  setLimitGoods(state, limit) {
    if (state.filter.limit === limit) return
    state.filter.limit = limit
  },
}

export const getters = {
  getGoodItems(state) {
    return state.items.good
  },
  getGood(state) {
    return state.item.good
  },
  getGoodFilter(state) {
    return state.filter
  },
  getGoodsPagination(state) {
    return state.pagination.goods
  },
}
