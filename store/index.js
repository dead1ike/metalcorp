export const state = () => ({
  items: {},
  activeModals: {
    publicCategoryItemDescription: false,
  },
})
export const actions = {
  fetchBlank({ commit }) {},
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},
}
export const mutations = {
  setActiveModal(state, { modalName, modalStatus }) {
    state.activeModals[modalName] = modalStatus
  },
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getActivePublicCategoryItemDescription(state) {
    return state.activeModals.publicCategoryItemDescription
  },
}
