<template>
  <div>
    <b-table hover striped borderless :fields="getManagerRackFields"></b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackTable',
  computed: {
    getManagerRackFields() {
      return this.$store.getters.getManagerRackFields
    },
  },
}
</script>

<style scoped></style>
