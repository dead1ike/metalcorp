<template>
  <div class="h-100 w-100 flex-column overflow-auto d-flex">
    <div class="d-flex flex-column py-5 px-4">
      <div class="good_card_title pb-5">
        <p>{{ getGoodByUuid.title }}</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column align-items-start good_card_image">
          <b-img :src="getGoodByUuid.image" style="max-width: 350px" />
        </div>
        <div class="d-flex flex-column w-100 h-100 pr-5">
          <div class="d-flex flex-column" style="max-width: 570px">
            <p class="good_card_description_header">Описание:</p>
            <p>{{ getGoodByUuid.description }}</p>
          </div>
          <div class="d-flex flex-row pt-5">
            <strong class="mr-4">Стоимость: </strong>
            <span> 9999 руб.</span>
          </div>
          <div class="pt-4">
            <a class="black_button d-block py-2 px-4">Добавить в корзину</a>
          </div>
        </div>
        <div class="d-flex flex-column w-100">
          <p class="good_card_params_header">Параметры:</p>
          <div class="d-flex flex-row justify-content-between" v-for="itemParams in getGoodByUuid.good_parameters">
            <span class="py-2">{{ itemParams.title }}</span>
            <span class="py-2">{{ itemParams.parameter_value }}</span>
          </div>
          <div class="d-flex flex-row pt-2 align-items-center justify-content-between">
            <span class="pr-4 good_card_params">Количество:</span>
            <b-spinbutton v-model="form.good_count" min="1" style="max-width: 200px"></b-spinbutton>
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
        good_count: 1,
      },
    }
  },
  computed: {
    getGoodByUuid() {
      return this.$store.getters['good/getGood'] || {}
    },
  },
  mounted() {
    this.$store.dispatch('good/fetchGood', this.$route.params.uuid).then(() => {
      console.warn('good', this.getGoodByUuid)
      return this.getGoodByUuid
    })
  },
}
</script>

<style scoped></style>
