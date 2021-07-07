<template>
  <div>
    <b-table hover striped borderless :fields="getManagerComponentFields" :items="getManagerComponentItems">
      <template #cell(is_constructor)="data">
        {{ data.item.is_constructor === false ? 'Нет' : 'Да' }}
      </template>
      <template #cell(rack_component_value)="data">
        {{
          data.item.child_rack_components
            ? data.item.rack_component_value + '(' + data.item.child_rack_components.rack_component_value + ')'
            : data.item.rack_component_value
        }}
      </template>
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
  name: 'ManagerRackTypeComponentTable',
  computed: {
    getManagerComponentFields() {
      return this.$store.getters['manager/rack/field/getManagerRackComponentFields']
    },
    getManagerComponentItems() {
      return this.$store.getters['manager/rack/component/getRackComponent']
    },
    getComponents() {
      return this.$store.getters['manager/rack/component/getComponent']
    },
    getChildComponents() {
      if (this.getManagerComponentItems.child_rack_components)
        return this.getManagerComponentItems.child_rack_components
    },
  },
  mounted() {
    this.fetchComponent()
    console.warn(this.getManagerComponentItems)
  },
  methods: {
    deleteItem(uuid) {
      this.$store.dispatch('manager/rack/component/deleteRackComponent', uuid).then(() => {
        this.fetchComponent()
      })
    },
    fetchComponent() {
      this.$store.dispatch('manager/rack/component/fetchRackComponent')
    },
  },
}
</script>
