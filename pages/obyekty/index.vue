<template>
  <div class="overflow-hidden w-100 h-100">
    <div class="w-100 d-flex justify-content-center mt-5">
      <h2>Контакты</h2>
    </div>
    <div class="w-100 d-flex justify-content-center mt-1">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="w-100 d-flex flex-wrap">
      <b-card-group class="w-100 h-100" columns v-for="item in getObjectItems">
        <b-card
          v-if="item.uuid !== null"
          :key="item.uuid"
          :title="item.title"
          :img-src="item.image"
          img-height="300"
          img-width="300"
        ></b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getItems() {
      return this.$store.getters['seo/getObyektyItems']
    },
    getObjectItems() {
      return this.$store.getters['object/getObjects']
    },
  },
}
</script>
