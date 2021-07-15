export const state = () => ({
  items: {
    component: [],
    rack_component: [],
  },
  item: {
    rack_component: {},
  },
  filters: {
    component: {
      title: '',
      page: 1,
      limit: 50,
    },
  },
})

export const actions = {
  fetchComponent({ commit }) {
    return this.$axios.get('/api/component').then(({ data }) => {
      commit('setComponent', data.data)
    })
  },
  fetchRackComponent({ commit, getters }) {
    return this.$axios
      .get('/api/rack/rackComponent', {
        params: getters.getComponentParams,
      })
      .then(({ data }) => {
        commit('setRackComponent', data.data)
      })
  },
  saveBlank({ commit }, payload) {
    return this.$axios.put('/api/resource', {
      ...payload,
    })
  },
  postComponent({ commit }, data) {
    return this.$axios.post('/api/component', {
      ...data,
    })
  },
  postRackComponent({ commit }, data) {
    return this.$axios.post('/api/rack/rackComponent', {
      ...data,
    })
  },
  deleteComponent({ commit }, uuid) {
    return this.$axios.delete(`/api/component/${uuid}`)
  },
  deleteRackComponent({ commit }, uuid) {
    return this.$axios.delete(`/api/rack/rackComponent/${uuid}`)
  },
}

export const mutations = {
  setComponent(state, data) {
    state.items.component = data
  },
  setRackComponent(state, data) {
    state.items.rack_component = data
  },
  setCurrentComponent(state, data) {
    state.item.rack_component = data
  },
  setFilterComponent(state, data) {
    state.filters.component[data.filterName] = data.filterData
  },
}

export const getters = {
  getCurrentComponent(state) {
    return state.item.rack_component
  },
  getComponent(state) {
    return state.items.component
  },
  getRackComponent(state) {
    return state.items.rack_component
  },
  getComponentParams(state) {
    return state.filters.component
  },
}
