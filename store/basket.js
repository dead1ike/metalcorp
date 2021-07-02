export const state = () => ({
  items: {
    staticItems: [
      {
        uuid: '1',
        title: 'Стеллаж 1',
        description: 'Описание1Описание1Описание1Описание1Описание1Описание1Описание1',
        image: 'https://i.ibb.co/m0QhQNM/msstrong.png',
      },
      {
        uuid: '2',
        title: 'Стеллаж 2',
        description: 'Описание2Описание2Описание2Описание2Описание2Описание2Описание2',
        image: 'https://i.ibb.co/C6vCdnm/ms-standart.png',
      },
      {
        uuid: '3',
        title: 'Стеллаж 3',
        description: 'Описание3Описание3Описание3Описание3Описание3Описание3Описание3',
        image: 'https://i.ibb.co/mDs60n1/mspro.png',
      },
      {
        uuid: '4',
        title: 'Стеллаж 4',
        description: 'Описание4Описание4Описание4Описание4Описание4Описание4Описание4',
        image: 'https://i.ibb.co/yshSNDc/mshard.png',
      },
      {
        uuid: '5',
        title: 'Стеллаж 5',
        description: 'Описание5Описание5Описание5Описание5Описание5Описание5Описание5',
        image: 'https://i.ibb.co/7KT0chB/mkf.jpg',
      },
      {
        uuid: '6',
        title: 'Стеллаж 6',
        description: 'Описание6Описание6Описание6Описание6Описание6Описание6Описание6',
        image: 'https://i.ibb.co/T17npNM/sku.jpg',
      },
      {
        uuid: '7',
        title: 'Стеллаж 7',
        description: 'Описание7Описание7Описание7Описание7Описание7Описание7Описание7',
        image: 'https://i.ibb.co/0Z0dH0r/stfu.jpg',
      },
      {
        uuid: '8',
        title: 'Стеллаж 8',
        description: 'Описание8Описание8Описание8Описание8Описание8Описание8Описание8',
        image: 'https://i.ibb.co/ygQBB9Q/sgr.jpg',
      },
      {
        uuid: '9',
        title: 'Стеллаж 9',
        description: 'Описание9Описание9Описание9Описание9Описание9Описание9Описание9',
        image: 'https://i.ibb.co/t3D1CG1/mst.jpg',
      },
      {
        uuid: '10',
        title: 'Стеллаж 10',
        description: 'Описание10Описание10Описание10Описание10Описание10Описание10Описание10',
        image: 'https://i.ibb.co/PTDpxT0/ms.jpg',
      },
    ],
  },
  item: {},
})
export const actions = {
  fetchBlank({ commit }) {},
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},
}
export const mutations = {
  setBlank(state, data) {},
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getTestItems(state) {
    return state.items.staticItems
  },
  getBlank1(state) {},
  getBlank2(state) {},
}
