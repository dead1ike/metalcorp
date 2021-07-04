export const state = () => ({
  items: {
    rekvizity: [
      {
        text: 'Главная',
        to: '/',
      },
      {
        text: 'Реквизиты',
        active: true,
      },
    ],
    otzyvy: [
      {
        text: 'Главная',
        to: '/',
      },
      {
        text: 'Отзывы',
        active: true,
      },
    ],
    obyekty: [
      {
        text: 'Главная',
        to: '/',
      },
      {
        text: 'Наши объекты',
        active: true,
      },
    ],
    vakansii: [
      {
        text: 'Главная',
        to: '/',
      },
      {
        text: 'Вакансии',
        active: true,
      },
    ],
    kontakty: [
      {
        text: 'Главная',
        to: '/',
      },
      {
        text: 'Контакты',
        active: true,
      },
    ],
    sotrudnichestvo: [
      {
        text: 'Главная',
        to: '/',
      },
      {
        text: 'Сотрудничество',
        active: true,
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
  getRekvizityItems(state) {
    return state.items.rekvizity
  },
  getOtzyvyItems(state) {
    return state.items.otzyvy
  },
  getObyektyItems(state) {
    return state.items.obyekty
  },
  getVakansiiItems(state) {
    return state.items.vakansii
  },
  getKontaktyItems(state) {
    return state.items.kontakty
  },
  getSotrudnichestvoItems(state) {
    return state.items.sotrudnichestvo
  },
}
