<template>
  <div>
    <b-table borderless striped hover :fields="getManagerTypeParameterFields"></b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackTypeParameterTable',
  computed: {
    getManagerTypeParameterFields() {
      return this.$store.getters.getManagerRackTypeParametersFields
    },
  },
}
</script>
