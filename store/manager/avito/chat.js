export const state = () => ({
  items: {
    chats: [],
  },
})

export const actions = {
  fetchChats({ commit }) {
    return this.$axios.get('/api/avito/avitoChat').then(({ data }) => {
      commit('setChats', data.data)
    })
  },
  fetchMessageChat({ commit }, payload) {
    return this.$axios.post('/api/avito/avitoMessage/fetchChat', {
      ...payload,
    })
  },
  fetchAvitoChats({ commit }) {
    return this.$axios.post('/api/avito/avitoChat/fetch')
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
