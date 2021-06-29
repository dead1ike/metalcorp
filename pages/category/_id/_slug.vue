<template>
  <div class="h-100 w-100 overflow-auto">
    <template v-for="item in getTypeByCategoryId">
      <div :key="item.id">
        <div>
          <h2>{{ item.title }}</h2>
        </div>
        <img :src="item.src" alt="123" />
        <div>{{ item.text }}</div>
        <b-btn variant="outline-corp" @click="description(item)">Заказать</b-btn>
      </div>
    </template>
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
    getTypeByCategoryId() {
      return this.$store.getters['type/getTypesByCategoryId'](this.categoryId)
    },
  },
  mounted() {
    console.warn(this.getTypeByCategoryId)
  },
  methods: {
    description(item) {
      this.$router.push(`/product/${item.id}/${item.slug}`)
    },
  },
}
</script>
