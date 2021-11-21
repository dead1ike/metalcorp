<template>
  <div>
    <div class="d-flex flex-wrap justify-content-center public-widget-goods-catalog p-2">
      <div v-for="itemGoods in getGoodItems" :key="itemGoods.uuid" class="py-2 py-sm-3">
        <div class="d-flex flex-column border border-dark p-3 p-sm-4 mx-2 mx-sm-3 h-100 justify-content-between">
          <h5>{{ itemGoods.title }}</h5>
          <div class="d-flex py-4 flex-row h-100">
            <div class="flex-fill truncate" style="max-width: 50%">
              <p class="designer_dolbaeb">{{ itemGoods.description }}</p>
            </div>
            <div class="pl-2">
              <img :src="itemGoods.image" class="w-100" alt="" />
            </div>
          </div>
          <div>
            <div>
              <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="routeMore(itemGoods)"
                >Подробнее PublicWidgetGoodsCatalog
              </b-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="getGoodItems.length !== 0" class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination
          v-model="pagination.currentPage"
          pills
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

<style lang="scss">
.public-widget-goods-catalog {
  & > div {
    width: 50%;

    img {
      max-height: 80px;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 575.98px) {
  //
}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .public-widget-goods-catalog {
    & > div {
      width: 33%;
      max-width: 800px;

      img {
        max-height: inherit;
        width: 100%;
      }
    }
  }
}
</style>

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
    getParamUuid() {
      return this.$route.params.uuid
    },
    getSearchTitle() {
      return this.$route.query.title
    },
    getFilters() {
      return this.$store.getters['good/getGoodFilter']
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
        this.$root.$emit('fetch', 'Goods', 'Items')
      }
    },
    getSearchTitle() {
      this.updatePage()
    },
    getParamUuid() {
      console.warn('watch getParamUuid,', this.getParamUuid)
      this.updatePage()
    },
    getFilters: {
      handler() {
        this.$root.$emit('fetch', 'Goods', 'Items')
      },
      deep: true,
    },
  },
  mounted() {
    console.warn('mounted')
    // this.$store.commit('good/setCategoryUuid', this.$route.params.uuid)
    this.updatePage()
  },
  created() {
    //
  },
  methods: {
    updateFilter(fieldName, value) {
      this.$store.commit('good/setFilter', {
        fieldName,
        value,
      })
    },
    updatePage() {
      if (this.getParamUuid === 'search') {
        console.warn(this.getParamUuid, 'if')
        this.updateFilter('search', this.getSearchTitle)
        this.updateFilter('page', 1)
      } else {
        console.warn(this.getParamUuid, 'else')
        this.updateFilter('search', '')
        this.updateFilter('category_uuid', this.getParamUuid)
        // this.$store.commit('good/setCategoryUuid', this.getParamUuid)
      }
      this.$root.$emit('fetch', 'Goods', 'Items')
    },
    changeLimit(value) {
      this.$store.commit('good/setLimitGoods', value)
      this.$root.$emit('fetch', 'Goods', 'Items')
    },
    changePage() {
      this.$store.commit('good/setCurrentPageGoods', this.pagination.currentPage)
    },
    // fetchGoods() {
    //   this.$store.dispatch('good/fetchGoods').then(() => {})
    // },
    routeMore(item) {
      if (!item.parent_uuid) {
        this.$router.push(`/category/${item.uuid}`)
      } else {
        this.$router.push(`/category/${item.uuid}/${item.slug}`)
      }
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
