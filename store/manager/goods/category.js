export const state = () => ({
  items: {
    category: [],
    favorites: [],
  },
  item: {
    category: {},
  },
  filter: {
    parent_uuid: 'all',
    limit: 100,
    page: 1,
  },
  pagination: {
    category: {
      current_page: 1,
      total: 0,
    },
  },
})
export const actions = {
  async fetchCategory({ commit, getters }) {
    const { data } = await this.$axios.get('/api/category', {
      params: getters.getCategoryFilter,
    })
    commit('setCategory', data.data)
    commit('setCategoryTotal', data.meta.total)
  },
  postCategory({ commit }, data) {
    return this.$axios.post('/api/category', {
      ...data,
    })
  },
  patchCategory({ commit }, { uuid, data }) {
    return this.$axios.put('/api/category/' + uuid, {
      ...data,
    })
  },
  uploadFile({ commit }, data) {
    const uploadingFile = new FormData()
    uploadingFile.set('image', data.image)
    return this.$axios.post(`/api/category/${data.uuid}`, uploadingFile)
  },
  deleteCategory({ commit }, uuid) {
    return this.$axios.delete(`/api/category/${uuid}`)
  },
}
export const mutations = {
  setFilterItem(state, { fieldName, value }) {
    state.filter[fieldName] = value
  },
  setCategoryTotal(state, total) {
    state.pagination.category.total = total
  },
  setCurrentPageCategory(state, currentPage) {
    if (state.filter.page === currentPage) return
    state.filter.page = currentPage
  },
  setCategory(state, data) {
    state.items.category = data
  },
  setCurrentCategory(state, data) {
    state.item.category = data
  },
  setCurrentCategoryUuid(state, data) {
    state.filter.parent_uuid = data
  },
  setLimitCategory(state, limit) {
    if (state.filter.limit === limit) return
    state.filter.limit = limit
  },
  setFavoritesArray(state, { item }) {
    state.items.favorites.push(item)
  },
  setFavoritesSlice(state, { item }) {
    const index = state.items.favorites.findIndex((itemFavorite) => itemFavorite.uuid === item.uuid)
    if (index > -1) {
      state.items.favorites.splice(index, 1)
    }
  },
}
export const getters = {
  getFavorites(state) {
    return state.items.favorites
  },
  getCategoryFilter(state) {
    return state.filter
  },
  getCategoryPagination(state) {
    return state.pagination.category
  },
  getCategoryItems(state) {
    return state.items.category
  },
  getCategoryByUuid: (state) => (uuid) => {
    return state.items.category.find((item) => {
      return item.uuid === uuid
    })
  },
  getCurrentCategory(state) {
    return state.item.category
  },
  getCurrentCategoryUuid(state) {
    return state.item.parent_uuid
  },
}
