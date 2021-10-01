<template>
  <div>
    <div class="d-none d-lg-flex w-100 p-3">
      <div class="text-white d-flex block3_banner flex-row align-self-center w-100">
        <div class="d-flex flex-column w-100">
          <div class="w-100">
            <p class="block3_banner_header">
              Гарантируем качество <br />
              и надежность
            </p>
          </div>
          <div class="block3_banner_text text-wrap">
            <p>Закажите бесплатный выезд замерщика</p>
          </div>
          <div class="block3_input_header">
            <span>Ваше имя</span>
            <b-form-input
              v-model="form.name"
              class="p-2"
              placeholder="Иван"
              style="max-width: 287px; max-height: 45px"
            ></b-form-input>
          </div>
          <div class="block3_input_header">
            <span>Ваш телефон</span>
            <b-form-input
              v-model="form.phone"
              class="p-2"
              placeholder="Телефон"
              style="max-width: 287px; max-height: 45px"
            ></b-form-input>
          </div>
          <div class="block3_banner_button">
            <a class="ml-2 text-truncate white_button py-4 px-5">Оставить заявку </a>
          </div>
        </div>
        <div class="d-flex flex-column align-items-center block3_right" style="">
          <div class="w-100 pencil">
            <img
              src="https://i.ibb.co/SxWYs9V/pencil-icon.png"
              alt="pencil"
              style="max-width: 89px; max-height: 89px"
            />
            <p class="mt-4">Точный замер</p>
          </div>
          <div class="w-100 calc">
            <img
              src="https://i.ibb.co/VYc6Ln6/calc-icon.png"
              alt="calc"
              style="max-width: 74px; max-height: 96px; margin-left: 5px"
            />
            <p class="mt-4">Расчет сметы</p>
          </div>
          <div class="w-100 calend">
            <img
              src="https://i.ibb.co/Y87d2Ww/calendar-icon.png"
              alt="calendar"
              style="max-width: 96px; max-height: 96px"
            />
            <p class="mt-3 text-truncate">
              Сроки поставки и <br />
              установки стеллажей
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex d-lg-none flex-column w-100">
      <div class="text-white d-flex flex-fill flex-column justify-content-center block3_mobile_left">
        <div>
          <p class="block3_mobile_header text-wrap">
            Гарантируем качество<br />
            и надежность
          </p>
        </div>
        <div class="block3_mobile_text text-wrap">
          <p>Закажите бесплатный выезд замерщика</p>
        </div>
        <div class="block3_input_header">
          <span>Ваше имя</span>
          <b-form-input
            v-model="form.name"
            class="p-2"
            placeholder="Иван"
            style="max-width: 287px; max-height: 45px"
          ></b-form-input>
        </div>
        <div class="block3_input_header">
          <span>Ваш телефон</span>
          <b-form-input
            v-model="form.phone"
            class="p-2"
            placeholder="Телефон"
            style="max-width: 287px; max-height: 45px"
          ></b-form-input>
        </div>
        <div class="block3_mobile_button py-5">
          <a class="ml-2 text-truncate white_button py-4 px-5">Оставить заявку </a>
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
    </div>
  </div>
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
        })
    },
  },
}
</script>

<style scoped></style>
