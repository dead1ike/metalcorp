<template>
  <div class="overflow-hidden h-100 d-flex flex-row">
    <public-widget-sidebar />
    <div class="h-100 w-100 overflow-auto flex-column">
      <template v-if="$route.params.uuid === 'search'">
        <h3 class="p-10 font-weight-bold">
          Результаты поиска : <small class="">"{{ $route.query.title }}"</small>
        </h3>
        <div class="d-flex" v-if="$store.getters['good/getGoodItems'].length <= 0">
          <h3 class="p-10">По вашему запросу ничего не найдено!</h3>
          <div class="ml-10 text-center flex-fill"><b-icon-emoji-dizzy scale="13" variant="corp" /></div>
        </div>
      </template>
      <public-widget-goods-catalog />
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
}
</script>
