<template>
  <div
    class="d-flex flex-wrap justify-content-center p-3 category_block"
    :class="{ category_even: getCategoryItems.length % 2 !== 0 }"
  >
    <div v-for="itemCategory in getCategoryItems" :key="itemCategory.uuid" class="d-flex flex-column p-2">
      <div class="d-flex flex-column border border-dark p-4 h-100" style="max-width: 400px">
        <div class="h4">{{ itemCategory.title }}</div>
        <div class="d-flex py-4 flex-row h-100">
          <div class="flex-fill truncate" style="max-width: 300px">
            <p>{{ itemCategory.description }}</p>
          </div>
          <div class="pl-2">
            <img :src="itemCategory.image" style="max-width: 200px" alt="" />
          </div>
        </div>
        <div>
          <template v-if="itemCategory.childs.length > 0">
            <div>
              <a class="black_button d-inline-block py-4 px-5" @click="toCategoryPage(itemCategory)">Подробнее 1</a>
            </div>
          </template>
          <template v-else>
            <div>
              <a class="black_button d-inline-block py-4 px-5" @click="toListPage(itemCategory)">Подробнее 2</a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicCategoryItems',
  asyncData({ params }) {
    const categoryUuid = params.uuid
    const categorySlug = params.slug
    return { categorySlug, categoryUuid }
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        perPage: 0,
      },
    }
  },
  computed: {
    getCategoryPagination() {
      return this.$store.getters['category/getCategoryPagination'] || {}
    },
    getCategoryItems() {
      return this.$store.getters['category/getCategoryItems']
    },
    getCurrentCategoryUuid() {
      return this.$store.getters['category/getCurrentCategoryUuid']
    },
  },
  watch: {
    'pagination.currentPage'(newValue) {
      if (newValue) this.changePage()
    },
    getFilter: {
      handler() {
        this.fetchCategoryD()
      },
      deep: true,
    },
  },
  mounted() {
    if (this.$route.params.uuid) {
      this.$store.commit('category/setCurrentCategoryUuid', this.$route.params.uuid)
    } else {
      this.$store.commit('category/setCurrentCategoryUuid', 'parent')
    }
    this.fetchCategory()
    this.$store.dispatch('type/fetchTypes')
  },
  created() {
    this.fetchCategoryD = _.debounce(this.fetchCategory, 500)
  },
  methods: {
    changeLimit(value) {
      this.$store.commit('category/setLimitCategory', value)
    },
    changePage() {
      this.$store.commit('category/setCurrentPageCategory', this.pagination.currentPage)
    },
    toCategoryPage(item) {
      this.$router.push(`/category/${item.uuid}`)
    },
    toListPage(item) {
      this.$router.push(`/category/${item.uuid}/${item.slug}`)
    },
    fetchCategory() {
      this.$store.dispatch('category/fetchCategory')
    },
  },
}
</script>
