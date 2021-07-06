<template>
  <div>
    <b-table hover striped borderless :fields="getManagerPriceFields"></b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackPriceTable',
  computed: {
    getManagerPriceFields() {
      return this.$store.getters['manager/rack/field/getManagerPriceFields']
    },
  },
}
</script>
