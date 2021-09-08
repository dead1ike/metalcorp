<template>
  <div class="d-flex flex-row my-2">
    <b-btn variant="corp" style="padding:0 10px 0 10px" @click="openAddGoodModal()">Добавить товар</b-btn>
    <b-form-input class="p-3 mx-2" placeholder="Поиск" v-model="filter.title"></b-form-input>
    <div>
      <b-dd variant="corp" :text="selectedCategory.title ? selectedCategory.title : 'Выберите основную категорию'">
        <div style="max-height: 300px" class="overflow-auto">
          <template v-for="item in getCategoryOptions">
            <b-dd-item @click="selectCategory(item.uuid)">{{ item.title }}</b-dd-item>
          </template>
        </div>
      </b-dd>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerGoodsControl',
  data() {
    return {
      filter: {
        title: '',
        category_uuid: null,
      },
    }
  },
  computed: {
    getCategoryOptions() {
      return this.$store.getters['category/getCategoryItems']
    },
    selectedCategory() {
      if (this.getCategoryOptions.find(category => category.uuid === this.filter.category_uuid)) {
        return this.getCategoryOptions.find(category => category.uuid === this.filter.category_uuid)
      }
      return {}
    },
  },
  mounted() {
    this.$store.dispatch('category/fetchCategory')
  },
  methods: {
    openAddGoodModal() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerGoodsAdd',
        modalStatus: true,
      })
    },
    selectCategory(categoryUuid) {
      this.filter.category_uuid = categoryUuid
    },
  },
}
</script>
