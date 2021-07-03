export const state = () => ({
  items: {
    category: [],
  },
})
export const actions = {
  async fetchCategory({ commit }) {
    const { data } = await this.$axios.get('https://api-dev.skladskoi.com/api/category')
    console.warn('fetchCategory', data.data)
    commit('setCategory', data.data)
  },
  postCategory({ commit }, data) {
    return this.$axios.post('https://api-dev.skladskoi.com/api/category', {
      ...data,
    })
  },
  uploadFile({ commit }, data) {
    const uploadingFile = new FormData()
    uploadingFile.set('image', data.image)
    return this.$axios.post(`https://api-dev.skladskoi.com/api/category/${data.uuid}`, uploadingFile)
  },
  deleteCategory({ commit }, uuid) {
    return this.$axios.delete(`https://api-dev.skladskoi.com/api/category/${uuid}`)
  },
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
