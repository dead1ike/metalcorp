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

    this.$root.$on('fetch', (model, factor) => {
      // this.$root.$emit('fetch', 'Category', 'Items')
      // this.$root.$emit('fetch', 'Category', 'Item')
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
      }
    })
  },

  created() {
    this.fetchCategoryItemsD = _.debounce(this.fetchCategoryItems, 1000)
    this.fetchCategoryItemD = _.debounce(this.fetchCategoryItem, 1000)

    this.fetchRackItemsD = _.debounce(this.fetchRackItems, 1000)
    this.fetchRackItemD = _.debounce(this.fetchRackItem, 1000)

    this.fetchGoodsItemsD = _.debounce(this.fetchGoodsItems, 1000)
    this.fetchGoodsItemD = _.debounce(this.fetchGoodsItem, 1000)
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
      this.$store.dispatch('category/fetchRackItems')
    },
    fetchRackItem() {
      this.$store.dispatch('category/fetchRackItem')
    },

    // Goods
    fetchGoodsItems() {
      this.$store.dispatch('category/fetchGoodsItems')
    },
    fetchGoodsItem() {
      this.$store.dispatch('category/fetchGoodsItem')
    },
  },
}
</script>
<style lang="scss">
@import 'assets/scss/app';
</style>
