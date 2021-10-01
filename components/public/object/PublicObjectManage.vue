<template>
  <div class="h-100">
    <div class="w-100 d-flex justify-content-center pt-4">
      <b-breadcrumb :items="getItems" style="background-color: white"> </b-breadcrumb>
    </div>
    <div>
      <div class="feedback_header py-5 px-4">Наши объекты</div>
      <div class="d-flex flex-wrap py-5 px-4">
        <div
          v-for="itemObject in getObjectItems"
          :key="itemObject.uuid"
          class="d-flex flex-column px-2 py-5 justify-content-between"
        >
          <div class="object_title" style="max-width: 490px">{{ itemObject.title }}</div>
          <div class="object_subtitle" v-if="itemObject.subtitle !== null">{{ itemObject.subtitle }}</div>
          <div><b-img :src="itemObject.image" style="max-width: 490px" class="w-100" /></div>
        </div>
      </div>
      <div class="d-flex justify-content-center pb-5">
        <a class="black_button d-inline-block px-5 py-3">Еще объекты</a>
      </div>
      <public-main-third-block />
    </div>
    <public-dashboard-footer />
  </div>
</template>

<script>
export default {
  name: 'PublicObjectManage',
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
