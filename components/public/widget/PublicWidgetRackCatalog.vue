<template>
  <div class="d-flex flex-wrap justify-content-center public-widget-rack-catalog p-2">
    <div v-for="itemRack in getTypeByCategoryUuid" :key="itemRack.uuid" class="py-2 py-md-3">
      <div class="d-flex flex-column border border-dark p-3 p-md-4 mx-2 mx-md-3 h-100 justify-content-between">
        <h5 class="m-0">{{ itemRack.title }}</h5>

        <div class="d-flex py-3 py-md-4 flex-row">
          <div class="flex-fill truncate d-none d-md-block" style="max-width: 63%">
            <p class="designer_dolbaeb">{{ itemRack.description }}</p>
          </div>

          <div class="pl-0 pl-md-2 w-100 text-center">
            <img :src="itemRack.image" alt="" />
          </div>
        </div>

        <div>
          <div>
            <b-btn variant="dark" class="px-5 py-3 px-md-7 py-md-6" @click="routeMore(itemRack)"> Подробнее 33 </b-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.public-widget-rack-catalog {
  & > div {
    width: 50%;

    img {
      max-height: 120px;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 575.98px) {
  //
}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .public-widget-rack-catalog {
    & > div {
      width: 33%;
      max-width: 800px;

      img {
        max-height: inherit;
        max-width: 100%;
      }
    }
  }
}
</style>

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
      this.$root.$emit('fetch', 'Rack', 'Items')
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
