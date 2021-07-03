<template>
  <div class="h-100 w-100 overflow-auto">
    <div class="d-flex flex-column align-items-center w-100 py-4">
      <div
        v-for="item in getCategoryItems"
        :key="item.uuid"
        class="w-100 d-flex flex-row justify-content-between m-4 shadow p-4"
        style="max-width: 1280px"
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
            <b-btn variant="corp" class="mx-1 py-3 px-5" @click="toConfigurePage(item)">
              <h5 class="m-0">Заказать</h5>
            </b-btn>
          </div>
        </div>
      </div>
      <div
        v-for="item in getTypeItems"
        :key="item.uuid"
        class="w-100 d-flex flex-row justify-content-between m-4 shadow p-4"
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
  </div>
</template>

<script>
export default {
  name: 'PublicCategoryItems',
  data() {
    return {}
  },
  computed: {
    getCategoryItems() {
      return this.$store.getters['category/getCategoryItems'].filter((item) => {
        return item.parent_uuid === '6292d098-6445-40e8-86ed-1f5ed66931f1'
      })
    },
    getTypeItems() {
      return this.$store.getters['type/getTypes'].filter((item) => {
        return item.category_uuid === null
      })
    },
  },
  mounted() {
    this.$store.dispatch('category/fetchCategory')
    this.$store.dispatch('type/fetchTypes')
  },
  methods: {
    toConfigurePage(item) {
      this.$router.push(`/category/${item.uuid}/${item.slug}`)
    },
    description(item) {
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
