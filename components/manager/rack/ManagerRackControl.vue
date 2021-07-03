<template>
  <div>
    <b-btn variant="corp" @click="openRackAdd">+</b-btn>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackControl',
  methods: {
    openRackAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackAdd',
        modalStatus: true,
      })
    },
  },
}
</script>

<style scoped></style>
