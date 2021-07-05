<template>
  <div>
    <b-table hover striped borderless :fields="getPriceParameterFields" :items="getRackPriceParameter">
      <template #cell(title)="data"> {{ data.item.rack_type_title }} </template>
      <template #cell(parameter)="data">
        <p>
          {{
            data.item.rack_type_parameter.rack_parameter_title +
            ' ' +
            data.item.rack_type_parameter.rack_parameter_value
          }}мм
        </p>
        <p v-if="data.item.rack_type_parameter_uuid_extra">
          {{
            data.item.rack_type_parameter_uuid_extra.rack_parameter_title +
            ' ' +
            data.item.rack_type_parameter_uuid_extra.rack_parameter_value
          }}мм
        </p>
      </template>
      <template #cell(price)="data"> {{ data.item.rack_price_parameter }}руб </template>
      <template #cell(actions)="data"></template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'ManagerPriceTable',
  computed: {
    getPriceParameterFields() {
      return this.$store.getters.getPriceParameterFields
    },
    getRackPriceParameter() {
      return this.$store.getters['price/getParameterPrice']
    },
  },
  mounted() {
    this.fetchRackPriceParameter()
    console.warn('getRackPriceParameter', this.getRackPriceParameter)
  },
  methods: {
    fetchRackTypes() {
      this.$store.dispatch('type/fetchTypes')
    },
    fetchRackParameters() {
      this.$store.dispatch('parameter/fetchRackTypeParameter')
    },
    fetchRackPriceParameter() {
      this.$store.dispatch('price/fetchParameterPrice')
    },
    fetchParameter() {
      this.$store.dispatch('parameter/fetchParameter')
    },
  },
}
</script>
