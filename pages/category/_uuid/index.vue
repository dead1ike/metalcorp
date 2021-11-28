<template>
  <div class="overflow-hidden h-100 d-flex flex-row">
    <public-widget-sidebar />
    <div class="h-100 w-100 overflow-auto flex-column">
      <template v-if="$route.params.uuid === 'search'">
        <h3 class="p-10 font-weight-bold">
          Результаты поиска : <small class="">"{{ $route.query.title }}"</small>
        </h3>
        <div v-if="$store.getters['good/getGoodItems'].length <= 0" class="d-flex">
          <h3 class="p-10">По вашему запросу ничего не найдено!</h3>
          <div class="ml-10 text-center flex-fill"><b-icon-emoji-dizzy scale="13" variant="corp" /></div>
        </div>
      </template>
      <template v-else-if="getGoodItems.length > 0">
        <public-widget-goods-catalog />
      </template>
      <public-category-items />
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
    getGoodItems() {
      return this.$store.getters['good/getGoodItems'] || {}
    },
  },
}
</script>
