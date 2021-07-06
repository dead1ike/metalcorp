<template>
  <div>
    <div>
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
        modalStatus: false,
      })
    },
  },
}
</script>
