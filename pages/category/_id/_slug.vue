<template>
  <div class="h-100 w-100 overflow-auto">
    <div>
      <h2>{{ getCategoryById.title }}</h2>
    </div>
    <img :src="getCategoryById.src" alt="123" />
    <div>{{ getCategoryById.text }}</div>
    <div class="d-flex flex-column align-items-center">
      <template v-for="item in getStellazhByCategory">
        <b-card
          :key="item.slug"
          class="text-center m-4 border-0 shadow"
          :img-src="item.img"
          :title="item.title"
          img-left
          img-width="300"
          img-height="300"
          style="max-width: 1024px"
          @click="description(item)"
        >
          <div class="d-flex h-100 flex-column">
            <div class="text-left">
              {{ item.text }}
            </div>
            <div class="align-self-end">
              <b-btn variant="outline-corp">Заказать</b-btn>
            </div>
          </div>
        </b-card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    console.warn(params)
    const categorySlug = params.slug
    const categoryId = params.id
    return { categorySlug, categoryId }
  },
  computed: {
    getCategoryById() {
      return this.$store.getters['category/getCategoryById'](this.categoryId)
    },
    getStellazhByCategory() {
      return this.$store.getters['category/getStellazhByCategory'](this.categoryId)
    },
  },
  mounted() {
    console.warn(this.getStellazhByCategory)
  },
  methods: {
    description(item) {
      this.$store.commit('setActiveModal', {
        modalName: 'publicCategoryItemDescription',
        modalStatus: true,
      })
    },
  },
}
</script>
