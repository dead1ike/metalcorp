export const state = () => ({
  items: {
    order: [],
  },

  item: {
    order: {},
  },
})
export const actions = {
  async fetchOrder({ commit }) {
    const { data } = await this.$axios.get('/api/order')
    commit('setOrders', data.data)
  },
  postOrder({ commit }, data) {
    return this.$axios.post('/api/order', {
      ...data,
    })
  },
  deleteOrder({ commit }, uuid) {
    console.warn('store', uuid)
    return this.$axios.delete(`/api/order/${uuid}`)
  },
}
export const mutations = {
  setOrders(state, data) {
    state.items.order = data
  },
  setOrder(state, data) {
    state.item.order = data
  },
  setBlank2(state, data) {},
}
export const getters = {
  getOrders(state) {
    return state.items.order
  },
  getCurrentOrder(state) {
    return state.item.order
  },
  getBlank2(state) {},
}
