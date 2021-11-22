<template>
  <div class="d-flex flex-wrap justify-content-center container-fluid public-widget-catalog p-2">
    <div v-for="itemCategory in getCategories" :key="itemCategory.uuid" class="py-2 py-md-3">
      <div class="d-flex flex-column border border-dark p-3 p-md-4 mx-2 mx-md-3 h-100 justify-content-between">
        <div class="d-flex flex-row-reverse flex-md-column h-100 pb-3 pb-md-0">
          <div class="h4 m-0 w-100">{{ itemCategory.title }}</div>

          <div class="d-flex py-0 py-md-4 flex-row h-100">
            <div class="d-none d-md-flex flex-fill flex-column" style="max-width: 65%; min-width: 65%">
              <template v-for="itemChild in itemCategory.childs.slice(0, 6)">
                <span :key="itemChild.uuid" class="d-block designer_dolbaeb">
                  {{ itemChild.title }}
                </span>
              </template>
            </div>

            <div class="px-3 px-md-2 w-100 text-center align-self-center">
              <img :src="itemCategory.image" class="w-100" alt="" />
            </div>
          </div>
        </div>

        <div>
          <b-btn variant="dark" class="px-5 py-3 px-md-7 py-md-6" @click="toCategory(itemCategory)"> Подробнее </b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.public-widget-catalog {
  max-width: 2600px;

  & > div {
    width: 50%;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 575.98px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .public-widget-catalog {
    & > div {
      width: 33%;
      max-width: 800px;
    }
  }
}
</style>

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
