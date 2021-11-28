<template>
  <div class="block_guaranty d-lg-flex w-100 pt-10 mt-10">
    <div class="text-white d-flex block3_banner flex-row align-self-center w-100 p-8">
      <div class="d-flex flex-column flex-fill">
        <div class="w-100 py-5">
          <h2 class="font-weight-bold">Гарантируем качество132 и надежность</h2>
        </div>
        <div class="text-wrap py-6">
          <h4>Закажите бесплатный выезд замерщика</h4>
        </div>
        <div class="form_measurer pt-6 d-flex flex-column h-100">
          <div class="pb-7 pr-10 pr-sm-0">
            <span class="font-weight-normal">Ваше имя</span>
            <b-form-input v-model="form.name" size="lg" placeholder="Иван"></b-form-input>
          </div>
          <div class="pb-7 pr-10 pr-sm-0">
            <span class="font-weight-normal">Ваш телефон</span>
            <b-form-input v-model="form.phone" size="lg" placeholder="Телефон"></b-form-input>
          </div>

          <div class="mt-auto pb-10 mb-10 mb-sm-4 text-sm-left">
            <b-btn variant="light" @click="confirmOffer()">Оставить заявку </b-btn>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-fill pt-8 text-center text-sm-left">
        <div class="w-100 pb-8">
          <img src="~/static/img/pencil-icon.png" alt="pencil" style="max-width: 89px; max-height: 89px" />
          <h4 class="pt-4">Точный замер</h4>
        </div>
        <div class="w-100 py-8">
          <img
            src="~/static/img/calc-icon.png"
            alt="calc"
            style="max-width: 74px; max-height: 96px; margin-left: 5px"
          />
          <h4 class="pt-4">Расчет сметы</h4>
        </div>
        <div class="w-100 pt-8">
          <img src="~/static/img/calendar-icon.png" alt="calendar" style="max-width: 96px; max-height: 96px" />
          <h4 class="pt-4 text-truncate">
            Сроки поставки и <br />
            установки стеллажей
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!--    <div class="d-flex d-lg-none flex-column w-100">
      <div class="text-white d-flex flex-fill flex-column justify-content-center block3_mobile_left">
        <div>
          <h4 class="text-wrap">
            Гарантируем качество<br />
            и надежность
          </h4>
        </div>
        <div class="block3_mobile_text text-wrap">
          <p>Закажите бесплатный выезд замерщика</p>
        </div>
        <div class="">
          <span>Ваше имя</span>
          <b-form-input
            v-model="form.name"
            class="p-2"
            placeholder="Иван"
            style="max-width: 287px; max-height: 45px"
          ></b-form-input>
        </div>
        <div class="">
          <span>Ваш телефон</span>
          <b-form-input
            v-model="form.phone"
            class="p-2"
            placeholder="Телефон"
            style="max-width: 287px; max-height: 45px"
          ></b-form-input>
        </div>
        <div class="block3_mobile_button py-5">
          <a class="ml-2 text-truncate d-inline-block white_button py-4 px-5">Оставить заявку </a>
        </div>
      </div>
      <div class="text-white d-flex flex-column justify-content-center block3_mobile_right">
        <div class="d-flex flex-row justify-content-around w-100">
          <div class="w-100 d-flex flex-column align-items-center mt-2 pencil">
            <img
              src="https://i.ibb.co/SxWYs9V/pencil-icon.png"
              alt="pencil"
              style="max-width: 89px; max-height: 89px"
            />
            <p class="mt-4 text-center">Точный замер</p>
          </div>
          <div class="w-100 d-flex flex-column align-items-center mt-2 calc">
            <img src="https://i.ibb.co/VYc6Ln6/calc-icon.png" alt="calc" style="max-width: 74px; max-height: 96px" />
            <p class="mt-4 text-center">Расчет сметы</p>
          </div>
        </div>
        <div class="w-100 justify-content-center align-items-center flex-column d-flex calend">
          <img
            src="https://i.ibb.co/Y87d2Ww/calendar-icon.png"
            alt="calendar"
            style="max-width: 96px; max-height: 96px"
          />
          <p class="mt-4 text-center">
            Сроки поставки <br />
            и установки стеллажей
          </p>
        </div>
      </div>
    </div>-->
</template>

<script>
export default {
  name: 'PublicMainThirdBlock',
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
          alert('Ваша заявка принята. С вами свяжется специалист!')
        })
    },
  },
}
</script>

<style scoped></style>
