<template>
  <div>
    <h2 class="font-weight-bold pt-10 pb-6 px-3">{{ getCategoryTitle }}</h2>

    <div class="d-flex flex-wrap justify-content-center p-2">
      <div
        v-for="itemCategory in getCategoryItems"
        :key="itemCategory.uuid"
        class="d-flex flex-column px-4 py-5 mx-2 my-4 border border-dark"
        style="max-width: 500px"
      >
        <div class="h4">{{ itemCategory.title }}</div>
        <div class="d-flex py-4 flex-row h-100">
          <div class="flex-fill truncate" style="max-width: 50%">
            <p>{{ itemCategory.description }}</p>
          </div>
          <div class="pl-2">
            <img :src="itemCategory.image" style="max-width: 50%" alt="" />
          </div>
        </div>
        <div>
          <template v-if="itemCategory.childs.length > 0">
            <div>
              <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="toCategoryPage(itemCategory)"
                >Подробнее 1</b-btn
              >
            </div>
          </template>
          <template v-else>
            <div>
              <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="toListPage(itemCategory)"
                >Подробнее 2</b-btn
              >
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
    getCategoryTitle() {
      return this.$store.getters['category/getCategoryTitle']
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
