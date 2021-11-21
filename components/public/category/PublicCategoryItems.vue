<template>
  <div class="w-100">
    <h2 class="font-weight-bold pt-10 pb-6 px-3">{{ getCategoryTitle }}</h2>
    <div class="d-flex flex-wrap public-category-items">
      <div v-for="itemCategory in getCategoryItems" :key="itemCategory.uuid" class="py-3">
        <div class="d-flex flex-sm-column flex-row flex-wrap flex-sm-nowrap h-100 px-5 py-5 mx-3 border border-dark">
          <h5>{{ itemCategory.title }}</h5>
          <div class="d-flex py-4 flex-sm-row flex-column">
            <div class="flex-fill truncate d-xl-block d-none" style="max-width: 50%">
              <div class="designer_dolbaeb">{{ itemCategory.description }}</div>
            </div>
            <div class="pl-2" style="max-height: 170px">
              <img :src="itemCategory.image" class="w-100" style="max-height: 170px" alt="" />
            </div>
          </div>
          <div class="d-flex flex-column">
            <template v-if="itemCategory.childs.length > 0">
              <div class="d-flex flex-row w-100 justify-content-between">
                <div class="pt-6">
                  <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="toCategoryPage(itemCategory)"
                    >Подробнее
                  </b-btn>
                </div>
                <div class="p-4 text-center">
                  <h5 class="mt-4">от {{ itemCategory.from }} руб.</h5>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="d-flex flex-column-reverse flex-sm-row justify-content-between">
                <div class="pt-3">
                  <b-btn variant="dark" class="px-5 py-3 px-sm-7 py-sm-6" @click="toListPage(itemCategory)">
                    Подробнее
                  </b-btn>
                </div>
                <div class="w-100 align-self-center">
                  <h5 class="mt-3 text-center">от {{ itemCategory.from }} руб.</h5>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.public-category-items {
  & > div {
    width: 50%;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 575.98px) {
  //
}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .public-category-items {
    & > div {
      width: 33%;
      max-width: 800px;
    }
  }
}
</style>

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
    this.$root.$emit('fetch', 'Rack', 'Items')
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
