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
            <b-dd v-b-popover.hover.topleft="'Удалить'" variant="link" no-caret size="sm">
              <template #button-content>
                <b-icon icon="x-circle" scale="1.6" variant="danger"></b-icon>
              </template>
              <h6 class="text-center">Вы уверены?</h6>
              <hr />
              <b-dd-item>
                <b-btn variant="danger" size="sm" block @click="deleteItem(data.item.uuid)">Да</b-btn>
              </b-dd-item>
              <b-dd-item>
                <b-btn variant="corp" size="sm" block>Нет</b-btn>
              </b-dd-item>
            </b-dd>
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
    deleteItem(uuid) {
      this.$store.commit('type/setDelBasketProduct', {
        uuid,
      })
    },
  },
}
</script>
