<template>
  <div><b-table borderless striped hover :fields="getManagerRackTypeParameterFields"></b-table></div>
</template>

<script>
export default {
  name: 'ManagerRackTypeParameterTable',
  computed: {
    getManagerRackTypeParameterFields() {
      return this.$store.getters.getManagerRackTypeParametersFields
    },
  },
}
</script>

<style scoped></style>
