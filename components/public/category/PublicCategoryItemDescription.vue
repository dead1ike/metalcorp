<template>
  <b-modal
    id="public-category-item-description"
    size="md"
    body-class="px-5"
    centered
    title="Добавление стеллажа в заказ"
    lazy
    no-close-on-backdrop
    no-close-on-esc
  ></b-modal>
</template>

<script>
export default {
  name: 'PublicCategoryItemDescription',
  data() {
    return {
      form: {
        param_1: '',
        param_2: '',
        param_3: '',
        param_4: '',
        param_5: '',
        param_6: '',
        param_7: '',
        param_8: '',
        param_9: '',
      },
    }
  },
  mounted() {
    this.$bvModal.show('public-category-item-description')
  },
}
</script>
