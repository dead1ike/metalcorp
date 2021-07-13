<template>
  <div class="h-100 w-100 overflow-auto">
    <div class="d-flex flex-row justify-content-around">
      <div class="mt-4">
        <h3>Контактная информация:</h3>
        <hr />
        <div class="m-2">
          <h5>Фамилия Имя Отчество</h5>
          <b-input v-model="form.name" :state="nameState" placeholder="Введите"></b-input>
        </div>
        <div class="m-2">
          <h5>Email</h5>
          <b-input v-model="form.email" :state="emailState" placeholder="Введите"></b-input>
        </div>
        <div class="m-2">
          <h5>Телефон</h5>
          <b-input v-model="form.phone" :state="phoneState" placeholder="Введите"></b-input>
        </div>
        <hr />
        <div class="d-flex">
          <div class="m-2">
            <b-btn :disabled="!isValidate" variant="corp" @click="confirmOffer()">Оформить заказ</b-btn>
          </div>
          <div class="m-2">
            <b-btn variant="outline-corp" @click="goBack">Изменить заказ</b-btn>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column mt-4">
        <h3>Ваш заказ:</h3>
        <hr />
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
    <b-modal id="alert-modal" size="sm" no-close-on-esc no-close-on-backdrop>
      <template #modal-header>
        <div class="m-3">
          <h3><b>Внимание!</b></h3>
        </div>
      </template>
      <div class="container m-2">
        <p>Ваш заказ поступил в обработку менеджеру, ожидайте обратной связи</p>
        <p>Спасибо за заказ</p>
      </div>
      <template #modal-footer>
        <b-btn variant="corp" @click="hide">ОК</b-btn>
      </template>
    </b-modal>
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
      return this.getOfferConfirmItems.reduce((summ, item) => summ + item.total, 0)
    },
    emailState() {
      return this.$store.getters.validEmail(String(this.form.email))
    },
    phoneState() {
      return this.$store.getters.validPhone(String(this.form.phone))
    },
    nameState() {
      return this.$store.getters.validName(String(this.form.name))
    },
    isValidate() {
      let isValid = false
      if (this.emailState !== true) isValid = false
      else if (this.phoneState !== true) isValid = false
      else if (this.nameState !== true) isValid = false
      else isValid = true
      return isValid
    },
  },
  mounted() {},
  methods: {
    test() {},
    hide() {
      this.$bvModal.hide('alert-modal')
    },
    goBack() {
      this.$router.push('/offer')
    },
    confirmOffer() {
      this.$store
        .dispatch('basket/postOrder', {
          ...this.form,
          offer: this.getOfferConfirmItems,
          total: this.getSumm,
        })
        .then(() => {
          // this.$bvModal.show('alert-modal')
          // this.$store.commit('type/setDelBasketProducts')
          // this.form.name = ''
          // this.form.phone = ''
          // this.form.email = ''
        })
    },
  },
}
</script>
