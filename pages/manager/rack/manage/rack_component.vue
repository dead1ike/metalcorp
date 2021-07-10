<template>
  <div>
    <div>
      <b-btn variant="corp" size="sm" @click="managerRackComponent()">Добавить компонент стеллажа</b-btn>
    </div>
    <div>
      <manager-rack-type-component-table />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    managerRackComponent() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackComponentAdd',
        modalStatus: true,
      })
    },
    managerPriceAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackPriceParameterAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
