<template>
  <b-modal id="dimension-modal" no-close-on-esc no-close-on-backdrop>
    <template #modal-header>
      <h3>Заказать обратный звонок</h3>
    </template>
    <div class="px-5">
      <h5 class="mb-5">Введите свой номер телефона и Вам поступит бесплатный звонок от нашего специалиста</h5>
      <b-form-input v-model="form.phone" class="p-2" placeholder="+7 (999) 123-14-55"></b-form-input>
    </div>
    <template #modal-footer>
      <div class="d-flex mr-md-2 flex-column justify-content-end flex-sm-row w-100">
        <b-btn variant="danger" class="m-1" @click="closeModal()">Отменить </b-btn>
        <b-btn variant="black" class="m-1" @click="confirmOffer()">Отправить</b-btn>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'PublicDimensionModal',
  data() {
    return {
      form: {
        phone: '',
      },
    }
  },
  mounted() {
    this.$bvModal.show('dimension-modal')
  },
  methods: {
    closeModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'dimensionModal',
        modalStatus: false,
      })
    },
    confirmOffer() {
      this.$store
        .dispatch('basket/postOrder', {
          ...this.form,
        })
        .then(() => {
          this.closeModal()
          this.form.phone = ''
        })
    },
  },
}
</script>
