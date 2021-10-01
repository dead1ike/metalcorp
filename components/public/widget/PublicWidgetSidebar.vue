<template>
  <div class="sidebar d-none d-lg-flex flex-column pt-3 h-100">
    <div class="search ml-3 mb-4">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        class="search_icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.4421 15.3175L13.1785 11.6913C12.7378 11.2946 12.2664 11.1125 11.8856 11.1301C12.8921 9.95117 13.5 8.42166 13.5 6.75001C13.5 3.02207 10.478 0 6.75001 0C3.02211 0 0 3.02207 0 6.75001C0 10.478 3.02207 13.5 6.75001 13.5C8.42166 13.5 9.95117 12.8921 11.1301 11.8856C11.1125 12.2664 11.2946 12.7377 11.6913 13.1785L15.3175 17.4421C15.9384 18.132 16.9527 18.1901 17.5713 17.5714C18.1901 16.9527 18.132 15.9384 17.4421 15.3175ZM6.75001 11.25C4.26474 11.25 2.25 9.23525 2.25 6.75001C2.25 4.26474 4.26474 2.25 6.75001 2.25C9.23525 2.25 11.25 4.26474 11.25 6.75001C11.25 9.23525 9.23532 11.25 6.75001 11.25Z"
          fill="#787878"
        />
      </svg>
      <input placeholder="Поиск" />
    </div>

    <div class="overflow-auto h-100">
      <div class="pb-5 pt-4">
        <span class="catalog" @click="toCatalog()">Каталог</span>
      </div>
      <div v-for="item in getCategories">
        <p class="catalog" v-if="item.uuid !== null" :key="item.uuid" @click="toCategory(item)">{{ item.title }}</p>
      </div>
    </div>

    <div class="mb-2">
      <p class="px-4 sidebar_text1">+7 (906) 812-81-75</p>
      <p class="px-4 sidebar_text2">Ежедневно с 9:00 до 21:00</p>
    </div>
    <div class="sidebar_button my-5">
      <a class="white_button py-4 px-5 mx-3 text-truncate" @click="call()" style="max-width: 235px">Заказать звонок</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetSidebar',
  computed: {
    getCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems'].filter((item) => {
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
    toCatalog() {
      this.$router.push('/category')
    },
  },
}
</script>
