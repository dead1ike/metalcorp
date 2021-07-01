<template>
  <div>
    <div v-if="getBasketLength === 0">
      <b-icon icon="basket3"></b-icon>
      <label>Позиций: {{ getBasketLength }}</label>
    </div>
    <div v-else>
      <b-icon icon="basket2"></b-icon>
      <label>Позиций: {{ getBasketLength }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicOfferBasket',
  computed: {
    getBasketLength() {
      return this.$store.getters['type/getBasketProduct'].length
    },
  },
}
</script>
