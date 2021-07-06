<template>
  <div>
    <div>
      <b-btn variant="corp" size="sm" block @click="managerTypeParameterAdd()">Добавить параметр стеллажа</b-btn>
    </div>
    <div>
      <manager-rack-type-parameter-table />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    managerTypeParameterAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackTypeParameterAdd',
        modalStatus: false,
      })
    },
  },
}
</script>
