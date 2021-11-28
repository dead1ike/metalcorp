<template>
  <div class="w-100">
    <h2 class="font-weight-bold pt-10 pb-6 px-5">{{ getCategoryTitle }}</h2>
    <div class="d-flex flex-wrap justify-content-center public-category-items p-2">
      <div v-for="itemCategory in getCategoryItems" :key="itemCategory.uuid" class="py-2 py-md-3">
        <div class="d-flex flex-column border border-dark p-3 p-md-4 mx-2 mx-md-3 h-100 justify-content-between">
          <h5>{{ itemCategory.title }}</h5>

          <div class="d-flex py-4 flex-column flex-md-row">
            <div class="d-none d-md-flex flex-fill flex-column truncate" style="max-width: 65%; min-width: 65%">
              <div class="designer_dolbaeb">{{ itemCategory.description }}</div>
            </div>

            <div class="pl-0 pl-md-2 w-100 text-center">
              <img :src="itemCategory.image" alt="" />
            </div>
          </div>

          <div class="d-flex flex-column-reverse flex-xl-row justify-content-between">
            <div class="pt-3">
              <nuxt-link class="btn btn-dark px-5 py-3 px-md-7 py-md-6" :to="getLink(itemCategory)">
                Подробнее
              </nuxt-link>
            </div>
            <div class="w-100 align-self-center" :class="{ 'd-none': itemCategory.childs.length }">
              <h5 class="mt-3 text-center">от {{ itemCategory.from }} руб.</h5>
            </div>
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

    img {
      max-height: 120px;
      max-width: 100%;
    }
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

      img {
        max-height: 170px;
      }
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
    getParamUuid() {
      return this.$route.params.uuid
    },
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
        if (this.getParamUuid && this.getParamUuid !== 'search') {
          this.$root.$emit('fetch', 'Category', 'Item', this.getParamUuid)
        }
      },
      deep: true,
    },
  },
  created() {
    if (this.getParamUuid) {
      if (this.getParamUuid !== 'search') {
        this.$root.$emit('fetch', 'Category', 'Item', this.getParamUuid)
      }
      this.$store.commit('category/setCurrentCategoryUuid', this.getParamUuid)
    } else {
      this.$store.commit('category/setCurrentCategoryUuid', 'parent')
    }
    this.$root.$emit('fetch', 'Category', 'Items')
    this.$root.$emit('fetch', 'Rack', 'Items')
  },
  methods: {
    changeLimit(value) {
      this.$store.commit('category/setLimitCategory', value)
    },
    changePage() {
      this.$store.commit('category/setCurrentPageCategory', this.pagination.currentPage)
    },
    getLink(itemCategory) {
      if (itemCategory.childs.length) {
        return `/category/${itemCategory.uuid}`
      } else {
        return `/category/${itemCategory.uuid}/${itemCategory.slug}`
      }
    },
  },
}
</script>
