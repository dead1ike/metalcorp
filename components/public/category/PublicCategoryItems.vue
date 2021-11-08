<template>
  <div class="w-100">
    <h2 class="font-weight-bold pt-10 pb-6 px-3">{{ getCategoryTitle }}</h2>
    <div class="d-flex flex-wrap flex-column flex-sm-row p-2">
      <div
        v-for="itemCategory in getCategoryItems"
        :key="itemCategory.uuid"
        class="d-flex flex-sm-column flex-row flex-wrap flex-sm-nowrap px-5 py-5 m-3 border border-dark"
        style="width: 32%; min-width: 450px; max-width: 800px"
      >
        <h5>{{ itemCategory.title }}</h5>
        <div class="d-flex py-4 flex-sm-row flex-column h-100">
          <div class="flex-fill truncate d-sm-block d-none" style="max-width: 50%">
            <div class="designer_dolbaeb">{{ itemCategory.description }}</div>
          </div>
          <div class="pl-2">
            <img :src="itemCategory.image" class="w-100" />
          </div>
        </div>
        <div class="d-flex flex-column">
          <template v-if="itemCategory.childs.length > 0">
            <div class="d-flex flex-row w-100 justify-content-between">
              <div>
                <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="toCategoryPage(itemCategory)"
                  >Подробнее</b-btn
                >
              </div>
              <div class="mt-4 mr-5">
                <h5>от {{ itemCategory.from }} руб.</h5>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="d-flex flex-row justify-content-between">
              <div class="pt-6">
                <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="toListPage(itemCategory)"
                  >Подробнее</b-btn
                >
              </div>
              <div class="p-6 mt-4 pl-10 ml-10">
                <span class="h4">от {{ itemCategory.from }} руб.</span>
              </div>
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
        this.$root.$emit('fetch', 'Category', 'Items')
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
    this.$root.$emit('fetch', 'Category', 'Items')
    this.$store.dispatch('type/fetchTypes')
  },
  created() {
    //
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
  },
}
</script>
