<template>
  <div>
    <b-table borderless striped hover :fields="getManagerRackTypeParameterFields" :items="getRackTypeParameterItems">
      <template #cell(title)="data">{{ showRack(data.item.rack_type_uuid).title }} </template>
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
  name: 'ManagerRackTypeParameterTable',
  computed: {
    getManagerRackTypeParameterFields() {
      return this.$store.getters.getManagerRackTypeParametersFields
    },
    getRackTypeParameterItems() {
      return this.$store.getters['parameter/getRackTypeParameter']
    },
    getRackTypes() {
      return this.$store.getters['type/getTypes']
    },
  },
  mounted() {
    this.fetchRackTypeParameteritems()
  },
  methods: {
    showRack(uuid) {
      if (this.getRackTypes.find((item) => item.uuid === uuid)) {
        return this.getRackTypes.find((item) => item.uuid === uuid)
      }
      return {}
    },
    deleteItem(item) {
      this.$store.dispatch('parameter/deleteRackTypeParameter', item.uuid).then(() => {
        this.$store.dispatch('parameter/fetchRackTypeParameter')
      })
    },
    fetchRackTypeParameteritems() {
      this.$store.dispatch('parameter/fetchRackTypeParameter')
      this.$store.dispatch('type/fetchTypes')
      this.$store.dispatch('parameter/fetchParameter')
    },
  },
}
</script>

<style scoped></style>
