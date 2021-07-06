export const state = () => ({
  items: {
    types: [],
    basketProduct: [],
  },
  item: {
    type: {},
  },
  filter: {
    search: '',
    uuid: [],
    company_okved: [],
    company_utc: [],
    company_rate: [],
    company_employee_count: 'all',
    company_job: [],
  },
})

export const actions = {
  async fetchTypes({ commit }) {
    const { data } = await this.$axios.get('/api/rackType')
    commit('setTypes', data.data)
  },
  postParameter({ commit }, data) {
    this.$axios.post('/api/rackParameter', {
      ...data,
    })
  },
  postRackType({ commit }, data) {
    return this.$axios.post('/api/rackType', {
      ...data,
    })
  },
  deleteRackType({ commit }, uuid) {
    return this.$axios.delete(`/api/rackType/${uuid}`)
  },
  uploadFile({ commit }, data) {
    const uploadingFile = new FormData()
    uploadingFile.set('image', data.image)
    return this.$axios.post(`/api/rackType/${data.uuid}`, uploadingFile)
  },
}
export const mutations = {
  setType(state, data) {
    state.item.type = data
  },
  setTypes(state, data) {
    state.items.types = data
  },
  setAddBasketProduct(state, data) {
    state.items.basketProduct.push(data)
  },
  setDelBasketProduct(state, data) {
    state.items.basketProduct = _.filter(state.items.basketProduct, (item) => {
      return data.uuid !== item.uuid
    })
  },
  setDelBasketProducts(state) {
    state.items.basketProduct = []
  },
  setCountIncrement(state, uuid) {
    state.items.basketProduct.find((item) => item.uuid === uuid).rack_count++
  },
  setCountDecrement(state, uuid) {
    state.items.basketProduct.find((item) => item.uuid === uuid).rack_count--
  },
  setFilterItem(state, { fieldName, value }) {
    state.filter[fieldName] = value
  },
}
export const getters = {
  getFilter(state) {
    return state.filter
  },
  getTypes(state) {
    return state.items.types
  },
  getTypesByCategoryUuid: (state) => (categoryUuid) => {
    return state.items.types.filter((item) => {
      return item.category.uuid === categoryUuid
    })
  },
  getTypeById: (state) => (typeUuid) => {
    return state.items.types.find((item) => {
      return item.uuid === typeUuid
    })
  },
  getBasketProduct(state) {
    return state.items.basketProduct
  },
}
