<template>
  <div>
    <b-table hover striped borderless :fields="getManagerComponentFields" :items="getManagerComponentItems">
      <template #cell(rack_title)="data">
        {{ data.item.rack.title }}
      </template>
      <template #cell(is_constructor)="data">
        {{ data.item.is_constructor === false ? 'Нет' : 'Да' }}
      </template>
      <template #cell(rack_component_value)="data">
        {{ data.item.rack_component_value }}
      </template>
      <template #cell(rack_component_parameters)="data">
        <table>
          <tr v-for="item in data.item.rack_component_parameters" :key="item.uuid">
            <td>{{ item.parameter.title }}</td>
            <td>{{ item.parameter_value }}</td>
          </tr>
        </table>
      </template>
      <template #cell(child)="data">
        <div v-if="data.item.rack_component_childs.length !== 0">
          <div v-for="item in data.item.rack_component_childs" :key="item.uuid">
            <div v-for="parameter in item.rack_component_parameters" :key="parameter.uuid">
              {{ item.rack_component_value + ' ' + parameter.parameter_value + ' ' + parameter.price + 'руб' }}
            </div>
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
      return this.$store.getters['manager/rack/component/getRackComponent']
    },
    getComponents() {
      return this.$store.getters['manager/rack/component/getComponent']
    },
    getComponentsPrice() {
      return this.getManagerComponentItems
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
