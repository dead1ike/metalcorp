<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div
      class="p-3 m-2 d-flex flex-column justify-content-around"
      v-for="item in getCategories"
      v-if="item.uuid !== null"
      :key="item.uuid"
      style="width: 450px; height: 500px; border: black solid 1px"
    >
      <div class="pt-4 pl-2">
        <h4 style="font-weight: 700">{{ item.title }}</h4>
      </div>
      <div class="d-flex flex-row">
        <div class="w-100">
          <p class="catalog_text">Название стеллажа</p>
          <p class="catalog_text">Название стеллажа</p>
          <p class="catalog_text">Название стеллажа</p>
          <p class="catalog_text">Название стеллажа</p>
          <p class="catalog_text">Название стеллажа</p>
          <p class="catalog_text">Название стеллажа</p>
          <p class="catalog_text">Название стеллажа</p>
          <p class="catalog_text">Название стеллажа</p>
        </div>
        <div class="align-self-start" style="min-height: 200px">
          <img :src="item.image" alt="1" style="max-height: 200px" />
        </div>
      </div>
      <div class="align-self-start">
        <a class="black_button py-4 px-5" @click="toCategory(item)">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetCatalog',
  computed: {
    getCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems'].filter(item => {
        return item.parent_uuid === null
      })
    },
    getSubCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems']
    },
  },
  mounted() {
    console.warn(this.getCategories)
    this.$store.dispatch('widget/fetchWidgetCategory')
  },
  methods: {
    toCategory(item) {
      this.$router.push(`/category/${item.uuid}`)
    },
  },
}
</script>
