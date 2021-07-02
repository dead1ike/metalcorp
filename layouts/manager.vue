<template>
  <div class="d-flex flex-column">
    <public-dashboard-navbar />
    <Nuxt class="h-100 container-fluid" style="max-width: 1520px" />
    <template v-if="$store.getters.getActivePublicCategoryItemDescription">
      <public-category-item-description />
    </template>
    <div class="overflow-hidden"><manager-dashboard-footer></manager-dashboard-footer></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
