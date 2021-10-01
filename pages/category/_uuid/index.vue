<template>
  <div class="overflow-hidden h-100 d-flex flex-row">
    <public-widget-sidebar />
    <div class="h-100 overflow-auto flex-column">
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
