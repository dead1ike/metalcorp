<template>
  <div class="d-flex">
    <div class="sidebar_goods d-block">
      <b-input-group>
        <b-form-input class="p-3 mx-2" placeholder="Поиск" v-model="filters.search"></b-form-input>
      </b-input-group>
      <div class="m-2 d-flex flex-column">
        <span class="h3">Вес,кг</span>
        <!--        <b-form-input placeholder="" v-model="filters.weight"></b-form-input>-->
        <b-dd>
          <template v-for="item in getWeightOptions">
            <b-dd-item
              v-if="item.uuid !== null"
              :key="item.uuid"
              @click="updateWeightFilter(item.parameter_slug, item.parameter_value)"
            >
              {{ item.parameter_value }}
            </b-dd-item>
          </template>
        </b-dd>
      </div>
      <div class="m-2">
        <span class="h3">Высота</span>
        <b-form-input placeholder="" v-model="filters.height"></b-form-input>
      </div>
      <div class="m-2">
        <span class="h3">Ширина</span>
        <b-form-input placeholder="" v-model="filters.width"></b-form-input>
      </div>
      <div class="m-2">
        <span class="h3">Глубина</span>
        <b-form-input placeholder="" v-model="filters.depth"></b-form-input>
      </div>
      <div class="m-2">
        <span class="h3">Цена</span>
        <b-form-input placeholder="" v-model="filters.price"></b-form-input>
      </div>
      <div class="m-2">
        <span class="h3">Покрытие</span>
        <b-form-input placeholder="" v-model="filters.cover"></b-form-input>
      </div>
      <div class="m-2">
        <span class="h3">Цвет</span>
        <b-form-input placeholder="" v-model="filters.color"></b-form-input>
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
      form: {
        title: '',
      },
      filters: {
        weight: '',
        height: '',
        width: '',
        depth: '',
        price: '',
        cover: '',
        color: '',
        search: '',
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
    getWeightOptions() {
      return this.getGoodParams.filter(item => {
        return item.parameter_uuid === 'e29ec165-6bcf-4dba-8fc8-a3eff0dfea9d'
      })
    },
    getHeightOptions() {
      return this.getGoodParams.filter(item => {
        return item.parameter_uuid === '9a025b06-5954-46c4-8056-1cc4e24b9b7f'
      })
    },
    getWidthOptions() {
      return this.getGoodParams.filter(item => {
        return item.parameter_uuid === '60093bd2-5b9d-4e08-9250-ceaf6aa6751d'
      })
    },
    getDepthOptions() {
      return this.getGoodParams.filter(item => {
        return item.parameter_uuid === '01882074-0050-4264-a6e0-83d444119694'
      })
    },
    getColorOptions() {
      return this.getGoodParams.filter(item => {
        return item.parameter_uuid === '01882074-0050-4264-a6e0-83d444119694'
      })
    },
  },
  watch: {
    'filters.weight'(newValue) {
      this.updateWeightFilter(newValue)
    },
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
    selectWeightParameter(value) {
      this.filters.weight = value
    },
    fetchGoods() {
      this.$store.dispatch('good/fetchGoods').then(() => {
        console.warn('getGoods', this.getGoodItems)
      })
    },
    updateWeightFilter(value, slug) {
      this.$store.commit('good/setFilterItem', {
        parameter_value: value,
        parameter_slug: slug,
      })
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
      this.$router.push(`/rack/${item.uuid}/${item.slug}`)
    },
    order(item) {
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
