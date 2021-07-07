<template>
  <div class="h-100 w-100 overflow-auto">
    <div class="d-flex flex-column align-items-center">
      <div class="m-2">
        <b-btn variant="corp" @click="toOfferConfirm()">Оформить заказ</b-btn>
      </div>
      <div class="w-100">
        <b-table
          no-border-collapse
          head-variant="light"
          sticky-header="100%"
          borderless
          striped
          hover
          :fields="getOfferManageFields"
          :items="getOfferManageItems"
        >
          <template #cell(rack_height)="data">{{ data.item.rack_height.parameter_value }} </template>
          <template #cell(rack_width)="data"> {{ data.item.rack_width.parameter_value }} </template>
          <template #cell(rack_shelves_count)="data">
            {{ data.item.rack_shelves_count.parameter_value }}
          </template>
          <template #cell(rack_depth)="data">{{ data.item.rack_depth.parameter_value }} </template>
          <template #cell(rack_count)="data">
            <b-spinbutton :value="data.item.rack_count" inline>
              <template #decrement>
                <b-btn size="sm" variant="link" @click="countDecrement(data.item.uuid)">-</b-btn>
              </template>
              <template #increment>
                <b-btn size="sm" variant="link" @click="countIncrement(data.item.uuid)">+</b-btn>
              </template>
            </b-spinbutton>
          </template>
          <template #cell(summ)="data">
            {{ Number(data.item.price) * Number(data.item.rack_count) }}
          </template>
          <template #cell(actions)="data">
            <b-btn class="live-edit btn-icon" variant="link">
              <b-icon icon="x-circle" scale="1" variant="danger" @click="deleteOfferItem(data.item.uuid)"></b-icon
            ></b-btn>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicOfferManage',
  computed: {
    getOfferManageFields() {
      return this.$store.getters.getOfferManageFields
    },
    getOfferManageItems() {
      return this.$store.getters['type/getBasketProduct']
    },
  },
  watch: {
    data(newValue, oldValue) {},
  },
  mounted() {},
  methods: {
    countIncrement(uuid) {
      this.$store.commit('type/setCountIncrement', uuid)
    },
    countDecrement(uuid) {
      this.$store.commit('type/setCountDecrement', uuid)
    },
    toOfferConfirm() {
      this.$router.push('/offer/confirm')
    },
    deleteOfferItem(uuid) {
      this.$store.commit('type/setDelBasketProduct', {
        uuid,
      })
    },
  },
}
</script>
