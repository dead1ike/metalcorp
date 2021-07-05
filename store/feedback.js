export const state = () => ({
  items: {
    feedback: [],
  },
  item: {},
})
export const actions = {
  async fetchFeedback({ commit }) {
    const { data } = await this.$axios.get('/api/feedback')
    commit('setFeedback', data.data)
  },
  postFeedback({ commit }, data) {
    const boundaryForm = new FormData()
    boundaryForm.set('image', data.image)
    boundaryForm.set('text', data.text)
    boundaryForm.set('username', data.username)
    boundaryForm.set('uuid', data.uuid)
    return this.$axios.post('/api/feedback', boundaryForm)
  },
  putBlank({ commit }, data) {},
}
export const mutations = {
  setFeedback(state, data) {
    state.items.feedback = data
  },
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getFeedback(state) {
    return state.items.feedback
  },
  getBlank1(state) {},
  getBlank2(state) {},
}
