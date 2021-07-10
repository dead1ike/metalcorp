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
  sendMessageChat({ commit }, payload) {
    return this.$axios.post('/api/avito/avitoMessage/sendMessageChat', {
      ...payload,
    })
  },
  sendMessageChats({ commit }, payload) {
    return this.$axios.post('/api/avito/avitoMessage/reception', {
      id: '012e54fb-ce19-4ef9-a8b2-b95862267dc3',
      payload: {
        type: 'message',
        value: {
          id: 'e05efaf7e33bab2808bebc2a3e005534',
          type: 'text',
          chat_id: 'u2i-2072135368-3372804',
          content: { text: 'Каким образом можно сделать заказ, если параметры не корректны?' },
          created: 1625896314,
          user_id: 100769274,
          author_id: 3372804,
        },
      },
      version: 'v2.0.0',
      timestamp: 1625896314,
    })
  },
  fetchAccountOther({ commit }) {
    return this.$axios.post('/api/avito/avitoUser/fetchAccountOther')
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
