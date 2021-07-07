export const state = () => ({
  items: {
    users: [],
  },
})

export const actions = {
  fetchUsers({ commit }) {
    return this.$axios.get('/api/avito/avitoUser').then(({ data }) => {
      commit('setUsers', data.data)
    })
  },
}

export const mutations = {
  setUsers(state, users) {
    state.items.users = users
  },
}

export const getters = {
  getUsers(state) {
    return state.items.users
  },
}
