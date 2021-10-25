<template>
  <div class="d-flex flex-wrap justify-content-center p-2">
    <div
      v-for="itemGoods in getGoodItems"
      :key="itemGoods.uuid"
      class="d-flex flex-column px-4 py-5 mx-2 my-4 border border-dark"
      style="max-width: 500px"
    >
      <div class="h4">{{ itemGoods.title }}</div>
      <div class="d-flex py-4 flex-row h-100">
        <div class="flex-fill truncate" style="max-width: 300px">
          <p>{{ itemGoods.description }}</p>
        </div>
        <div class="pl-2">
          <img :src="itemGoods.image" style="max-width: 180px" alt="" />
        </div>
      </div>
      <div>
        <div>
          <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="routeMore(itemGoods)">Подробнее</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetGoodsCatalog',
  computed: {
    getGoodItems() {
      return this.$store.getters['good/getGoodItems']
    },
  },
  mounted() {
    this.$store.commit('good/setCategoryUuid', this.$route.params.uuid)
    this.fetchGoods()
  },
  methods: {
    fetchGoods() {
      this.$store.dispatch('good/fetchGoods').then(() => {
        // console.warn('goodCatalogPage', this.getGoodItems)
      })
    },
    routeMore(item) {
      if (!item.parent_uuid) {
        this.$router.push(`/category/${item.uuid}`)
      }
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
