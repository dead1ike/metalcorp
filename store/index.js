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
        sortable: true,
      },
      {
        key: 'image',
        label: 'Картинка',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'description',
        label: 'Описание',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-center',
      },
    ],
    managerRack: [
      {
        key: 'title',
        label: 'Наименование',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'image',
        label: 'Картинка',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'description',
        label: 'Описание',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'load',
        label: 'Нагрузка на стеллаж',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'shelf_load',
        label: 'Нагрузка на полку',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'section_load',
        label: 'Нагрузка на секцию',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-center',
      },
    ],
    managerParameter: [
      {
        key: 'title',
        label: 'Название параметра',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-center',
      },
    ],
    managerRackTypeParameters: [
      {
        key: 'title',
        label: 'Название стеллажа',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'rack_parameter_title',
        label: 'Параметр',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'rack_parameter_value',
        label: 'Значение',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-center',
      },
    ],
    priceParameter: [
      {
        key: 'title',
        label: 'Наименование стеллажа',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'parameter',
        label: 'Параметр',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'price',
        label: 'Цена',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-center',
      },
    ],
  },

  activeModals: {
    dimensionModal: false,
    managerCategoryAdd: false,
    managerRackAdd: false,
    managerParameterAdd: false,
    managerRackTypeParameterAdd: false,
    managerRackPriceParameterAdd: false,
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
  getActiveManagerRackAddModal(state) {
    return state.activeModals.managerRackAdd
  },
  getActiveManagerParameterAddModal(state) {
    return state.activeModals.managerParameterAdd
  },
  getActiveManagerPriceParameterAddModal(state) {
    return state.activeModals.managerRackPriceParameterAdd
  },
  getActiveManagerRackTypeParameterAddModal(state) {
    return state.activeModals.managerRackTypeParameterAdd
  },
  getActiveDimensionModal(state) {
    return state.activeModals.dimensionModal
  },

  getPriceParameterFields(state) {
    return state.fields.priceParameter
  },
  getManagerRackTypeParametersFields(state) {
    return state.fields.managerRackTypeParameters
  },
  getManagerCategoryFields(state) {
    return state.fields.managerCategory
  },
  getManagerRackFields(state) {
    return state.fields.managerRack
  },
  getManagerParameterFields(state) {
    return state.fields.managerParameter
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
