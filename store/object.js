export const state = () => ({
  items: {
    object: [
      {
        uuid: '1',
        image: 'https://i.ibb.co/RgczXV2/8.jpg',
        title: 'Склад в Екатеринбурге',
      },
      {
        uuid: '2',
        image: 'https://i.ibb.co/Z6h130S/1.jpg',
        title: 'Склад в Калининграде',
      },
      {
        uuid: '3',
        image: 'https://i.ibb.co/28mHQDs/2.jpg',
        title: 'Склад в Мухосранске',
      },
      {
        uuid: '4',
        image: 'https://i.ibb.co/sQgdf8Z/3.jpg',
        title: 'Склад в Урюпинске',
      },
      {
        uuid: '5',
        image: 'https://i.ibb.co/dQHs8GD/4.jpg',
        title: 'Склад в Магадане',
      },
      {
        uuid: '6',
        image: 'https://i.ibb.co/JBjPmQ0/5.jpg',
        title: 'Склад в ЮАР',
      },
      {
        uuid: '7',
        image: 'https://i.ibb.co/wyjmHYG/6.jpg',
        title: 'Склад под селом Малиновка',
      },
      {
        uuid: '8',
        image: 'https://i.ibb.co/jD9f6XW/7.png',
        title: 'Склад в Дагестане',
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
  getObjects(state) {
    return state.items.object
  },
  getBlank1(state) {},
  getBlank2(state) {},
}
