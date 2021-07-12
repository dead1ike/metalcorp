<template>
  <div class="h-100 w-100 overflow-auto d-flex flex-column align-items-center">
    <div
      v-for="item in getTypeByCategoryUuid"
      :key="item.uuid"
      class="w-100 d-flex flex-row justify-content-center m-4 shadow p-4"
      style="max-width: 1024px"
    >
      <div class="w-100 pr-2 h-100">
        <b-img class="" :src="item.image" style="max-height: 300px" />
      </div>
      <div class="w-100 pl-2 d-flex flex-column">
        <div class="h2 my-4">
          {{ item.title }}
        </div>
        <div class="h-100 s align-self-stretch">
          {{ item.description }}
        </div>
        <div class="text-right">
          <b-btn variant="corp" class="mx-1 py-3 px-5" @click="description(item)">
            <h5 class="m-0">Заказать</h5>
          </b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
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
