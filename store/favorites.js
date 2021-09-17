export const state = () => ({
  favorites: [],
})
export const actions = {}
export const mutations = {
  setFavoritesArray(state, { item }) {
    state.favorites.push(item)
  },
  setFavoritesSlice(state, { item }) {
    const index = state.favorites.findIndex(itemFavorite => itemFavorite.uuid === item.uuid)
    if (index > -1) {
      state.favorites.splice(index, 1)
    }
  },
}
export const getters = {
  getFavorites(state) {
    return state.favorites
  },
}
