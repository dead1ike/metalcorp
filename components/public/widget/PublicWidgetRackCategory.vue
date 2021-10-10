<template>
  <div class="d-flex flex-column pb-5">
    <div class="rackpage_header px-4 py-5">{{ getCategoryByUuid.title }}</div>
    <div class="d-flex flex-column flex-lg-row px-4">
      <div class="w-100">
        <b-img :src="getCategoryByUuid.image" />
      </div>
      <div class="d-flex flex-column w-100">
        <div class="rackpage_description_header">Описание:</div>
        <div class="rackpage_description pt-3">{{ getCategoryByUuid.description }}</div>
        <div class="pt-5">
          <span class="rack_price pr-4">Стоимость:</span>
          <span class="rack_price_2">от {{ getCategoryByUuid.from }} руб.</span>
        </div>
        <div class="pt-5">
          <a class="black_button d-inline-block px-5 py-3" @click="openModal()">Заказать расчет</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetRackCategory',
  data() {
    return {
      form: {
        title: '',
      },
    }
  },
  computed: {
    getCategoryByUuid() {
      return this.$store.getters['category/getCategoryByUuid'](this.$route.params.uuid)
    },
  },
  mounted() {
    this.$store.dispatch('category/fetchCategory').then(() => {
      this.form.title = this.getCategoryByUuid.title
    })
  },
  methods: {
    openModal() {
      this.$store.commit('category/setCurrentCategory', {
        category_title: this.form.title,
      })
      this.$store.commit('setActiveModal', {
        modalName: 'categoryModal',
        modalStatus: true,
      })
    },
  },
}
</script>
