<template>
  <div>
    <b-table borderless striped hover :fields="getManagerOfferFields" :items="getManagerOfferItems">
      <template #cell(created_at)="data">
        {{
          $DateTime
            .fromISO(data.item.created_at)
            .setLocale('ru')
            .toLocaleString($DateTime.DATETIME_SHORT)
        }}
      </template>
      <template #cell(actions)="data">
        <b-btn variant="link" size="sm" @click="showOrder(data.item)">
          <b-icon icon="eye" variant="corp"></b-icon
        ></b-btn>
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
</template>

<script>
export default {
  name: 'ManagerOfferTable',
  computed: {
    getManagerOfferFields() {
      return this.$store.getters.getManagerOfferFields
    },
    getManagerOfferItems() {
      return this.$store.getters['basket/getOrders']
    },
  },
  mounted() {
    this.$store.dispatch('basket/fetchOrder').then(() => {})
  },
  methods: {
    showOrder(order) {
      this.$store.commit('setActiveModal', {
        modalName: 'managerOrderShow',
        modalStatus: true,
      })
      this.$store.commit('basket/setOrder', {
        order,
      })
    },
    deleteItem(uuid) {
      this.$store.dispatch('basket/deleteOrder', uuid).then(() => {
        this.$store.dispatch('basket/fetchOrder')
      })
    },
  },
}
</script>
