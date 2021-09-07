export const state = () => ({
  items: {
    goods: [],
  },
  item: {
    data: {
      //
    },
  },
})

export const actions = {
  fetchGoods({ commit }) {
    return this.$axios.get('/api/good/good').then(({ data }) => {
      commit('setGoods', data.data)
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
  postGood({ commit }, data) {
    return this.$axios.post('/api/good/good', {
      ...data,
    })
  },
  uploadFile({ commit }, data) {
    const uploadingFile = new FormData()
    uploadingFile.set('image', data.image)
    return this.$axios.patch(`/api/good/good/${data.uuid}`, uploadingFile)
  },
}

export const mutations = {
  setGoods(state, data) {
    state.items.goods = data
  },
  setBlankItem(state, data) {
    state.item.data = data
  },
  setBlank(state, data) {
    //
  },
}

export const getters = {
  getGoodsItems(state) {
    return state.items.goods
  },
  getBlankItem(state) {
    return state.item.data
  },
  getBlank(state) {
    //
  },
}
