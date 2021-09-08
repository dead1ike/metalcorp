export const state = () => ({
  items: {
    goods: [],
  },
  item: {
    data: {
      //
    },
  },
  pagination: {
    goods: {
      current_page: 1,
    },
  },
  goodsPaginationFilter: {
    limit: 50,
    page: 1,
  },
})

export const actions = {
  fetchGoods({ commit }) {
    return this.$axios.get('/api/good/good').then(({ data }) => {
      commit('setGoods', data.data)
    })
  },
  fetchBlankItem({ commit }, payload) {
    return this.$axios
      .post('/api/resource/' + payload.uuid, {
        ...payload,
      })
      .then(({ data }) => {
        commit('setBlankItem', data.data)
      })
  },
  postGood({ commit }, data) {
    const uploadingFile = new FormData()
    uploadingFile.set('image', data.image)
    uploadingFile.set('description', data.description)
    uploadingFile.set('title', data.title)
    uploadingFile.set('uuid', data.uuid)
    uploadingFile.set('category_uuid', data.category_uuid)
    uploadingFile.set('image_url', data.image_url)
    return this.$axios.post('/api/good/good', uploadingFile)
  },
  uploadFile({ commit }, data) {
    const uploadingFile = new FormData()
    uploadingFile.set('image', data.image)
    return this.$axios.patch(`/api/good/good/${data.uuid}`, uploadingFile)
  },
}

export const mutations = {
  setGoods(state, data) {
    state.items.goods = data
  },
  setCurrentPageGoods(state, currentPage) {
    if (state.pagination.goods.current_page === currentPage) return
    state.pagination.goods.current_page = currentPage
    state.goodsPaginationFilter.page = currentPage
  },
  setLimitGoods(state, limit) {
    if (state.goodsPaginationFilter.limit === limit) return
    state.goodsPaginationFilter.limit = limit
    state.pagination.goods.current_page = 1
    state.goodsPaginationFilter.page = 1
  },
}

export const getters = {
  getGoodsPagination(state) {
    return state.pagination.goods
  },
  getGoodsItems(state) {
    return state.items.goods
  },
  getBlankItem(state) {
    return state.item.data
  },
  getBlank(state) {
    //
  },
}
