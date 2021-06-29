export const state = {
  items: {
    rack_name: '',
    rack_description: '',
  },
  options: {
    rack_category: [
      { text: 'Выберите', uuid: null },
      { text: 'Металлические стеллажи', uuid: 'dee62b91-75bc-469f-a2f3-9f07193289ef' },
    ],
    rack_subcategory: '',
    rack_type: '',
    rack_height: '',
    rack_width: '',
    rack_depth: '',
    rack_shelves_count: '',
    rack_shelf_load: '',
    rack_load: '',
  },
}

export const actions = {}

export const mutations = {}

export const getters = {
  getOptionsCategory(state) {
    return state.options.rack_category
  },
  getOptionsSubcategory(state) {
    return state.options.rack_subcategory
  },
  getOptionsType(state) {
    return state.options.rack_type
  },
  getOptionsHeight(state) {
    return state.options.rack_height
  },
  getOptionsWidth(state) {
    return state.options.rack_width
  },
  getOptionsDepth(state) {
    return state.options.rack_depth
  },
  getOptionsShelvesCount(state) {
    return state.options.rack_shelves_count
  },
  getOptionsShelfLoad(state) {
    return state.options.rack_shelf_load
  },
  getOptionsLoad(state) {
    return state.options.rack_load
  },
}
