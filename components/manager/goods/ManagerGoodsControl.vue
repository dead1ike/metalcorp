<template>
  <div class="d-flex flex-row my-2">
    <b-btn variant="corp" style="padding:0 10px 0 10px" @click="openAddGoodModal()">Добавить товар</b-btn>
    <div class="mx-2">
      <b-dd v-b-popover.hover.top="'Категории'" variant="outline-corp" toggle-class="live-edit" no-caret>
        <template #button-content>
          <span>Фильтр</span>
        </template>
        <div style="max-height: 300px; min-width: 400px" class="overflow-auto w-100">
          <template v-for="item in getOptions">
            <b-dd-form v-if="item.uuid !== null" :key="item.uuid">
              <b-btn variant="outline-corp" class="b-check live-edit pr-1">
                <b-icon v-if="checkSelectItem('category_uuid', item.uuid)" icon="record-circle" variant="corp"></b-icon>
                <b-icon
                  v-else
                  icon="circle"
                  variant="corp"
                  @click="updateFilterItem('category_uuid', item.uuid)"
                ></b-icon>
              </b-btn>
              {{ item.title }}
            </b-dd-form>
          </template>
        </div>
      </b-dd>
    </div>
    <b-input-group>
      <b-form-input class="p-3 mx-2" placeholder="Поиск" v-model="filter.search"></b-form-input>
      <b-input-group-append>
        <b-btn variant="corp">Поиск</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: 'ManagerGoodsControl',
  data() {
    return {
      filter: {
        search: '',
      },
    }
  },
  computed: {
    getFilter() {
      return this.$store.getters['manager/goods/goods/getGoodsFilter']
    },
    getOptions() {
      const all = [
        {
          title: 'Все',
          category_uuid: null,
        },
      ]
      return all.concat(this.getCategoryOptions)
    },
    getCategoryOptions() {
      return this.$store.getters['category/getCategoryItems'].filter(item => {
        return item.parent_uuid !== '09f947c3-23bf-42b1-9aee-34b12422d34e' && item.parent_uuid !== null
      })
    },
  },
  watch: {
    'filter.search'(newValue) {
      this.updateFilterItem('search', newValue)
    },
    getFilter: {
      handler() {
        this.fetchGoodsD()
      },
      deep: true,
    },
  },
  mounted() {
    _.merge(this.filter, this.getFilter)
    this.$store.dispatch('category/fetchCategory')
    console.warn('category', this.getCategoryOptions)
  },
  created() {
    this.fetchGoodsD = _.debounce(this.fetchGoods, 500)
  },
  methods: {
    checkSelectItem(fieldName, value) {
      return this.$store.getters['manager/goods/goods/getGoodsFilter'][fieldName] === value
    },
    updateFilterItem(fieldName, value) {
      console.warn('fieldName', fieldName)
      console.warn('value', value)
      this.$store.commit('manager/goods/goods/setFilterItem', {
        fieldName,
        value,
      })
    },
    openAddGoodModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerGoodsAdd',
        modalStatus: true,
      })
    },
    fetchGoods() {
      this.$store.dispatch('manager/goods/goods/fetchGoods')
    },
  },
}
</script>
