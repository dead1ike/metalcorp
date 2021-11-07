<template>
  <div class="d-flex flex-wrap justify-content-center p-2">
    <div
      v-for="itemRack in getTypeByCategoryUuid"
      :key="itemRack.uuid"
      class="d-flex flex-column px-4 py-5 mx-2 my-4 border border-dark"
      style="max-width: 32%"
    >
      <h5>{{ itemRack.title }}</h5>
      <div class="d-flex py-4 flex-row h-100">
        <div class="flex-fill truncate" style="max-width: 63%">
          <p class="designer_dolbaeb">{{ itemRack.description }}</p>
        </div>
        <div class="pl-2">
          <img :src="itemRack.image" class="w-100" alt="" />
        </div>
      </div>
      <div>
        <div>
          <b-btn class="d-inline-block py-4 px-8" variant="dark" @click="routeMore(itemRack)">Подробнее</b-btn>
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
