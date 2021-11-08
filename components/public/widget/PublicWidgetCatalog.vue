<template>
  <div class="d-flex flex-wrap justify-content-center p-2 container-fluid" style="max-width: 2600px">
    <div
      v-for="itemCategory in getCategories"
      :key="itemCategory.uuid"
      class="d-flex flex-wrap p-2"
      style="max-width: 800px; min-width: 300px; width: 33.33%"
    >
      <div class="d-flex flex-column border border-dark p-4 h-100 w-100">
        <div class="h4">{{ itemCategory.title }}</div>
        <div class="d-flex py-4 flex-row h-100">
          <div class="d-none d-lg-flex flex-column" style="width: 50%">
            <template v-for="itemChild in itemCategory.childs.slice(0, 6)">
              <span :key="itemChild.uuid" class="d-block designer_dolbaeb">
                {{ itemChild.title }}
              </span>
            </template>
          </div>
          <div class="pl-2" style="width: 50%">
            <img :src="itemCategory.image" class="w-100" alt="" />
          </div>
        </div>
        <div>
          <b-btn variant="dark" @click="toCategory(itemCategory)">Подробнее PublicWidgetCatalog</b-btn>
        </div>
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
    this.$root.$emit('fetch', 'WidgetCategory', 'Items')
  },
  methods: {
    route(itemChild) {
      if (!itemChild.childs) {
        this.$router.push(`/category/${itemChild.uuid}/${itemChild.slug}`)
      }
      this.$router.push(`/category/${itemChild.uuid}`)
    },
    toCategory(item) {
      this.$store.commit('category/setCategoryTitle', item.title)
      if (item.uuid !== '19fea985-bb05-4ab6-8652-0a17691c18e9') {
        this.$router.push(`/category/${item.uuid}`)
      } else {
        this.$router.push(`/category/${item.uuid}/${item.slug}`)
        this.$store.dispatch('category/fetchAntonCategory')
      }
    },
  },
}
</script>
