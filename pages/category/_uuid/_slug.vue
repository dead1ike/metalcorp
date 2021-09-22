<template>
  <div class="d-flex">
    <div class="sidebar_goods d-block">
      <b-input-group>
        <b-form-input class="p-3 mx-2" placeholder="Поиск" v-model="filters.search"></b-form-input>
      </b-input-group>
      <div class="mx-2 my-4">
        <b-btn @click="clearFilter">Сбросить фильтр</b-btn>
      </div>

      <div
        class="m-2 d-flex flex-column"
        v-for="(goodParameters, indexGroup) in getGoodParamsGroup"
        :key="goodParameters.uuid"
      >
        <p>{{ getTitle(goodParameters) }}</p>
        <b-dd
          :text="
            getGoodParamTitle(indexGroup).parameter_value ? getGoodParamTitle(indexGroup).parameter_value : 'Выберите'
          "
        >
          <div v-for="goodParameter in goodParameters" :key="goodParameter.uuid">
            <b-dd-item @click="updateFilter(indexGroup, goodParameter)">
              {{ goodParameter.parameter_value }}
            </b-dd-item>
          </div>
        </b-dd>
      </div>
    </div>
    <div class="h-100 w-100 overflow-hidden d-flex flex-column align-items-center">
      <template v-if="getTypeByCategoryUuid.length > 0">
        <div
          v-for="item in getTypeByCategoryUuid"
          :key="item.uuid"
          class="w-100 d-flex flex-row justify-content-center overflow-auto m-4 shadow p-4"
          style="max-width: 1024px"
        >
          <div class="w-100 pr-2 h-100">
            <b-img class="" :src="item.image" style="max-height: 300px" />
          </div>
          <div class="w-100 pl-2 d-flex flex-column">
            <div class="h2 my-4">
              {{ item.title }}
            </div>
            <div class="h-100  align-self-stretch">
              {{ item.description }}
            </div>
            <div class="text-right">
              <b-btn variant="corp" class="mx-1 py-3 px-5" @click="description(item)">
                <h5 class="m-0">Заказать</h5>
              </b-btn>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="getGoodItems.length > 0">
        <div
          v-for="item in getGoodItems"
          :key="item.uuid"
          class="w-100 d-flex flex-row justify-content-center overflow-auto m-4 shadow p-4"
          style="max-width: 1024px"
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
              <b-btn variant="corp" class="mx-1 py-3 px-5" @click="order(item)">
                <h5 class="m-0">Заказать</h5>
              </b-btn>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="d-flex flex-row justify-content-around overflow-auto">
          <div class="p-5">
            <div class="my-3">
              <h3 class="text-center">{{ form.title }}</h3>
            </div>
            <div>
              <b-img :src="getCategoryByUuid.image"></b-img>
            </div>
          </div>
          <div class="p-5 h-100 d-flex flex-column">
            <div class="my-3">
              <h3 class="text-center">Описание:</h3>
              <h5>{{ getCategoryByUuid.description }}</h5>
            </div>
            <div class="my-3">
              <h4>Цена от {{ getCategoryByUuid.from }} рублей</h4>
            </div>
            <div>
              <b-btn variant="corp" @click="openModal">Заказать</b-btn>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const categorySlug = params.slug
    const categoryUuid = params.uuid
    return { categorySlug, categoryUuid }
  },
  data() {
    return {
      selectedParams: [],
      form: {
        title: '',
      },
      filters: {
        category_uuid: null,
        limit: 20,
        page: 1,
      },
    }
  },
  computed: {
    getFilter() {
      return this.$store.getters['good/getFilters']
    },
    getTypeByCategoryUuid() {
      return this.$store.getters['type/getTypesByCategoryUuid'](this.categoryUuid)
    },
    getCategoryByUuid() {
      return this.$store.getters['category/getCategoryByUuid'](this.categoryUuid) || {}
    },
    getGoodItems() {
      return this.$store.getters['good/getGoodItems']
    },
    getGoodParams() {
      return this.$store.getters['good/parameters/getGoodParameters']
    },
    getGoodParamsGroup() {
      const currentParams = _.uniqBy(this.getGoodParams, item => {
        return item.parameter_uuid + item.parameter_value
      })
      return _.groupBy(currentParams, 'parameter_uuid')
    },
    getSelectedGroupParams: {
      // геттер:
      get() {
        return this.selectedParams
      },
      // сеттер:
      set(payload) {
        // const selectedGroupParams = Object.assign({}, this.selectedGroupParams)
        // selectedGroupParams[payload.key] = payload.value
        // Object.assign(this.selectedGroupParams, selectedGroupParams)
        const index = this.selectedParams.findIndex(item => {
          return item.parameter_uuid === payload.value.parameter_uuid
        })
        if (index >= 0) {
          this.selectedParams.splice(index, 1, payload.value)
        } else {
          this.selectedParams.push(payload.value)
        }
      },
    },
  },
  watch: {
    getFilter: {
      handler() {
        this.fetchGoodsD()
      },
      deep: true,
    },
  },
  created() {
    this.fetchGoodsD = _.debounce(this.fetchGoods, 500)
  },
  mounted() {
    this.filters.category_uuid = this.categoryUuid
    this.$store.commit('good/parameters/setCategoryUuid', this.categoryUuid)
    this.$store.dispatch('category/fetchCategory').then(() => {
      this.form.title = this.getCategoryByUuid.title
    })
    this.$store.dispatch('type/fetchTypes').then(() => {})
    console.warn('categoryUuid', this.categoryUuid)
    this.$store.commit('good/setCategoryUuid', this.categoryUuid)
    this.$store.dispatch('good/parameters/fetchGoodParameters')
  },
  methods: {
    selectParameter(indexGroup, itemParameter) {
      this.getSelectedGroupParams = { key: indexGroup, value: itemParameter }
    },
    getGoodParamTitle(indexGroup) {
      return (
        this.getSelectedGroupParams.find(item => {
          return item.parameter_uuid === indexGroup
        }) || {}
      )
    },
    getTitle(parameters) {
      return _.head(parameters).title
    },
    fetchGoods() {
      this.$store.dispatch('good/fetchGoods').then(() => {
        console.warn('getGoods', this.getGoodItems)
      })
    },
    updateFilter(indexGroup, goodParameter) {
      this.getSelectedGroupParams = { key: indexGroup, value: goodParameter }
      this.filters[goodParameter.slug] = goodParameter.parameter_value
      this.$store.commit('good/setFilterItem', {
        slug: goodParameter.slug,
        value: goodParameter.parameter_value,
      })
    },
    clearFilter() {
      this.$store.commit('good/setClearFilter')
    },
    openModal() {
      this.$store.commit('category/setCurrentCategory', {
        category_title: this.form.title,
      })
      this.$store.commit('setActiveModal', {
        modalName: 'categoryModal',
        modalStatus: true,
      })
    },
    description(item) {
      if (!item.parent_uuid) {
        this.$router.push(`/category/${item.uuid}/${item.slug}`)
      }
      this.$router.push(`/rack/${item.uuid}/${item.slug}`)
    },
    order(item) {
      if (!item.parent_uuid) {
        this.$router.push(`/category/${item.uuid}/${item.slug}`)
      }
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
