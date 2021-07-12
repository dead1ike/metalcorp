<template>
  <div class="overflow-hidden w-100 h-100">
    <div class="w-100 d-flex justify-content-center mt-5">
      <h2>Объекты</h2>
    </div>
    <div class="w-100 d-flex justify-content-center mt-1">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div class="w-100 d-flex flex-wrap justify-content-center">
      <b-card-group v-for="item in getObjectItems" :key="item.uuid" class="m-2">
        <b-card
          v-if="item.uuid !== null"
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
