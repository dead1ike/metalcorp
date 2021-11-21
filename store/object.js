export const state = () => ({
  items: {
    object: [
      {
        uuid: '1',
        image: '/img/object/object1.png',
        title: 'Архивные стеллажи для склада Обувного магазина г. Иркутск',
        subtitle: null,
      },
      {
        uuid: '2',
        image: '/img/object/object2.png',
        title: 'Архивные стеллажи, г. Красноярск',
        subtitle: null,
      },
      {
        uuid: '3',
        image: '/img/object/object3.png',
        title: 'Архивные стеллажи на склад, г. Уфа, ООО “ФАРМГЕОКОМ”',
        subtitle: null,
      },
      {
        uuid: '4',
        image: '/img/object/object4.png',
        title: 'Грузовые стеллажи, г. Екатеринбург, ООО “Брависсимо”',
        subtitle: null,
      },
      {
        uuid: '5',
        image: '/img/object/object5.png',
        title: 'Грузовые стеллажи, Москва, склад для хранения тканей',
        subtitle: null,
      },
      {
        uuid: '6',
        image: '/img/object/object6.png',
        title: 'Грузовые стеллажи, г.Новосибирск, ООО “Брависсимо”',
        subtitle: null,
      },
      {
        uuid: '7',
        image: '/img/object/object7.png',
        title: 'Грузовые стеллажи, г. Сургут ООО “СЕВЕРНАЯ ТОРГОВАЯ КОМПАНИЯ”',
        subtitle: null,
      },
      {
        uuid: '8',
        image: '/img/object/object8.png',
        title: 'Паллетные стеллажи, г. Екатеринбург ООО “Автотаун”',
        subtitle: null,
      },
      {
        uuid: '9',
        image: '/img/object/object9.png',
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
