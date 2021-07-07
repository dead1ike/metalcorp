<template>
  <div>
    <b-table borderless striped hover :fields="getManagerParameterFields" :items="getManagerParameterItems">
      <template #cell(actions)="data">
        <b-btn v-b-popover.hover.topleft="'Удалить'" variant="link" @click="deleteItem(data.item.uuid)">
          <b-icon icon="x-circle" variant="danger"></b-icon
        ></b-btn>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerRackParameterTable',
  computed: {
    getManagerParameterFields() {
      return this.$store.getters['manager/rack/field/getManagerParameterFields']
    },
    getManagerParameterItems() {
      return this.$store.getters['manager/rack/parameter/getParameter']
    },
  },
  mounted() {
    this.fetchParameters()
  },
  methods: {
    deleteItem(uuid) {
      this.$store.dispatch('manager/rack/parameter/deleteParameter', uuid).then(() => {
        this.fetchParameters()
      })
    },
    fetchParameters() {
      this.$store.dispatch('manager/rack/parameter/fetchParameter').then(() => {
        console.warn('getManagerParameterItems', this.getManagerParameterItems)
      })
    },
  },
}
</script>
