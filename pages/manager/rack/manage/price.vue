<template>
  <div>
    <div>
      <b-btn variant="corp" size="sm" block @click="managerPriceAdd()">Добавить цену для параметра</b-btn>
    </div>
    <div>
      <manager-rack-price-table />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    managerPriceAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerRackPriceParameterAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
