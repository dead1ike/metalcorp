<template>
  <div>
    <b-btn variant="corp" @click="rackTypeParameterAdd">+</b-btn>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackTypeParameterControl',
  methods: {
    rackTypeParameterAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackTypeParameterAdd',
        modalStatus: true,
      })
    },
  },
}
</script>

<style scoped></style>
