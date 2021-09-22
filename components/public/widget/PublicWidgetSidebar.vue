<template>
  <div class="sidebar d-none d-lg-block">
    <span class="pb-5">Каталог</span>
    <div v-for="item in getCategories">
      <p class="catalog" v-if="item.uuid !== null" :key="item.uuid" @click="toCategory(item)">{{ item.title }}</p>
    </div>
    <div style="margin-top: 150px">
      <p class="px-3" style="color:white;font-size: 20px;line-height: 24px">+7 (906) 812-81-75</p>
      <p class="px-3" style="color:white;font-size: 16px;line-height: 19px">Ежедневно с 9:00 до 21:00</p>
      <b-btn
        class="mx-3 mt-4"
        size="sm"
        variant="light"
        style="font-weight: 500;font-size: 22px;padding: 20px 30px"
        @click="call()"
        >Заказать звонок</b-btn
      >
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
