export const state = () => ({
  items: {
    object: [
      {
        uuid: '1',
        image: '~/static/object1.png',
        title: 'Архивные стеллажи для склада Обувного магазина г. Иркутск',
        subtitle: null,
      },
      {
        uuid: '2',
        image: '~/static/object2.png',
        title: 'Архивные стеллажи, г. Красноярск',
        subtitle: null,
      },
      {
        uuid: '3',
        image: '~/static/object3.png',
        title: 'Архивные стеллажи на склад, г. Уфа, ООО “ФАРМГЕОКОМ”',
        subtitle: null,
      },
      {
        uuid: '4',
        image: '~/static/object4.png',
        title: 'Грузовые стеллажи, г. Екатеринбург, ООО “Брависсимо”',
        subtitle: null,
      },
      {
        uuid: '5',
        image: '~/static/object5.png',
        title: 'Грузовые стеллажи, Москва, склад для хранения тканей',
        subtitle: null,
      },
      {
        uuid: '6',
        image: '~/static/object6.png',
        title: 'Грузовые стеллажи, г.Новосибирск, ООО “Брависсимо”',
        subtitle: null,
      },
      {
        uuid: '7',
        image: '~/static/object7.png',
        title: 'Грузовые стеллажи, г. Сургут ООО “СЕВЕРНАЯ ТОРГОВАЯ КОМПАНИЯ”',
        subtitle: null,
      },
      {
        uuid: '8',
        image: '~/static/object8.png',
        title: 'Паллетные стеллажи, г. Екатеринбург ООО “Автотаун”',
        subtitle: null,
      },
      {
        uuid: '9',
        image: '~/static/object9.png',
        title: 'Паллетные стеллажи, г. Екатеринбург, ООО “УралБиофарм”',
        subtitle: null,
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
