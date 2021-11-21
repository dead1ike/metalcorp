<template>
  <div class="d-flex flex-column pb-5">
    <div class="d-flex flex-column flex-lg-row px-4">
      <div class="p-2 px-8 pr-10" style="min-width: 50%">
        <b-img :src="getCategoryByUuid.image" class="w-100" />
      </div>
      <div class="d-flex flex-column w-100 pl-lg-10 pt-6">
        <div class="rackpage_description_header"><h4>Описание:</h4></div>
        <div class="rackpage_description pt-3">
          <h5 class="font-weight-light text-wrap p-0">{{ getCategoryByUuid.description }}</h5>
        </div>
        <div class="d-flex flex-row mb-4 pt-10 pt-sm-10">
          <h4 class="rack_price pr-4">Стоимость:</h4>
          <h4 class="font-weight-light">от {{ getCategoryByUuid.from }} руб.</h4>
        </div>
        <div>
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
      return this.$store.getters['category/getCategoryByUuid'](this.$route.params.uuid) || {}
    },
  },
  mounted() {
    // this.$store.dispatch('category/fetchCategory')
  },
  methods: {
    openModal() {
      this.$router.push('/zvonok')
    },
  },
}
</script>
