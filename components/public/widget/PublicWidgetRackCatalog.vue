<template>
  <div class="d-flex flex-wrap justify-content-center p-2">
    <div
      class="d-flex flex-column px-4 py-5 mx-2 my-4 border border-dark"
      v-for="itemRack in getTypeByCategoryUuid"
      :key="itemRack.uuid"
      style="max-width: 500px"
    >
      <div class="h4">{{ itemRack.title }}</div>
      <div class="d-flex py-4 flex-row h-100">
        <div class="flex-fill truncate" style="max-width: 300px">
          <p>{{ itemRack.description }}</p>
        </div>
        <div class="pl-2">
          <img :src="itemRack.image" style="max-width: 200px" />
        </div>
      </div>
      <div>
        <div>
          <a class="black_button d-inline-block py-4 px-5" @click="routeMore(itemRack)">Подробнее</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetRackCatalog',
  computed: {
    getTypeByCategoryUuid() {
      return this.$store.getters['type/getTypesByCategoryUuid'](this.$route.params.uuid)
    },
  },
  mounted() {
    console.warn('racksPageRoute', this.$route.params.uuid)
    this.fetchRacks()
  },
  methods: {
    fetchRacks() {
      this.$store.dispatch('type/fetchTypes').then(() => {})
    },
    routeMore(item) {
      if (!item.parent_uuid) {
        this.$router.push(`/category/${item.uuid}/${item.slug}`)
      }
      this.$router.push(`/rack/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
