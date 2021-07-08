export const state = () => ({
  items: {
    price: [],
  },
  item: {},
})
export const actions = {
  async fetchComponentPrice({ commit }) {
    const { data } = await this.$axios.get('/api/rack/rackComponentParameter')
    commit('setComponentPrice', data.data)
  },
  postComponentPrice({ commit }, data) {
    console.warn('data', data)
    return this.$axios.post('/api/rack/rackComponentParameter', {
      ...data,
    })
  },
  deletePriceItem({ commit }, uuid) {
    return this.$axios.delete(`/api/rack/rackComponentParameter/${uuid}`)
  },
}
export const mutations = {
  setComponentPrice(state, data) {
    state.items.price = data
  },
  setRackPrice(state, data) {},
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getComponentPrice(state) {
    return state.items.price
  },
  getComponentPriceByUuid: state => rackUuid => {
    return state.items.price.filter(item => {
      return item.rack_component.rack_uuid === rackUuid
    })
  },
  getBlank1(state) {},
  getBlank2(state) {},
}
