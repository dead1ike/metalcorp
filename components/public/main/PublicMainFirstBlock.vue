<template>
  <div class="text-white d-flex flex-fill flex-column imagebar">
    <div>
      <h1 class="text-wrap font-weight-bold">Комплексное решение для вашего склада</h1>
    </div>
    <div class="text-wrap pt-6">
      <p class="main_subheader">
        Складские стеллажи от производителя с установкой под ключ<br />
        и гарантией 24 месяца
      </p>
    </div>
    <div class="pt-10">
      <b-btn class="main_header_button font-weight-normal" variant="light" @click="toCategory()"> Заказать </b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicMainFirstBlock',
  methods: {
    toCategory() {
      this.$router.push('/category')
    },
  },
}
</script>
