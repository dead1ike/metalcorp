<template>
  <div>
    <b-btn variant="corp" @click="openPriceAddModal">+</b-btn>
  </div>
</template>

<script>
export default {
  name: 'ManagerPriceControl',
  methods: {
    openPriceAddModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackPriceParameterAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
