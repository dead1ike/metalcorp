export const state = () => ({
  items: {
    goods: [],
  },
  item: {
    data: {
      //
    },
  },
  filter: {
    search: '',
    category_uuid: '',
    limit: 20,
    page: 1,
  },
  pagination: {
    goods: {
      current_page: 1,
      total: 0,
    },
  },
  goodsPaginationFilter: {
    limit: 50,
    page: 1,
  },
})

export const actions = {
  fetchGoods({ commit, getters }) {
    return this.$axios
      .get('/api/good/goodManager', {
        params: getters.getGoodsFilter,
      })
      .then(({ data }) => {
        commit('setGoods', data.data)
        commit('setGoodsTotal', data.meta.total)
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
  changeBrand({ commit }, { itemGoods, itemBrand }) {
    return this.$axios.patch(`/api/good/good/${itemGoods.uuid}`, {
      brand_uuid: itemBrand.uuid,
    })
  },

  putGoodsId({ commit }, { itemGoods, itemGoodsId }) {
    return this.$axios.put(`/api/good/good/${itemGoods.uuid}`, {
      goods_id: itemGoodsId,
    })
  },
  deleteGoodsId({ commit }, { itemGoods }) {
    return this.$axios.patch(`/api/good/good/${itemGoods.uuid}`, {
      goods_id: '',
    })
  },
  putGoodsUrl({ commit }, { itemGoods, itemGoodsUrl }) {
    return this.$axios.put(`/api/good/good/${itemGoods.uuid}`, {
      goods_url: itemGoodsUrl,
    })
  },
  deleteGoodsUrl({ commit }, { itemGoods }) {
    return this.$axios.patch(`/api/good/good/${itemGoods.uuid}`, {
      goods_url: '',
    })
  },
  putGoodsPrice({ commit }, { itemGoods, itemGoodsPrice }) {
    return this.$axios.put(`/api/good/good/${itemGoods.uuid}`, {
      price: itemGoodsPrice,
    })
  },
  deleteGoodsPrice({ commit }, { itemGoods }) {
    return this.$axios.put(`/api/good/good/${itemGoods.uuid}`, {
      price: '0',
    })
  },
}

export const mutations = {
  setGoods(state, data) {
    state.items.goods = data
  },
  setFilterItem(state, { fieldName, value }) {
    state.filter[fieldName] = value
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
  setGoodsCategoryFilter(state, categoryUuid) {
    state.filter.category_uuid = categoryUuid
  },
}

export const getters = {
  getGoodsFilter(state) {
    return state.filter
  },
  getGoodsPagination(state) {
    return state.pagination.goods
  },
  getGoodsItems(state) {
    return state.items.goods
  },
  getFilterLimit(state) {
    return state.filter.limit
  },
}
