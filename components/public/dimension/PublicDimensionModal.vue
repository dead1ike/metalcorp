<template>
  <div class="overflow-auto">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center" style="min-height: 100vh">
      <div
        class="w-100 h-100 d-flex flex-column align-items-center text-white"
        style="max-width: 870px; min-height: 100%; background-image: url('~/static/img/offer-bg.png')"
      >
        <div class="py-10" style="max-width: 485px">
          <div class="pt-10 pb-8">
            <h3 class="text-center">
              Заполните данные<br />
              и мы свяжемся с вами
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
  name: 'PublicDimensionModal',
  data() {
    return {
      form: {
        name: '',
        phone: '',
      },
    }
  },
  computed: {
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

  methods: {
    confirmOffer() {
      this.$store
        .dispatch('basket/postOrder', {
          ...this.form,
        })
        .then(() => {
          this.form.phone = ''
          this.form.name = ''
        })
    },
  },
}
</script>
