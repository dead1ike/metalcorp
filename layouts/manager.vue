<template>
  <div class="d-flex flex-column h-100 overflow-hidden">
    <manager-dashboard-navbar></manager-dashboard-navbar>
    <Nuxt class="h-100 container-fluid p-0 px-sm-3" style="max-width: 1520px" />
    <template v-if="$store.getters.getActiveManagerCategoryAddModal">
      <manager-rack-category-add />
    </template>
    <template v-if="$store.getters.getActiveManagerRackAddModal">
      <manager-rack-type-add />
    </template>
    <template v-if="$store.getters.getActiveManagerParameterAddModal">
      <manager-rack-parameter-add />
    </template>
    <template v-if="$store.getters.getActiveManagerRackTypeParameterAddModal">
      <manager-rack-type-parameter-add />
    </template>
    <template v-if="$store.getters.getActiveManagerPriceParameterAddModal">
      <manager-rack-price-add />
    </template>
    <template v-if="$store.getters.getActiveManagerComponentAddModal">
      <manager-rack-component-add />
    </template>
    <template v-if="$store.getters.getActiveManagerRackComponentAddModal">
      <manager-rack-type-component-add />
    </template>
    <template v-if="$store.getters.getActiveOrderShowModal">
      <manager-offer-show />
    </template>
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
      } else if (modalId === 'manager-rack-add') {
        this.$store.commit('setActiveModal', {
          modalName: 'managerRackAdd',
          modalStatus: false,
        })
      } else if (modalId === 'manager-parameter-add') {
        this.$store.commit('setActiveModal', {
          modalName: 'managerParameterAdd',
          modalStatus: false,
        })
      } else if (modalId === 'manager-rack-type-parameter-add') {
        this.$store.commit('setActiveModal', {
          modalName: 'managerRackTypeParameterAdd',
          modalStatus: false,
        })
      } else if (modalId === 'manager-price-parameter-add') {
        this.$store.commit('setActiveModal', {
          modalName: 'managerRackPriceParameterAdd',
          modalStatus: false,
        })
      } else if (modalId === 'manager-component-add') {
        this.$store.commit('setActiveModal', {
          modalName: 'managerComponentAdd',
          modalStatus: false,
        })
      } else if (modalId === 'manager-type-component-add') {
        this.$store.commit('setActiveModal', {
          modalName: 'managerRackComponentAdd',
          modalStatus: false,
        })
      } else if (modalId === 'order-show') {
        this.$store.commit('setActiveModal', {
          modalName: 'managerOrderShow',
          modalStatus: false,
        })
      }
    })
  },
}
</script>
