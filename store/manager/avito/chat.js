export const state = () => ({
  items: {
    chats: [],
  },
})

export const actions = {
  fetchChats({ commit }) {
    return this.$axios.get('/api/avito/chat').then(({ data }) => {
      commit('setChats', data.chats)
    })
  },
  fetchChatsTemp({ commit }) {
    return this.$axios.post('/api/avito/avitoChat/fetch').then(({ data }) => {
      commit('setChats', data)
    })
  },
}

export const mutations = {
  setChats(state, chats) {
    state.items.chats = chats
  },
}

export const getters = {
  getChats(state) {
    return state.items.chats
  },
}
