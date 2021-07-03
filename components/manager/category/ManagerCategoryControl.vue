<template>
  <div>
    <b-btn variant="corp" @click="openCategoryAdd()">+</b-btn>
  </div>
</template>

<script>
export default {
  name: 'ManagerCategoryControl',
  methods: {
    openCategoryAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerCategoryAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
