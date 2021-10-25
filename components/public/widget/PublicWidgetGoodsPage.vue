<template>
  <div class="h-100 w-100 flex-column overflow-auto d-flex">
    <div class="d-flex flex-column py-5 px-4">
      <div class="good_card_title pb-5">
        <h2 class="font-weight-bold pt-10 pb-6 px-3">{{ getGoodByUuid.title }}</h2>
      </div>
      <div class="d-flex flex-column flex-lg-row justify-content-between">
        <div class="d-flex flex-column align-items-start good_card_image">
          <b-img :src="getGoodByUuid.image" style="max-width: 350px" />
        </div>
        <div class="d-flex flex-column w-100 h-100 p-5">
          <div class="d-flex flex-column" style="max-width: 570px">
            <h4 class="good_card_description_header">Описание:</h4>
            <h5 class="font-weight-light">{{ getGoodByUuid.description }}</h5>
          </div>
        </div>
        <div class="d-flex flex-column w-100 shadow p-5">
          <h4 class="good_card_params_header">Параметры:</h4>
          <div
            v-for="itemParams in getGoodByUuid.good_parameters"
            :key="itemParams.uuid"
            class="d-flex flex-row justify-content-between"
          >
            <h5 class="py-2">{{ itemParams.title ? itemParams.title : '' }}</h5>
            <h5 class="font-weight-light py-2">{{ itemParams.parameter_value }}</h5>
          </div>
          <div class="d-flex flex-row pt-2 align-items-center justify-content-between">
            <h5 class="pr-4 good_card_params">Количество:</h5>
            <b-spinbutton v-model="form.rack_count" min="1" style="max-width: 200px"></b-spinbutton>
          </div>
          <div class="d-flex flex-row pt-5">
            <h4 class="mr-4">Стоимость:</h4>
            <h4 class="font-weight-light">{{ total }} руб.</h4>
          </div>
          <div class="pt-4">
            <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="addProduct">Добавить в корзину</b-btn>
          </div>
        </div>
      </div>
    </div>
    <public-dashboard-footer />
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetGoodsPage',
  data() {
    return {
      form: {
        rack_count: 1,
      },
    }
  },
  computed: {
    total() {
      let x = parseInt(this.getGoodByUuid.price)
      let y = this.form.rack_count
      return x * y
    },
    getGoodByUuid() {
      return this.$store.getters['good/getGood'] || {}
    },
  },
  mounted() {
    this.$store.dispatch('good/fetchGood', this.$route.params.uuid).then(() => {
      return this.getGoodByUuid
    })
  },
  methods: {
    getUuid() {
      return this.$store.getters.getNewUuid(new Date())
    },
    addProduct() {
      this.$store.commit('type/setAddBasketProduct', {
        ...this.form,
        parameters: this.getGoodByUuid.good_parameters,
        title: this.getGoodByUuid.title,
        price: this.getGoodByUuid.price,
        image: this.getGoodByUuid.image,
        total: this.total,
        uuid: this.getUuid(),
      })
      this.makeToast('Товар добавлен в корзину', 'success')
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

<style scoped></style>
