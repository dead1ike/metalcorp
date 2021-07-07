export const state = () => ({
  field: {
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
    managerType: [
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
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-center',
      },
    ],
    managerTypeParameter: [
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
    managerPrice: [
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
    managerComponent: [
      {
        key: 'title',
        label: 'Название компонента',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'actions',
        label: '',
        class: 'align-middle text-center',
      },
    ],
    managerRackComponent: [
      {
        key: 'rack_title',
        label: 'Тип стеллажа',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'rack_component_value',
        label: 'Название компонента',
        class: 'align-middle text-center',
        sortable: true,
      },
      {
        key: 'is_constructor',
        label: 'Состоит из комплектующих?',
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
  item: {},
})

export const actions = {
  fetchBlank({ commit }) {
    return this.$axios.get('/api/resource').then(({ data }) => {
      commit('setBlank', data.data)
    })
  },
  saveBlank({ commit }, payload) {
    return this.$axios.put('/api/resource', {
      ...payload,
    })
  },
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},
}

export const mutations = {
  setBlank(state, data) {},
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}

export const getters = {
  getManagerRackComponentFields(state) {
    return state.field.managerRackComponent
  },
  getManagerComponentFields(state) {
    return state.field.managerComponent
  },
  getManagerCategoryFields(state) {
    return state.field.managerCategory
  },
  getManagerTypeFields(state) {
    return state.field.managerType
  },
  getManagerParameterFields(state) {
    return state.field.managerParameter
  },
  getManagerTypeParameterFields(state) {
    return state.field.managerTypeParameter
  },
  getManagerPriceFields(state) {
    return state.field.managerPrice
  },
}
