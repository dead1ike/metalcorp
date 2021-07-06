<template>
  <div>
    <div>
      <b-btn variant="corp" size="sm" block @click="managerTypeAdd()">Добавить тип стеллажа</b-btn>
    </div>
    <div>
      <manager-rack-type-table />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    managerTypeAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
