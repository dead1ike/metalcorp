export const state = () => ({
  items: {
    category: [
      //
    ],
  },
  item: {
    data: {
      //
    },
  },
})

export const actions = {
  fetchWidgetCategoryItems({ commit }) {
    return this.$axios.get('/api/category').then(({ data }) => {
      commit('setWidgetCatergoryItems', data.data)
    })
  },
  fetchBlankItem({ commit }, payload) {
    return this.$axios
      .post('/api/resource/' + payload.uuid, {
        ...payload,
      })
      .then(({ data }) => {
        commit('setBlankItem', data.data)
      })
  },
  postBlank({ commit }, payload) {
    return this.$axios.post('/api/resource', {
      ...payload,
    })
  },
  updateBlank({ commit }, payload) {
    return this.$axios.put('/api/resource/' + payload.uuid, {
      ...payload,
    })
  },
}

export const mutations = {
  setWidgetCatergoryItems(state, data) {
    state.items.category = data
  },
  setBlankItem(state, data) {
    state.item.data = data
  },
  setBlank(state, data) {
    //
  },
}

export const getters = {
  getWidgetCategoryItems(state) {
    return state.items.category
  },
  getBlankItem(state) {
    return state.item.data
  },
  getBlank(state) {
    //
  },
}
