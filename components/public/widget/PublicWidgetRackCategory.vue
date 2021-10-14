<template>
  <div class="d-flex flex-column pb-5">
    <div class="d-flex flex-column flex-lg-row px-4">
      <div class="w-100">
        <b-img :src="getCategoryByUuid.image" />
      </div>
      <div class="d-flex flex-column w-100">
        <div class="rackpage_description_header"><h4>Описание:</h4></div>
        <div class="rackpage_description pt-3">
          <h5 class="font-weight-light">{{ getCategoryByUuid.description }}</h5>
        </div>
        <div class="pt-5 d-flex flex-row">
          <h4 class="rack_price pr-4">Стоимость:</h4>
          <h4 class="font-weight-light">от {{ getCategoryByUuid.from }} руб.</h4>
        </div>
        <div class="pt-5">
          <b-btn class="d-inline-block px-8 py-4" variant="dark" @click="openModal()">Заказать расчет</b-btn>
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
