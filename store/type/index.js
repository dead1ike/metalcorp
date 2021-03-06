export const state = () => ({
  items: {
    rack: [],
    basketProduct: [],
  },
  item: {
    rack: {},
  },
  filter: {
    search: '',
    uuid: [],
  },
})

export const actions = {
  async fetchRackItems({ commit }) {
    const { data } = await this.$axios.get('/api/rack/rack')
    commit('setTypes', data.data)
  },
  fetchType({ commit }, uuid) {
    return this.$axios.get(`/api/rack/rack/${uuid}`).then(({ data }) => {
      commit('setType', data.data)
    })
  },
  postRackType({ commit }, data) {
    return this.$axios.post('/api/rack/rack', {
      ...data,
    })
  },
  deleteRackType({ commit }, uuid) {
    return this.$axios.delete(`/api/rack/rack/${uuid}`)
  },
  uploadFile({ commit }, data) {
    const uploadingFile = new FormData()
    uploadingFile.set('image', data.image)
    return this.$axios.put(`/api/rack/rack/${data.uuid}`, uploadingFile)
  },
}
export const mutations = {
  setType(state, data) {
    state.item.rack = data
  },
  setTypes(state, data) {
    state.items.rack = data
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
    const count = state.items.basketProduct.find((item) => item.uuid === uuid).rack_count
    const price = state.items.basketProduct.find((item) => item.uuid === uuid).price
    state.items.basketProduct.find((item) => item.uuid === uuid).total = price * count
  },
  setCountDecrement(state, uuid) {
    state.items.basketProduct.find((item) => item.uuid === uuid).rack_count--
    const count = state.items.basketProduct.find((item) => item.uuid === uuid).rack_count
    const price = state.items.basketProduct.find((item) => item.uuid === uuid).price
    state.items.basketProduct.find((item) => item.uuid === uuid).total = price * count
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
    return state.items.rack
  },
  getRack(state) {
    return state.item.rack
  },
  getTypesByCategoryUuid: (state) => (categoryUuid) => {
    return state.items.rack.filter((item) => {
      return item.category_uuid === categoryUuid
    })
  },
  getTypeById: (state) => (typeUuid) => {
    return state.items.rack.find((item) => {
      return item.uuid === typeUuid
    })
  },
  getBasketProduct(state) {
    return state.items.basketProduct
  },
}
