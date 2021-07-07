<template>
  <div>
    <b-table hover striped borderless :fields="getManagerComponentFields" :items="getManagerComponentItems">
      <template #cell(is_constructor)="data">
        {{ data.item.is_constructor === false ? 'Нет' : 'Да' }}
      </template>
      <template #cell(rack_component_value)="data">
        {{ data.item.rack_component_value }}
      </template>
      <template #cell(child)="data">
        <div v-if="data.item.child_rack_components.length !== 0">
          <div v-for="item in data.item.child_rack_components" :key="item.uuid">
            {{ item.rack_component_value }}
          </div>
        </div>
        <div v-else>
          <p>Самостоятельный компонент</p>
        </div>
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
      return this.$store.getters['manager/rack/component/getRackComponent'].filter(
        (item) => item.parent_rack_component === null
      )
    },
    getComponents() {
      return this.$store.getters['manager/rack/component/getComponent']
    },
  },
  mounted() {
    this.fetchComponent()
  },
  methods: {
    deleteItem(uuid) {
      this.$store.dispatch('manager/rack/component/deleteRackComponent', uuid).then(() => {
        this.fetchComponent()
      })
    },
    fetchComponent() {
      this.$store.dispatch('manager/rack/component/fetchRackComponent').then(() => {
        console.warn(this.getManagerComponentItems)
      })
    },
  },
}
</script>
