<template>
  <div class="overflow-hidden h-100 d-flex flex-row">
    <public-widget-sidebar />
    <div class="h-100 overflow-auto w-100 flex-column">
      <public-widget-rack-page />
      <public-dashboard-footer />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'catalog',
}
</script>
