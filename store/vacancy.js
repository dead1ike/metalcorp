export const state = () => ({
  items: {
    vacancies: [],
  },
  item: {
    data: {
      //
    },
  },
})

export const actions = {
  fetchVacancies({ commit }) {
    return this.$axios.get('/api/vacancies').then(({ data }) => {
      commit('setVacancies', data.data)
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
  postVacancy({ commit }, data) {
    const uploadingFile = new FormData()
    uploadingFile.set('pdf_file', data.pdf_file)
    uploadingFile.set('name', data.name)
    uploadingFile.set('phone', data.phone)
    return this.$axios.post('/api/vacancies', uploadingFile)
  },
  deleteVacancy({ commit }, payload) {
    return this.$axios.delete('/api/vacancies/' + payload.uuid, {
      ...payload,
    })
  },
}

export const mutations = {
  setVacancies(state, data) {
    state.items.vacancies = data
  },
  setBlankItem(state, data) {
    state.item.data = data
  },
  setBlank(state, data) {
    //
  },
}

export const getters = {
  getVacancies(state) {
    return state.items.vacancies
  },
  getBlankItem(state) {
    return state.item.data
  },
  getBlank(state) {
    //
  },
}
