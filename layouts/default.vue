<template>
  <div class="d-flex flex-column">
    <public-dashboard-navbar />
    <Nuxt class="h-100 container-fluid" style="max-width: 1520px" />
    <template v-if="$store.getters.getActiveDimensionModal">
      <public-dimension-modal />
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
      }
    })
  },
}
</script>
<style lang="scss">
@import 'assets/scss/app';
</style>
