<template>
  <div class="overflow-hidden h-100 d-flex flex-row">
    <public-widget-sidebar />
    <div class="h-100 overflow-auto flex-column w-100">
      <public-feedback-manage />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'catalog',
}
</script>
