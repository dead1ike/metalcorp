export const state = () => ({
  items: {
    messages: [],
  },
})

export const actions = {
  fetchChats({ commit }) {
    return this.$axios.get('/api/avito/avitoMessage').then(({ data }) => {
      commit('setChats', data.data)
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
