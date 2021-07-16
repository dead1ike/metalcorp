<template>
  <div class="w-100">
    <div v-if="getBasketLength === 0" class="d-flex flex-row">
      <b-icon class="mb-1 mr-1" icon="basket3"></b-icon>
      <label class="text-truncate">Позиций: {{ getBasketLength }}</label>
    </div>
    <div v-else class="d-flex flex-row">
      <b-icon class="mb-1 mr-1" icon="basket2"></b-icon>
      <label class="text-truncate">Позиций: {{ getBasketLength }}</label>
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
