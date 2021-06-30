<template>
  <div class="h-100 w-100 overflow-auto">
    <div class="d-flex flex-column align-items-center">
      <template v-for="item in getCategoryItems">
        <b-card :key="item.id" class="text-center m-4 border-0 shadow" :img-src="item.src" :title="item.title" img-left>
          <div class="d-flex flex-column justify-content-between">
            <div class="text-left">{{ item.text }}</div>
            <div class="align-self-end">
              <b-btn variant="outline-corp" class="mx-1" @click="toConfigurePage(item)">Подробнее</b-btn>
            </div>
          </div>
        </b-card>
      </template>
      <template v-for="item in getTypeItems">
        <b-card
          :key="item.id"
          class="text-center m-4 border-0 shadow"
          :img-src="item.src"
          :title="item.title"
          img-left
          style="max-width: 1024px"
        >
          <div class="d-flex flex-column justify-content-between">
            <div class="text-left">
              {{ item.text }}
            </div>
            <div class="align-self-end">
              <b-btn variant="outline-corp" class="mx-1" @click="description(item)">Заказать</b-btn>
            </div>
          </div>
        </b-card>
      </template>
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
        return item.parent_id === '1'
      })
    },
    getTypeItems() {
      return this.$store.getters['type/getTypes'].filter((item) => {
        return item.category_id === null
      })
    },
  },
  methods: {
    toConfigurePage(item) {
      this.$router.push(`/category/${item.id}/${item.slug}`)
    },
    description(item) {
      this.$router.push(`/product/${item.id}/${item.slug}`)
    },
  },
}
</script>
