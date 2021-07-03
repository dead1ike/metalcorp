<template>
  <div>
    <b-btn variant="corp" @click="openParameterAdd">+</b-btn>
  </div>
</template>

<script>
export default {
  name: 'ManagerParameterControl',
  methods: {
    openParameterAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerParameterAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
