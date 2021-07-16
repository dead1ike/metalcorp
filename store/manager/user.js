export const state = () => ({
  items: {
    user: [],
  },
  edit: {
    user: {},
  },
})

export const actions = {
  async fetchUsers({ commit }) {
    const { data } = await this.$axios.get('/api/user')
    commit('setUserItems', data.data)
  },
  addUser({ commit }, data) {
    return this.$axios.post('/api/user', {
      ...data,
    })
  },
  putUser({ commit }, data) {
    console.warn(data)
    return this.$axios.put(`/api/user/${data.id}`, {
      ...data,
    })
  },
}

export const mutations = {
  setUserItems(state, data) {
    state.items.user = data
  },
  setEditUser(state, user) {
    state.edit.user = user
  },
  clearUser(state) {
    state.edit.user = {}
  },
}

export const getters = {
  getUsers(state) {
    return state.items.user
  },
  getEditUser(state) {
    return state.edit.user
  },
}
