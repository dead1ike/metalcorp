<template>
  <div>
    <b-table hover striped borderless :fields="getManagerPriceFields" :items="getComponentPrices">
      <template #cell(parameter)="data">
        {{ data.item.parameter.title !== null ? data.item.parameter.title + ' ' + data.item.parameter_value : ' ' }}
      </template>
      <template #cell(component)="data">
        {{ data.item.rack_component.rack_title + ' ' + data.item.rack_component.component.title }}
      </template>
      <template #cell(sub_component)="data">
        {{ data.item.rack_component.child_rack_components }}
      </template>
      <template #cell(price)="data"> {{ data.item.price }} руб </template>
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
  name: 'ManagerRackPriceTable',
  computed: {
    getComponentPrices() {
      return this.$store.getters['manager/rack/price/getComponentPrice']
    },
    getManagerPriceFields() {
      return this.$store.getters['manager/rack/field/getManagerPriceFields']
    },
  },
  mounted() {
    this.$store.dispatch('manager/rack/price/fetchComponentPrice')
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch('manager/rack/price/deletePriceItem', item.uuid).then(() => {
        this.$store.dispatch('manager/rack/price/fetchComponentPrice')
      })
    },
  },
}
</script>
