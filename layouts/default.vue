<template>
  <div class="h-100 d-flex flex-column">
    <public-dashboard-navbar />
    <Nuxt />
    <template v-if="$store.getters.getActiveDimensionModal">
      <public-dimension-modal />
    </template>
    <template v-if="$store.getters.getActiveCategoryModal">
      <public-category-order-modal />
    </template>
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
