<template>
  <div class="h-100 d-flex flex-column">
    <public-dashboard-navbar />
    <Nuxt />
    <template v-if="$store.getters.getActiveDimensionModal">
      <public-dimension-modal />
    </template>
    <template v-if="$store.getters.getActiveCategoryModal" class="asdasd">
      <public-category-order-modal />
    </template>
  </div>
</template>

<script>
export default {
  // watch: {
  //   '$store.state.category.filter': {
  //     handler() {
  //       console.warn('newValue')
  //     },
  //     deep: true,
  //   },
  // },
  mounted() {
    // console.warn(this.$state)
    this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
      if (modalId === 'dimension-modal') {
        this.$store.commit('setActiveModal', {
          modalName: 'dimensionModal',
          modalStatus: false,
        })
      } else if (modalId === 'category-modal') {
        this.$store.commit('setActiveModal', {
          modalName: 'categoryModal',
          modalStatus: false,
        })
      }
    })

    this.$root.$on('fetch', (model, factor) => {
      // this.$root.$emit('fetch', 'Rack', 'Items')
      // this.$root.$emit('fetch', 'Category', 'Items')
      // this.$root.$emit('fetch', 'Category', 'Item')
      // this.$root.$emit('fetch', 'WidgetCategory', 'Items')
      switch (model) {
        case 'Category':
          factor === 'Items' ? this.fetchCategoryItemsD() : this.fetchCategoryItemD()
          break
        case 'Rack':
          factor === 'Items' ? this.fetchRackItemsD() : this.fetchRackItemD()
          break
        case 'Goods':
          factor === 'Items' ? this.fetchGoodsItemsD() : this.fetchGoodsItemD()
          break
        case 'WidgetCategory':
          this.fetchWidgetCategoryItemsD()
          break
      }
    })
  },
  beforeDestroy() {
    // this.$root.$off('bv::modal::hide')
    // this.$root.$off('fetch')
  },

  created() {
    // this.$store.getters["category/getCategoryFilter"]
    // this.$store.watch(
    //   (state, getters) => getters['category/getCategoryFilter'],
    //   (newGood, oldGood) => {
    //     console.warn('newGood', newGood)
    //   },
    // )
    this.fetchCategoryItemsD = _.debounce(this.fetchCategoryItems, 1000)
    this.fetchCategoryItemD = _.debounce(this.fetchCategoryItem, 1000)

    this.fetchRackItemsD = _.debounce(this.fetchRackItems, 1000)
    this.fetchRackItemD = _.debounce(this.fetchRackItem, 1000)

    this.fetchGoodsItemsD = _.debounce(this.fetchGoodsItems, 1000)
    this.fetchGoodsItemD = _.debounce(this.fetchGoodsItem, 1000)
    this.fetchWidgetCategoryItemsD = _.debounce(this.fetchWidgetCategoryItems, 1000)
  },

  methods: {
    // Category
    fetchCategoryItems() {
      this.$store.dispatch('category/fetchCategoryItems')
    },
    fetchCategoryItem() {
      this.$store.dispatch('category/fetchCategoryItem')
    },

    // Rack
    fetchRackItems() {
      this.$store.dispatch('type/fetchRackItems')
    },
    fetchRackItem() {
      this.$store.dispatch('type/fetchRackItem')
    },

    // Goods
    fetchGoodsItems() {
      this.$store.dispatch('good/fetchGoodsItems')
    },
    fetchGoodsItem() {
      this.$store.dispatch('good/fetchGoodsItem')
    },

    // Widget
    fetchWidgetCategoryItems() {
      this.$store.dispatch('widget/fetchWidgetCategoryItems')
    },
  },
}
</script>
<style lang="scss">
@import 'assets/scss/app';
</style>
