export const state = () => ({
  items: {
    datas: [
      //
    ]
  },
  item: {
    data: {
      //
    }
  }
})

export const actions = {
  fetchBlankItems({ commit }) {
    return this.$axios.get('/api/resource').then(({ data }) => {
      commit('setBlankItems', data.data)
    })
  },
  fetchBlankItem({ commit }, payload) {
    return this.$axios
      .post('/api/resource/' + payload.uuid, {
        ...payload
      })
      .then(({ data }) => {
        commit('setBlankItem', data.data)
      })
  },
  postBlank({ commit }, payload) {
    return this.$axios.post('/api/resource', {
      ...payload
    })
  },
  updateBlank({ commit }, payload) {
    return this.$axios.put('/api/resource/' + payload.uuid, {
      ...payload
    })
  }
}

export const mutations = {
  setBlankItems(state, datas) {
    state.items.datas = datas
  },
  setBlankItem(state, data) {
    state.item.data = data
  },
  setBlank(state, data) {
    //
  }
}

export const getters = {
  getBlankItems(state) {
    return state.items.datas
  },
  getBlankItem(state) {
    return state.item.data
  },
  getBlank(state) {
    //
  }
}
