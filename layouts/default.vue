<template>
  <div class="d-flex flex-column">
    <public-dashboard-navbar />
    <public-dashboard-control />
    <Nuxt class="h-100 container-fluid p-0" style="max-width: 1520px" />
    <template v-if="$store.getters.getActiveDimensionModal">
      <public-dimension-modal />
    </template>
    <template v-if="$store.getters.getActiveCategoryModal">
      <public-category-order-modal />
    </template>
    <div class="overflow-hidden"><public-dashboard-footer /></div>
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
  },
}
</script>
<style lang="scss">
@import 'assets/scss/app';
</style>
