<template>
  <div class="p-4 shadow h-100 overflow-auto">
    <div class="py-2">
      <b-btn variant="corp" size="sm" block @click="managerParameterAdd()">Добавить параметр</b-btn>
    </div>
    <div>
      <manager-rack-parameter-table />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    managerParameterAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerParameterAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
