<template>
  <div class="h-100 d-flex flex-column">
    <public-dashboard-navbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
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

    this.$root.$on('fetch', (model, factor, payload = null) => {
      switch (model) {
        case 'Category':
          if (factor === 'Items') {
            this.fetchCategoryItemsD()
          } else {
            this.fetchCategoryItemD(payload)
          }
          break
        case 'Rack':
          factor === 'Items' ? this.fetchRackItemsD() : this.fetchRackItemD(payload)
          break
        case 'Goods':
          factor === 'Items' ? this.fetchGoodsItemsD() : this.fetchGoodsItemD(payload)
          break
        case 'WidgetCategory':
          this.fetchWidgetCategoryItemsD()
          break
      }
    })
    this.$root.$emit('fetch', 'WidgetCategory', 'Items')
    this.$root.$emit('fetch', 'Category', 'Items')
    this.$root.$emit('fetch', 'Goods', 'Items')
  },
  beforeDestroy() {
    this.$root.$off('bv::modal::hide')
    this.$root.$off('fetch')
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
    fetchCategoryItem(payload) {
      this.$store.dispatch('category/fetchCategoryItem', payload)
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
