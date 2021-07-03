<template>
  <div class="d-flex flex-column">
    <manager-dashboard-navbar></manager-dashboard-navbar>
    <Nuxt class="h-100 container-fluid" style="max-width: 1520px" />
    <!--    <template v-if="$store.getters.getActiveManagerCategoryAddModal">-->
    <!--      <manager-category-add />-->
    <!--    </template>-->
    <!--    <div class="overflow-hidden"><manager-dashboard-footer></manager-dashboard-footer></div>-->
  </div>
</template>

<script>
export default {
  mounted() {
    this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
      if (modalId === 'manager-category-add') {
        this.$store.commit('setActiveModal', {
          modalName: 'managerCategoryAdd',
          modalStatus: false,
        })
      }
    })
  },
}
</script>
