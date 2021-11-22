<template>
  <div class="sidebar d-none d-lg-flex flex-column p-5 h-100">
    <div class="search">
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
      <input v-model="filter.title" placeholder="Поиск" @keyup.enter="searchSidebar()" />
    </div>

    <div class="overflow-auto h-100">
      <div class="pt-9 pb-8">
        <nuxt-link class="button_catalog font-weight-bold" :to="`/category`">Каталог</nuxt-link>
      </div>
      <div v-for="item in getCategories" :key="item.uuid" class="pb-7 text-truncate">
        <b-link
          v-if="item.uuid === '19fea985-bb05-4ab6-8652-0a17691c18e9'"
          class="categories"
          @click="toCategoryNoParent(item)"
        >
          {{ item.title }}
        </b-link>
        <b-link
          v-else-if="item.uuid === '1a5e9b78-9fba-40f7-9afe-3097a08743fd'"
          class="categories"
          @click="toCategoryNoParent(item)"
        >
          {{ item.title }}
        </b-link>
        <b-link
          v-else-if="item.uuid === '21669b5f-6d07-40ca-a88e-6e70e96de3c0'"
          class="categories"
          @click="toCategoryNoParent(item)"
        >
          {{ item.title }}
        </b-link>
        <nuxt-link v-else class="categories" :to="`/category/${item.uuid}`">{{ item.title }} </nuxt-link>
      </div>
    </div>

    <div class="pb-9 d-flex flex-column">
      <span class="font-weight-normal">+7 (906) 812-81-75</span>
      <span class="operating_mode font-weight-normal">Ежедневно с 9:00 до 21:00</span>
    </div>
    <div class="sidebar_button">
      <b-btn class="d-inline-block px-8 py-4" variant="light" @click="toCallback">Заказать звонок</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetSidebar',
  data() {
    return {
      filter: {
        title: '',
      },
    }
  },
  computed: {
    getCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems'].filter((item) => {
        return item.parent_uuid === null
      })
    },
  },
  mounted() {
    this.$root.$emit('fetch', 'WidgetCategory', 'Items')
    this.$root.$emit('fetch', 'Category', 'Items')
  },
  methods: {
    toCategoryNoParent(item) {
      this.$store.commit('category/setCurrentCategoryUuid', 'parent')
      this.$router.push({ path: `/category/${item.uuid}/${item.slug}` })
    },
    toCategory(item) {
      this.$router.push(`/category/${item.uuid}`)
    },
    toCatalog() {
      this.$router.push('/category')
    },
    toCallback() {
      this.$router.push('/zvonok')
    },
    searchSidebar() {
      this.$router.push({ path: '/category/search', query: { title: this.filter.title } })
    },
  },
}
</script>
