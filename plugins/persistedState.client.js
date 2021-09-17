// import createPersistedState from 'vuex-persistedstate'
// // import basketProduct from '~/store/type/index'
//
// export default ({ store }) => {
//   createPersistedState({
//     paths: [],
//   })(store)
// }
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    paths: ['manager.goods.category.items.favorites'],
  })(store)
}
