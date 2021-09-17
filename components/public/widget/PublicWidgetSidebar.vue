<template>
  <div class="sidebar d-none d-lg-block">
    <span>Каталог</span>
    <div v-for="item in getCategories">
      <p class="catalog" v-if="item.uuid !== null" :key="item.uuid" @click="toCategory(item)">{{ item.title }}</p>
    </div>
    <div style="margin-top: 150px">
      <p class="h5 px-3" style="color:white">+7 (906) 812-81-75</p>
      <p class="h6 px-3" style="color:white">Ежедневно с 9:00 до 21:00</p>
      <b-btn class="mx-3 mt-4" variant="light" style="font-weight: 700" @click="call()">Заказать звонок</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetSidebar',
  computed: {
    getCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems'].filter(item => {
        return item.parent_uuid === null
      })
    },
  },
  mounted() {
    this.$store.dispatch('widget/fetchWidgetCategory')
  },
  methods: {
    call() {
      this.$store.commit('setActiveModal', {
        modalName: 'dimensionModal',
        modalStatus: true,
      })
    },
    toCategory(item) {
      this.$router.push(`/category/${item.uuid}`)
    },
  },
}
</script>
