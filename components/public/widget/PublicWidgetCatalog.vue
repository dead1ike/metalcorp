<template>
  <div class="d-flex flex-wrap justify-content-center p-2 container-fluid" style="max-width: 1500px">
    <div
      class="d-flex flex-column px-4 py-4 m-2 border border-dark"
      v-for="itemCategory in getCategories"
      :key="itemCategory.uuid"
      style="max-width: 400px"
    >
      <div class="h4">{{ itemCategory.title }}</div>
      <div class="d-flex py-4 flex-row h-100">
        <div class="d-none d-lg-flex flex-column" style="width: 50%">
          <template v-for="itemChild in itemCategory.childs.slice(0, 3)">
            <span :key="itemChild.uuid" class="d-block sub-catalog py-1">
              {{ itemChild.title }}
            </span>
          </template>
        </div>
        <div class="pl-2" style="width: 50%">
          <img :src="itemCategory.image" class="w-100" />
        </div>
      </div>
      <div>
        <a @click="toCategory(itemCategory)" class="black_button d-inline-block py-4 px-5">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetCatalog',
  computed: {
    getCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems'].filter((item) => {
        return item.parent_uuid === null
      })
    },
  },
  mounted() {
    this.$store.dispatch('widget/fetchWidgetCategory')
    console.warn(this.getCategories)
  },
  methods: {
    route(itemChild) {
      if (!itemChild.childs) {
        this.$router.push(`/category/${itemChild.uuid}/${itemChild.slug}`)
      }
      this.$router.push(`/category/${itemChild.uuid}`)
    },
    toCategory(item) {
      this.$router.push(`/category/${item.uuid}`)
    },
  },
}
</script>
