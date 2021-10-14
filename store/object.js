export const state = () => ({
  items: {
    object: [
      {
        uuid: '1',
        image: 'https://i.ibb.co/k8Tr6V3/object1.png',
        title: 'Архивные стеллажи для склада Обувного магазина г. Иркутск',
        subtitle: null,
      },
      {
        uuid: '2',
        image: 'https://i.ibb.co/F0BZ0MW/object2.png',
        title: 'Архивные стеллажи, г. Красноярск',
        subtitle: null,
      },
      {
        uuid: '3',
        image: 'https://i.ibb.co/3SyDBPR/object3.png',
        title: 'Архивные стеллажи на склад, г. Уфа, ООО “ФАРМГЕОКОМ”',
        subtitle: null,
      },
      {
        uuid: '4',
        image: 'https://i.ibb.co/GkJzQjr/object4.png',
        title: 'Грузовые стеллажи, г. Екатеринбург, ООО “Брависсимо”',
        subtitle: null,
      },
      {
        uuid: '5',
        image: 'https://i.ibb.co/RP4GvsD/object5.png',
        title: 'Грузовые стеллажи, Москва, склад для хранения тканей',
        subtitle: null,
      },
      {
        uuid: '6',
        image: 'https://i.ibb.co/RSXtRg4/object6.png',
        title: 'Грузовые стеллажи, г.Новосибирск, ООО “Брависсимо”',
        subtitle: null,
      },
      {
        uuid: '7',
        image: 'https://i.ibb.co/b7gGqPW/object7.png',
        title: 'Грузовые стеллажи, г. Сургут ООО “СЕВЕРНАЯ ТОРГОВАЯ КОМПАНИЯ” (склад холодильник для хранения сыров)',
        subtitle: '',
      },
      {
        uuid: '8',
        image: 'https://i.ibb.co/pdkRqb9/object8.png',
        title: 'Паллетные стеллажи, г. Екатеринбург ООО “Автотаун” (склад для хранения автозапчастей)',
        subtitle: '',
      },
      {
        uuid: '9',
        image: 'https://i.ibb.co/Z15r8Zf/object9.png',
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
