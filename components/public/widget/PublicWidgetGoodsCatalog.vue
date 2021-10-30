<template>
  <div>
    <div class="d-flex flex-wrap justify-content-center p-2">
      <div
        v-for="itemGoods in getGoodItems"
        :key="itemGoods.uuid"
        class="d-flex flex-column px-4 py-5 mx-2 my-4 border border-dark"
        style="max-width: 500px"
      >
        <div class="h4">{{ itemGoods.title }}</div>
        <div class="d-flex py-4 flex-row h-100">
          <div class="flex-fill truncate" style="max-width: 300px">
            <p>{{ itemGoods.description }}</p>
          </div>
          <div class="pl-2">
            <img :src="itemGoods.image" style="max-width: 180px" alt="" />
          </div>
        </div>
        <div>
          <div>
            <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="routeMore(itemGoods)">Подробнее</b-btn>
          </div>
        </div>
      </div>
    </div>
    <div v-if="getGoodItems.length !== 0" class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination
          pills
          v-model="pagination.currentPage"
          :total-rows="getGoodsPagination.total"
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
  name: 'PublicWidgetGoodsCatalog',
  data() {
    return {
      pagination: {
        currentPage: 1,
        perPage: 0,
      },
    }
  },
  computed: {
    getFilters() {
      this.$store.getters['good/getGoodFilter']
    },
    getGoodsPagination() {
      return this.$store.getters['good/getGoodsPagination'] || {}
    },
    getGoodItems() {
      return this.$store.getters['good/getGoodItems']
    },
  },
  watch: {
    'pagination.currentPage'(newValue) {
      if (newValue) {
        this.changePage()
        this.fetchGoods()
      }
    },
    getFilters: {
      handler() {
        this.fetchGoodsD()
      },
      deep: true,
    },
  },
  mounted() {
    this.$store.commit('good/setCategoryUuid', this.$route.params.uuid)
    this.fetchGoods()
  },
  created() {
    this.fetchGoodsD = _.debounce(this.fetchGoods, 500)
  },
  methods: {
    changeLimit(value) {
      this.$store.commit('good/setLimitGoods', value)
      this.fetchGoods()
    },
    changePage() {
      this.$store.commit('good/setCurrentPageGoods', this.pagination.currentPage)
    },
    fetchGoods() {
      this.$store.dispatch('good/fetchGoods').then(() => {})
    },
    routeMore(item) {
      if (!item.parent_uuid) {
        this.$router.push(`/category/${item.uuid}`)
      }
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
