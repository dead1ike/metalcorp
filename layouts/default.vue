<template>
  <div class="wrapper">
    <div class="main-header">
      <public-dashboard-navbar />
    </div>
    <Nuxt class="container__main" />
    <template v-if="$store.getters.getActiveDimensionModal">
      <public-dimension-modal />
    </template>
    <template v-if="$store.getters.getActiveCategoryModal">
      <public-category-order-modal />
    </template>
    <div><public-dashboard-footer /></div>
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
