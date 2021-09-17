<template>
  <div class="d-flex flex-wrap justify-content-around">
    <div
      class="p-3 m-2 d-flex flex-column justify-content-between"
      v-for="item in getCategories"
      v-if="item.uuid !== null"
      :key="item.uuid"
      style="max-width: 300px; max-height: 400px; border: black solid 1px"
    >
      <div>
        <h4 style="font-weight: 700">{{ item.title }}</h4>
      </div>
      <div class="align-self-center p-3" style="min-height: 200px">
        <img :src="item.image" alt="1" style="max-height: 200px" />
      </div>
      <div class="align-self-center">
        <b-btn variant="black" @click="toCategory(item)">Подробнее</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicWidgetCatalog',
  computed: {
    getCategories() {
      return this.$store.getters['widget/getWidgetCategoryItems'].filter(item => {
        return item.parent_uuid === null
      })
    },
  },
  mounted() {
    this.$store.dispatch('widget/fetchWidgetCategory')
  },
  methods: {
    toCategory(item) {
      this.$router.push(`/category/${item.uuid}`)
    },
  },
}
</script>
