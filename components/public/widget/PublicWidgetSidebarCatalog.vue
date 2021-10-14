<template>
  <div class="d-block">
    <h5 class="catalog_header m-0 designer_dolbaeb pb-4">Каталог</h5>
    <div v-for="item in getCategories" :key="item.uuid">
      <h5 v-if="item.uuid !== null" class="catalog m-0 designer_dolbaeb py-3" @click="toCategory(item)">
        {{ item.title }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetSidebarCatalog',
  computed: {
    getCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems'].filter((item) => {
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
