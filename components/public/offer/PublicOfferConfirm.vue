<template>
  <div class="h-100 w-100 overflow-auto">
    <div class="d-flex flex-row justify-content-around">
      <div class="mt-2">
        <h3>Контактная информация:</h3>
        <div class="m-2">
          <h5>Фамилия Имя Отчество</h5>
          <b-input v-model="form.name" placeholder="Введите"></b-input>
        </div>
        <div class="m-2">
          <h5>Email</h5>
          <b-input v-model="form.email" placeholder="Введите"></b-input>
        </div>
        <div class="m-2">
          <h5>Телефон</h5>
          <b-input v-model="form.phone" placeholder="Введите"></b-input>
        </div>
        <div class="m-2">
          <b-btn variant="corp">Оформить заказ</b-btn>
        </div>
        <div class="m-2">
          <b-btn variant="outline-corp" @click="goBack">Изменить заказ</b-btn>
        </div>
      </div>
      <div class="d-flex flex-column mt-2">
        <h3>Ваш заказ:</h3>
        <div class="w-100">
          <b-table
            no-border-collapse
            head-variant="light"
            sticky-header="100%"
            borderless
            striped
            hover
            :fields="getOfferConfirmFields"
            :items="getOfferConfirmItems"
          >
          </b-table>
        </div>
        <div class="d-flex justify-content-end">
          <span class="mr-2">Итого:</span>
          <span>{{ getSumm }} рублей </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicOfferConfirm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
      },
    }
  },
  computed: {
    getOfferConfirmItems() {
      return this.$store.getters['type/getBasketProduct']
    },
    getOfferConfirmFields() {
      return this.$store.getters.getOfferConfirmFields
    },
    getSumm() {
      return this.getOfferConfirmItems.reduce((summ, item) => summ + item.summ, 0)
    },
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.push('/offer')
    },
  },
}
</script>
