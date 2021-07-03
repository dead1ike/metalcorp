export const state = () => ({
  items: {
    chats: [],
  },
})

export const actions = {
  fetchChats({ commit }) {
    this.$axios.get('https://api-dev.skladskoi.com/api/avito/chat').then(({ data }) => {
      commit('setChats', data.chats)
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
