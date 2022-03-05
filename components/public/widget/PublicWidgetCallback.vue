<template>
  <div class="d-flex flex-column flex-lg-row shadow pt-10">
    <div class="d-flex flex-column w-100 pt-7">
      <div class="vacancy_form_header1 p-6">
        <h3>Закажите бесплатный выезд замерщика!</h3>
      </div>
      <div class="d-flex flex-column flex-lg-row p-6 h-100">
        <div class="d-flex flex-column pr-10 mb-5 mb-sm-0">
          <h5 class="feedback_form_text text-truncate">Ваше имя</h5>
          <b-form-input v-model="form.name" class="border-dark" size="lg"></b-form-input>
        </div>
        <div class="d-flex flex-column pr-10 mt-5 mt-sm-0">
          <h5 class="feedback_form_text text-truncate">Ваш телефон</h5>
          <b-form-input v-model="form.phone" class="border-dark" size="lg"></b-form-input>
        </div>
      </div>
      <div class="px-5 pb-9">
        <b-btn class="btn btn-light border-dark" @click="confirmOffer()">Оставить заявку</b-btn>
      </div>
    </div>
    <div class="d-flex flex-column w-100 callback_rightside p-7" style="max-width: 650px">
      <div class="p-5">
        <div class="callback_right_header1 text-wrap pr-lg-5"><h3 class="m-0">Затрудняетесь с выбором?</h3></div>
        <div class="callback_right_header2 text-wrap pr-lg-5"><h4 class="m-0">Закажите обратный звонок!</h4></div>
      </div>
      <div class="d-flex flex-column flex-lg-row px-5 py-4">
        <div class="pr-lg-5">
          <h5 class="callback_info_header">Почта:</h5>
          <h5 class="font-weight-light">info@m-lc.ru</h5>
        </div>
        <div class="pl-lg-5">
          <h5 class="callback_info_header">Телефон:</h5>
          <h5 class="font-weight-light">+7 (800) 301-62-98</h5>
        </div>
      </div>
      <div class="px-5 py-6">
        <b-btn class="d-inline-block px-8 py-4" variant="light" to="/zvonok">Заказать звонок</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetCallback',
  data() {
    return {
      form: {
        name: '',
        phone: '',
      },
    }
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
          this.$router.push('/')
          alert('Ваша заявка принята. С вами свяжется специалист!')
        })
    },
  },
}
</script>
