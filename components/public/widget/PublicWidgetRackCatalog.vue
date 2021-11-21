<template>
  <div class="d-flex flex-wrap justify-content-center public-widget-rack-catalog p-2">
    <div v-for="itemRack in getTypeByCategoryUuid" :key="itemRack.uuid" class="py-2 py-sm-3">
      <div class="d-flex flex-column border border-dark p-3 p-sm-4 mx-2 mx-sm-3 h-100 justify-content-between">
        <h5 class="m-0">{{ itemRack.title }}</h5>
        <div class="d-flex py-3 py-ms-4 flex-row">
          <div class="flex-fill truncate d-none d-md-block" style="max-width: 63%">
            <p class="designer_dolbaeb">{{ itemRack.description }}</p>
          </div>
          <div class="pl-2">
            <img :src="itemRack.image" class="" alt="" />
          </div>
        </div>
        <div>
          <div>
            <b-btn variant="dark" class="px-5 py-3 px-sm-7 py-sm-6" @click="routeMore(itemRack)"> Подробнее 22</b-btn>
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
      max-height: 80px;
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
        width: 100%;
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
