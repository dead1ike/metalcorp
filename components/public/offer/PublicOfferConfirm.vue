<template>
  <div class="overflow-auto">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center" style="min-height: 100vh">
      <div
        class="w-100 h-100 d-flex flex-column align-items-center text-white"
        style="max-width: 870px; min-height: 100%; background-image: url('https://i.ibb.co/1sxMCx2/offer-bg.png')"
      >
        <div class="py-10" style="max-width: 485px">
          <div class="pt-10 pb-8">
            <h3 class="text-center">
              Заполните данные<br />
              для оформления заказа
            </h3>
          </div>
          <div class="d-flex align-items-center flex-column">
            <div class="p-6" style="max-width: 290px">
              <h5>Ваше имя</h5>
              <b-input v-model="form.name" :state="nameState" placeholder="Введите"></b-input>
            </div>
            <div class="p-6" style="max-width: 290px">
              <h5>Ваш телефон</h5>
              <b-input v-model="form.phone" :state="phoneState" placeholder="Введите"></b-input>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="p-4">
              <b-btn :disabled="!isValidate" variant="light" @click="confirmOffer()">Отправить</b-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <public-dashboard-footer />
  </div>
</template>

<script>
export default {
  name: 'PublicOfferConfirm',
  data() {
    return {
      form: {
        name: '',
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
      if (this.phoneState !== true) isValid = false
      else if (this.nameState !== true) isValid = false
      else isValid = true
      return isValid
    },
  },
  mounted() {
    console.warn(this.getOfferConfirmItems)
  },
  methods: {
    confirmOffer() {
      this.$store
        .dispatch('basket/postOrder', {
          ...this.form,
          offer: this.getOfferConfirmItems,
          total: this.getSumm,
        })
        .then(() => {
          // this.makeToast('Ваш заказ успешно добавлен')
          this.$store.commit('type/setDelBasketProducts')
          this.form.name = ''
          this.form.phone = ''
          this.$router.push('/')
          alert('Ваш заказ успешно оформлен')
        })
    },
    makeToast(body = 'Ничего не произошло', variant = 'success', title = 'Уведомление') {
      this.$bvToast.toast(body, {
        title,
        autoHideDelay: 2000,
        appendToast: false,
        solid: true,
        variant,
        toaster: 'b-toaster-bottom-right',
      })
    },
  },
}
</script>
