export const state = () => ({
  items: {
    types: [],
    basketProduct: [],
  },
  item: {
    type: {},
  },
})

export const actions = {
  async fetchTypes({ commit }) {
    const { data } = await this.$axios.get('https://api-dev.skladskoi.com/api/rackType')
    console.warn('fetchTypes', data.data)
    commit('setTypes', data.data)
  },
  postParameter({ commit }, data) {
    this.$axios.post('https://api-dev.skladskoi.com/api/rackParameter', {
      ...data,
    })
  },
  putBlank({ commit }, data) {},
}
export const mutations = {
  setType(state, data) {
    state.item.type = data
  },
  setTypes(state, data) {
    state.items.types = data
  },
  setAddBasketProduct(state, data) {
    console.warn('beforeset', data)
    state.items.basketProduct.push(data)
    console.warn('afterset', state.items.basketProduct)
  },
  setDelBasketProduct(state, data) {
    state.items.basketProduct = _.filter(state.items.basketProduct, (item) => {
      return data.uuid !== item.uuid
    })
  },
  setDelBasketProducts(state) {
    state.items.basketProduct = []
  },
  setEditCount(state, data) {
    state.items.basketProduct.rack_count = data
  },
}
export const getters = {
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
