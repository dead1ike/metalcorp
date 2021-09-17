export const state = () => ({
  items: {
    category: [],
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
    console.warn('setCurrenPage', currentPage)
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
    console.warn('limit', limit)
    if (state.filter.limit === limit) return
    state.filter.limit = limit
  },
}
export const getters = {
  getCategoryFilter(state) {
    return state.filter
  },
  getCategoryPagination(state) {
    return state.pagination.category
  },
  getCategoryItems(state) {
    return state.items.category
  },
  getCategoryByUuid: state => uuid => {
    return state.items.category.find(item => {
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