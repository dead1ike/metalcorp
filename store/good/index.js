export const state = () => ({
  items: {
    good: [],
    basketProduct: [],
  },
  item: {
    good: {},
  },
  filter: {
    search: '',
    uuid: [],
  },
})

export const actions = {
  async fetchGoods({ commit }, filters) {
    const { data } = await this.$axios.get('/api/good/good', {
      params: filters,
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
  setBlank(state, data) {
    //
  },
}

export const getters = {
  getGoodsByCategoryUuid: state => categoryUuid => {
    return state.items.good.filter(item => {
      return item.category_uuid === categoryUuid
    })
  },
  getGoodItems(state) {
    return state.items.good
  },
  getBlankItem(state) {
    return state.item.data
  },
  getBlank(state) {
    //
  },
}
