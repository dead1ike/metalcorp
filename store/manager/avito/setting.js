export const state = () => ({
  items: {
    settings: [],
  },
  item: {
    authorization_code: {},
    token: {},
    account: {},
  },
})

export const actions = {
  fetchSettngs({ commit }) {
    return this.$axios.get('/api/avito/setting').then(({ data }) => {
      commit('setSettngs', data.data)
    })
  },
  saveBlank({ commit }, payload) {
    return this.$axios.put('/api/resource', {
      ...payload,
    })
  },
}

export const mutations = {
  setSettngs(state, settings) {
    state.items.settings = settings

    const authorizationCode = settings.find((itemSetting) => itemSetting.key === 'authorization_code')
    state.item.authorization_code = authorizationCode && authorizationCode.value ? authorizationCode.value : {}

    const token = settings.find((itemSetting) => itemSetting.key === 'token')
    state.item.token = token && token.value ? token.value : {}

    const account = settings.find((itemSetting) => itemSetting.key === 'account')
    state.item.account = account && account.value ? account.value : {}
  },
}

export const getters = {
  getAuthorizationCode(state) {
    return state.item.authorization_code
  },
  getToken(state) {
    return state.item.token
  },
  getAccount(state) {
    return state.item.account
  },
}
