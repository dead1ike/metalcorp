import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    paths: ['favorites.favorites', 'type.items.basketProduct'],
  })(store)
}
