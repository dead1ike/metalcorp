export const state = () => ({
  fields: {
    managerVacancy: [
      {
        key: 'name',
        label: 'Имя',
        class: 'align-middle text-left',
      },
      {
        key: 'phone',
        label: 'Телефон',
        class: 'align-middle text-left',
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-left',
      },
    ],
    managerGoods: [
      {
        key: 'title',
        label: 'Наименование',
        class: 'align-top text-left',
      },
      {
        key: 'parameters',
        label: 'Параметры',
        class: 'align-middle text-left',
      },
    ],

    offerManage: [
      {
        key: 'title',
        label: 'Наименование',
        class: 'align-middle text-center',
      },
      {
        key: 'parameters',
        label: 'Параметры',
        class: 'align-middle text-center',
      },
      {
        key: 'shelf_count',
        label: 'Количество полок',
        class: 'align-middle text-center',
      },
      {
        key: 'price',
        label: 'Цена',
        class: 'align-middle text-center',
      },
      {
        key: 'rack_count',
        label: 'Количество стеллажей',
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
    orderShow: [
      {
        key: 'title',
        label: 'Наименование',
        class: 'align-middle text-center',
      },
      {
        key: 'parameters',
        label: 'Параметры',
        class: 'align-middle text-center',
      },
      {
        key: 'shelf_count',
        label: 'Количество полок',
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
        key: 'total',
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
    managerOffer: [
      {
        key: 'name',
        label: 'ФИО заказчика',
        class: 'align-middle text-center',
      },
      // {
      //   key: 'email',
      //   label: 'Email',
      //   class: 'align-middle text-center',
      // },
      {
        key: 'phone',
        label: 'Телефон',
        class: 'align-middle text-center',
      },
      {
        key: 'created_at',
        label: 'Дата',
        class: 'align-middle text-center',
      },
      {
        key: 'total',
        label: 'Сумма заказа',
        class: 'align-middle text-center',
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-center',
      },
    ],
    user: [
      {
        key: 'email',
        label: 'Email пользователя',
        class: 'align-middle company-actions text-center',
      },
      {
        key: 'actions',
        label: 'Функции',
        class: 'align-middle company-actions text-center',
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
    managerComponentAdd: false,
    managerRackComponentAdd: false,
    managerOrderShow: false,
    categoryModal: false,
    userAdd: false,
    managerGoodsAdd: false,
    managerGoodsParameter: false,
  },
})
export const actions = {
  fetchBlank({ commit }) {},
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},

  uploadFile({ commit }, file) {
    const uploadingFile = new FormData()
    uploadingFile.set('price_file', file)
    return this.$axios.post('/api/good/good/price', uploadingFile)
  },
}
export const mutations = {
  setActiveModal(state, { modalName, modalStatus }) {
    state.activeModals[modalName] = modalStatus
  },
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getActiveManagerGoodsAddModal(state) {
    return state.activeModals.managerGoodsAdd
  },
  getActiveManagerGoodsParameterModal(state) {
    return state.activeModals.managerGoodsParameter
  },
  getActiveManagerRackComponentAddModal(state) {
    return state.activeModals.managerRackComponentAdd
  },
  getActiveManagerComponentAddModal(state) {
    return state.activeModals.managerComponentAdd
  },
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
  getActiveOrderShowModal(state) {
    return state.activeModals.managerOrderShow
  },
  getActiveCategoryModal(state) {
    return state.activeModals.categoryModal
  },
  getActiveModalUserAdd(state) {
    return state.activeModals.userAdd
  },

  getOrderShowFields(state) {
    return state.fields.orderShow
  },
  getManagerOfferFields(state) {
    return state.fields.managerOffer
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
  getManagerVacancyFiels(state) {
    return state.fields.managerVacancy
  },

  getGoodFields(state) {
    return state.fields.managerGoods
  },
  getOfferConfirmFields(state) {
    return state.fields.offerConfirm
  },
  getNewUuid: (state) => (payload) => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
    )
  },
  getUserFields: (state) => state.fields.user,
  validEmail: () => (payload) => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(payload)) {
      return false
    } else if (payload.length < 6) {
      return false
    }
    return true
  },
  validPhone: () => (payload) => {
    if (!payload.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
      return false
    }
    return true
  },
  validName: () => (payload) => {
    if (payload.length === 0) {
      return false
    }
    return true
  },
}
