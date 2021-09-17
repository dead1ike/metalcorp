<template>
  <div class="d-block">
    <span class="catalog_header">Каталог</span>
    <div v-for="item in getCategories">
      <p class="catalog" v-if="item.uuid !== null" :key="item.uuid" @click="toCategory(item)">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetSidebarCatalog',
  computed: {
    getCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems'].filter(item => {
        return item.parent_uuid === null
      })
    },
  },
  mounted() {
    this.$store.dispatch('widget/fetchWidgetCategory')
  },
  methods: {
    toCategory(item) {
      this.$router.push(`/category/${item.uuid}`)
    },
  },
}
</script>
