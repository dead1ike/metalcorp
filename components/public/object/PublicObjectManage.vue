<template>
  <div class="h-100 w-100">
    <h2 class="font-weight-bold pt-10 pb-6 pl-5">Наши объекты</h2>
    <div class="py-5 px-2 d-flex flex-wrap justify-content-center object_manage">
      <div v-for="itemObject in getObjectItems" :key="itemObject.uuid" class="d-flex px-1 py-5 flex-column">
        <div class="object_title h-100">
          <h5 class="px-5" style="height: 4.2rem">{{ itemObject.title }}</h5>
        </div>
        <div v-if="itemObject.subtitle !== null" class="object_subtitle">
          <h5>{{ itemObject.subtitle }}</h5>
        </div>
        <div>
          <b-img :src="itemObject.image" class="w-100 h-100 truncate" style="max-width: 490px; max-height: 100%" />
        </div>
      </div>
    </div>
    <!--      <div class="d-flex justify-content-center pb-5">-->
    <!--        <b-btn class="d-inline-block px-5 py-3" variant="dark">Еще объекты</b-btn>-->
    <!--      </div>-->
    <div class="pb-10">
      <public-main-third-block />
    </div>
    <div class="pt-10">
      <public-dashboard-footer />
    </div>
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
  methods: {
    // getPic(pic) {
    //   return require('.assets/img/' + pic)
    // },
  },
}
</script>

<style lang="scss">
.object_manage {
  & > div {
    width: 50%;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 575.98px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .object_manage {
    & > div {
      width: 33%;
      max-width: 490px;
    }
  }
}
</style>
