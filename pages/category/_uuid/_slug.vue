<template>
  <div class="h-100 w-100 overflow-auto">
    <template v-for="item in getTypeByCategoryUuid">
      <b-card class="m-2" :key="item.uuid" :title="item.title" :img-src="item.image" img-left img-height="350px">
        <b-card-body>
          <div class="h-100 d-flex flex-column justify-content-end">
            <div>
              {{ item.description }}
            </div>
            <div class="align-self-end">
              <b-btn variant="corp" @click="description(item)">Заказать</b-btn>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </template>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    console.warn('categoryParams', params)
    const categorySlug = params.slug
    const categoryUuid = params.uuid
    return { categorySlug, categoryUuid }
  },
  computed: {
    getTypeByCategoryUuid() {
      return this.$store.getters['type/getTypesByCategoryUuid'](this.categoryUuid)
    },
  },
  created() {
    this.$store.dispatch('type/fetchTypes')
  },
  methods: {
    description(item) {
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
