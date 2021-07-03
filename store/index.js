export const state = () => ({
  fields: {
    offerManage: [
      {
        key: 'title',
        label: 'Наименование',
        class: 'align-middle text-center',
      },
      {
        key: 'rack_height',
        label: 'Высота',
        class: 'align-middle text-center',
      },
      {
        key: 'rack_width',
        label: 'Ширина',
        class: 'align-middle text-center',
      },
      {
        key: 'rack_depth',
        label: 'Глубина',
        class: 'align-middle text-center',
      },
      {
        key: 'rack_shelves_count',
        label: 'Кол-во полок',
        class: 'align-middle text-center',
      },
      {
        key: 'price',
        label: 'Цена',
        class: 'align-middle text-center',
      },
      {
        key: 'rack_count',
        label: 'Количество',
        class: 'align-middle text-center',
      },
      {
        key: 'summ',
        label: 'Сумма',
        class: 'align-middle text-center',
      },
      {
        key: 'actions',
        label: 'Действия',
        class: 'align-middle text-center',
      },
    ],
    offerConfirm: [
      {
        key: 'title',
        label: 'Наименование',
        class: 'align-middle text-center',
      },
      {
        key: 'price',
        label: 'Цена',
        class: 'align-middle text-center',
      },
      {
        key: 'rack_count',
        label: 'Количество',
        class: 'align-middle text-center',
      },
      {
        key: 'summ',
        label: 'Сумма',
        class: 'align-middle text-center',
      },
    ],
    managerCategory: [
      {
        key: 'title',
        label: 'Название суб-категории',
        class: 'align-middle text-center',
      },
      {
        key: 'image',
        label: 'Картинка',
        class: 'align-middle text-center',
      },
    ],
  },
  activeModals: {
    dimensionModal: false,
    managerCategoryAdd: false,
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
  getActiveManagerCategoryAddModal(state) {
    return state.activeModals.managerCategoryAdd
  },
  getActiveDimensionModal(state) {
    return state.activeModals.dimensionModal
  },

  getManagerCategoryFields(state) {
    return state.fields.managerCategory
  },
  getOfferManageFields(state) {
    return state.fields.offerManage
  },
  getOfferConfirmFields(state) {
    return state.fields.offerConfirm
  },
  getNewUuid: (state) => (payload) => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    )
  },
}
