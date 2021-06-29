export const state = () => ({
  items: {
    category: [
      {
        id: '1',
        title: 'Металлические стеллажи',
        img: null,
        text: null,
        slug: 'metal_rack',
      },
      {
        id: '2',
        parent_id: '1',
        slug: 'archive',
        title: 'Архивные стеллажи',
        src: 'https://thumb.tildacdn.com/tild6264-6238-4736-b463-383331636339/-/resize/300x/-/format/webp/WhatsApp_Image_2020-.jpg',
        text: 'Предназначены для небольших складских помещений, под легкий и мелкогабаритный груз (архивные помещения, для хранения документов; пункты выдачи, для хранения коробок; небольшие складские помещения при магазинах и предприятиях, для хранения продукции)',
      },
      {
        id: '3',
        parent_id: '1',
        slug: 'medium',
        title: 'Среднегрузовые стеллажи',
        src: 'https://thumb.tildacdn.com/tild3761-6235-4164-b461-363366363361/-/resize/300x/-/format/webp/WhatsApp_Image_2020-.jpg',
        text: 'Предназначены для организация складского пространства при производствах или складах предназначенных для хранения крупногабаритного и тяжелого оборудования. Конструктивная особенность этих стеллажей позволяет хранить крупногабаритные и тяжелые грузы, что повышает вместимость и эффективность складского пространства. Грузовые стеллажи отличаются высокой прочностью, жесткостью и износостойкостью! ',
      },
    ],
  },
})
export const actions = {
  fetchBlank({ commit }) {},
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},
}
export const mutations = {
  setStellazh(state, data) {
    state.item.stellazh = data
  },
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getCategoryItems(state) {
    return state.items.category
  },
  getStellazh(state) {
    return state.item.stellazh
  },
  getBlank2(state) {},
}
