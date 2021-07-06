<template>
  <div>
    <div><b-btn variant="corp" size="sm" block @click="managerComponentAdd()">Добавить компонент</b-btn></div>
    <div>
      <manager-rack-component-table />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    managerComponentAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerComponentAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
