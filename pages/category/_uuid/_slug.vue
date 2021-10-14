<template>
  <div class="overflow-hidden h-100 d-flex flex-row">
    <public-widget-sidebar />
    <div class="h-100 w-100 overflow-auto flex-column">
      <h2 class="font-weight-bold pt-10 pb-6 px-10">{{ getCategoryByUuid.title }}</h2>

      <template v-if="getTypeByCategoryUuid.length > 0">
        <public-widget-rack-catalog />
      </template>
      <template v-else-if="getGoodItems.length > 0">
        <public-widget-goods-catalog />
      </template>
      <template v-else>
        <public-widget-rack-category />
      </template>
      <public-main-third-block />
      <public-widget-callback />
      <public-dashboard-footer />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'catalog',

  computed: {
    getFilter() {
      return this.$store.getters['good/getFilters']
    },
    getTypeByCategoryUuid() {
      return this.$store.getters['type/getTypesByCategoryUuid'](this.$route.params.uuid)
    },
    getCategoryByUuid() {
      return this.$store.getters['category/getCategoryByUuid'](this.$route.params.uuid)
    },
    getGoodItems() {
      return this.$store.getters['good/getGoodItems']
    },
  },

  mounted() {
    this.fetchGoods()
    this.fetchRacks()
    this.$store.dispatch('category/fetchCategory').then(() => {
      this.form.title = this.getCategoryByUuid.title
    })
  },
  methods: {
    fetchRacks() {
      this.$store.dispatch('type/fetchTypes').then(() => {})
    },
    fetchGoods() {
      this.$store.dispatch('good/fetchGoods').then(() => {
        // console.warn('goods', this.getGoodItems)
      })
    },
    openModal() {
      this.$store.commit('category/setCurrentCategory', {
        category_title: this.form.title,
      })
      this.$store.commit('setActiveModal', {
        modalName: 'categoryModal',
        modalStatus: true,
      })
    },
  },
}
</script>
