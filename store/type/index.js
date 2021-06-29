export const state = () => ({
  items: {
    types: [
      {
        id: '21',
        category_id: '2',
        title: 'Стеллажи СТФЛ ',
        src: '',
        slug: 'stfl',
        text: 'asdasdasdsfadfasfd',
      },
      {
        id: '22',
        category_id: '2',
        title: 'Стеллажи СТФ ',
        src: '',
        slug: 'stf',
        text: 'fasdfasdfasdfas',
      },
      {
        id: '23',
        category_id: '2',
        title: 'Стеллажи СТФУ ',
        src: '',
        slug: 'stfu',
        text: 'sdfasdfasdfasdf',
      },
      {
        id: '31',
        category_id: '3',
        title: 'Стеллажи МКФ',
        src: '',
        slug: 'mkf',
        text: 'fasdfasdfasdfasdf',
      },
      {
        id: '32',
        category_id: '3',
        title: 'Стеллажи SGR',
        src: '',
        slug: 'sgr',
        text: 'asdfasdfasdfsdf',
      },
      {
        id: '33',
        category_id: '3',
        title: 'Стеллажи СК/СКУ',
        src: '',
        slug: 'sku',
        text: 'asdfasdfasdfasdf',
      },
      {
        id: '41',
        category_id: null,
        title: 'Паллетные стеллажи / Фронтальные',
        src: '',
        slug: 'pallet',
        text: '',
      },
      {
        id: '42',
        category_id: null,
        title: 'Консольные стеллажи',
        src: '',
        slug: 'console',
        text: '',
      },
      {
        id: '43',
        category_id: null,
        title: 'Глубинные стеллажи',
        src: '',
        slug: 'depth',
        text: '',
      },
      {
        id: '44',
        category_id: null,
        title: 'Стеллажи для кабельной продукции / Катушечные',
        src: '',
        slug: 'cable',
        text: '',
      },
      {
        id: '45',
        category_id: null,
        title: 'Стеллажи для напольных покрытий',
        src: '',
        slug: 'roll',
        text: '',
      },
    ],
  },
  item: {
    type: {},
  },
})
export const actions = {
  fetchBlank({ commit }) {},
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},
}
export const mutations = {
  setType(state, data) {
    state.item.type = data
  },
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getTypes(state) {
    return state.items.types
  },
  getTypesByCategoryId: (state) => (categoryId) => {
    return state.items.types.filter((item) => {
      return item.category_id === categoryId
    })
  },
  getTypeById: (state) => (typeId) => {
    console.warn(typeId)
    return state.items.types.find((item) => {
      return item.id === typeId
    })
  },
  getBlank2(state) {},
}
