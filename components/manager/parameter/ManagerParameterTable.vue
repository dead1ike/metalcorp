<template>
  <div>
    <b-table borderless striped hover :fields="getManagerParameterFields" :items="getManagerParameterItems">
      <template #cell(actions)="data">
        <b-btn v-b-popover.hover.topleft="'Удалить'" variant="link" @click="deleteItem(data.item)">
          <b-icon icon="x-circle" variant="danger"></b-icon
        ></b-btn>
      </template>
    </b-table>
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
    deleteItem(item) {
      this.$store.dispatch('parameter/deleteParameter', item.uuid).then(() => {
        this.$store.dispatch('parameter/fetchParameter')
      })
    },
    fetchParameters() {
      this.$store.dispatch('parameter/fetchParameter')
    },
  },
}
</script>
