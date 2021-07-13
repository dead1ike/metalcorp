<template>
  <b-modal id="order-show" size="lg">
    <template #modal-header>
      <h4>Информация о заказе</h4>
    </template>
    <div class="d-flex flex-row m-2 justify-content-around">
      <div class="d-flex flex-column m-1">
        <h5>Имя заказчика:</h5>
        <p>{{ getCurrentOrder.order.name }}</p>
      </div>
      <div class="d-flex flex-column m-1">
        <h5>Email заказчика:</h5>
        <p>{{ getCurrentOrder.order.email }}</p>
      </div>
      <div class="d-flex flex-column m-1">
        <h5>Телефон заказчика:</h5>
        <p>{{ getCurrentOrder.order.phone }}</p>
      </div>
    </div>
    <div class="m-2">
      <b-table hover borderless striped :fields="getOfferFields" :items="getCurrentOrder.order.offer">
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
        <template #cell(summ)="data">
          {{ data.item.total }}
        </template>
      </b-table>
    </div>
    <div class="d-flex m-2 flex-row justify-content-end">Сумма заказа : {{ getCurrentOrder.order.total }}</div>
    <template #modal-footer>
      <b-btn variant="corp" @click="closeModal">Закрыть</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ManagerOfferShow',
  computed: {
    getOfferFields() {
      return this.$store.getters.getOrderShowFields
    },
    getCurrentOrder() {
      return this.$store.getters['basket/getCurrentOrder']
    },
  },
  mounted() {
    this.$bvModal.show('order-show')
  },
  methods: {
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerOrderShow',
        modalStatus: false,
      })
    },
  },
}
</script>
