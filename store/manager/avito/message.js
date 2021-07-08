export const state = () => ({
  items: {
    messages: [],
  },
})

export const actions = {
  fetchMessages({ commit }) {
    return this.$axios.get('/api/avito/avitoMessage').then(({ data }) => {
      commit('setMessages', data.data)
    })
  },
}

export const mutations = {
  setMessages(state, messages) {
    state.items.messages = messages
  },
}

export const getters = {
  getMessages(state) {
    return state.items.messages
  },
}
