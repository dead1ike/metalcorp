<template>
  <div class="overflow-hidden h-100 d-flex flex-row">
    <public-widget-sidebar />
    <div class="h-100 w-100 overflow-auto flex-column">
      <h3 class="p-10 font-weight-bold">
        Результаты поиска : <small class="">"{{ $route.query.title }}"</small>
      </h3>
      <public-widget-goods-catalog />

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
      return this.$store.getters['type/getTypesByCategoryUuid'](this.$route.params.uuid) || {}
    },
    getCategoryByUuid() {
      return this.$store.getters['category/getCategoryByUuid'](this.$route.params.uuid) || {}
    },
    getGoodItems() {
      return this.$store.getters['good/getGoodItems'] || {}
    },
  },
}
</script>
