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
          <template #cell(title)="data"
            ><span>Стеллаж</span> <b> {{ data.item.title }}</b></template
          >
          <template #cell(parameters)="data">
            <div class="d-flex justify-content-center">
              <table>
                <tr v-for="item in data.item.parameters" :key="item.uuid">
                  <td>{{ item.parameter_title }}</td>
                  <td>{{ item.parameter_value }}</td>
                </tr>
              </table>
            </div>
          </template>
          <template #cell(shelf_count)="data">
            {{ data.item.title === 'MZ-Profil' ? '--' : data.item.shelf_count }}
          </template>
          <template #cell(rack_count)="data">
            <b-spinbutton :value="data.item.rack_count" inline min="1">
              <template #decrement>
                <b-btn size="sm" variant="link" @click="countDecrement(data.item.uuid)">-</b-btn>
              </template>
              <template #increment>
                <b-btn size="sm" variant="link" @click="countIncrement(data.item.uuid)">+</b-btn>
              </template>
            </b-spinbutton>
          </template>
          <template #cell(summ)="data">
            {{ data.item.total }}
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
      return this.getOfferManageItems
    },
    countDecrement(uuid) {
      this.$store.commit('type/setCountDecrement', uuid)
      return this.getOfferManageItems
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
