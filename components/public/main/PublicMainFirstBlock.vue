<template>
  <div class="text-white d-flex flex-fill flex-column banner justify-content-center">
    <div>
      <p class="banner_header text-wrap">
        Комплексное решение<br />
        для вашего склада
      </p>
    </div>
    <div class="banner_text text-wrap">
      <p>
        Складские стеллажи от производителя с установкой под ключ<br />
        и гарантией 24 месяца
      </p>
    </div>
    <div class="banner_button">
      <a class="white_button py-4 px-5 widget_pointer" @click="toCategory()" style="max-width: 156px">Заказать</a>
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
