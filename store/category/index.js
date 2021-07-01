export const state = () => ({
  items: {
    category: [],
  },
})
export const actions = {
  async fetchCategory({ commit }) {
    const { data } = await this.$axios.get('http://skladskoi.com:8820/api/category')
    console.warn('fetchCategory', data.data)
    commit('setCategory', data.data)
  },
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},
}
export const mutations = {
  setCategory(state, data) {
    state.items.category = data
  },
  setBlank2(state, data) {},
}
export const getters = {
  getCategoryItems(state) {
    return state.items.category
  },
  getBlank2(state) {},
}
