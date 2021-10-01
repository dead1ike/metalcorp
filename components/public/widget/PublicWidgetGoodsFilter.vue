<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetGoodsFilter',
  data() {
    return {
      selectedParams: [],
      filters: {
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
    this.$store.dispatch('good/parameters/fetchGoodParameters')
  },
  methods: {
    clearFilter() {
      this.$store.commit('good/setClearFilter')
    },
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
    updateFilter(indexGroup, goodParameter) {
      this.getSelectedGroupParams = { key: indexGroup, value: goodParameter }
      this.filters[goodParameter.slug] = goodParameter.parameter_value
      this.$store.commit('good/setFilterItem', {
        slug: goodParameter.slug,
        value: goodParameter.parameter_value,
      })
      this.fetchGoods()
    },
  },
}
</script>
