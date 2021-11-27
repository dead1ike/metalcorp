<template>
  <div class="overflow-hidden h-100 d-flex flex-row">
    <public-widget-sidebar />
    <div class="overflow-auto h-100 container__main">
      <h1 class="p-3">Результаты поиска</h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'catalog',
  head: {
    title: 'Поиск',
  },
}
</script>
