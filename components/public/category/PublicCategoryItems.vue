<template>
  <div class="h-100 w-100 overflow-auto">
    <div class="d-flex flex-column align-items-center w-100 py-4">
      <div
        v-for="item in getCategoryItems"
        :key="item.uuid"
        class="w-100 d-flex flex-row justify-content-between m-4 shadow p-4"
        style="max-width: 1280px"
      >
        <div class="w-100 pr-2 h-100">
          <b-img class="" :src="item.image" style="max-height: 300px" />
        </div>
        <div class="w-100 pl-2 d-flex flex-column">
          <div class="h2 my-4">
            {{ item.title }}
          </div>
          <div class="h-100 s align-self-stretch">
            {{ item.description }}
          </div>
          <div class="text-right">
            <template>
              <b-btn variant="corp" class="mx-1 py-3 px-5" @click="toRacksPage(item)">
                <h5 class="m-0">Заказать</h5>
              </b-btn>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination
          pills
          v-model="pagination.currentPage"
          :total-rows="getCategoryPagination.total"
          :per-page="pagination.perPage"
          class="p-2 m-1"
        ></b-pagination>
      </div>
      <div class="mt-3 mr-3 d-flex flex-row">
        <strong class="mx-1">Кол-во</strong>
        <span class="mx-1" style="cursor: pointer" @click="changeLimit(5)">5</span>
        <span class="mx-1" style="cursor: pointer" @click="changeLimit(10)">10</span>
        <span class="mx-1" style="cursor: pointer" @click="changeLimit(50)">50</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const categoryUuid = params.uuid
    const categorySlug = params.slug
    return { categorySlug, categoryUuid }
  },
  name: 'PublicCategoryItems',
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
    toRacksPage(item) {
      this.$router.push(`/category/${item.uuid}/${item.slug}`)
    },
    fetchCategory() {
      this.$store.dispatch('category/fetchCategory')
    },
  },
}
</script>
