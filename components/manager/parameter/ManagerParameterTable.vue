<template>
  <div>
    <b-table borderless striped hover :fields="getManagerParameterFields" :items="getManagerParameterItems"></b-table>
  </div>
</template>

<script>
export default {
  name: 'ManageParameterTable',
  computed: {
    getManagerParameterFields() {
      return this.$store.getters.getManagerParameterFields
    },
    getManagerParameterItems() {
      return this.$store.getters['parameter/getParameter']
    },
  },
  mounted() {
    this.fetchParameters()
  },
  methods: {
    fetchParameters() {
      this.$store.dispatch('parameter/fetchParameter')
    },
  },
}
</script>
