<template>
  <div class="h-100 w-100 overflow-auto d-flex flex-column align-items-center">
    <template v-if="getTypeByCategoryUuid.length > 0">
      <div
        v-for="item in getTypeByCategoryUuid"
        :key="item.uuid"
        class="w-100 d-flex flex-row justify-content-center m-4 shadow p-4"
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
    </template>
    <template v-else>
      <div class="d-flex flex-row justify-content-around">
        <div class="p-5">
          <div class="my-3">
            <h3 class="text-center">{{ form.title }}</h3>
          </div>
          <div>
            <b-img :src="getCategoryByUuid.image"></b-img>
          </div>
        </div>
        <div class="p-5 h-100 d-flex flex-column">
          <div class="my-3">
            <h3 class="text-center">Описание:</h3>
            <h5>{{ getCategoryByUuid.description }}</h5>
          </div>
          <div class="my-3">
            <h4>Цена от {{ getCategoryByUuid.from }} рублей</h4>
          </div>
          <div>
            <b-btn variant="corp" @click="openModal">Заказать</b-btn>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const categorySlug = params.slug
    const categoryUuid = params.uuid
    return { categorySlug, categoryUuid }
  },
  data() {
    return {
      form: {
        title: '',
      },
    }
  },
  computed: {
    getTypeByCategoryUuid() {
      return this.$store.getters['type/getTypesByCategoryUuid'](this.categoryUuid)
    },
    getCategoryByUuid() {
      return this.$store.getters['category/getCategoryByUuid'](this.categoryUuid) || {}
    },
  },
  created() {
    this.$store.dispatch('category/fetchCategory').then(() => {
      this.form.title = this.getCategoryByUuid.title
    })
    this.$store.dispatch('type/fetchTypes')
    console.warn(this.getCategoryByUuid)
  },
  methods: {
    openModal() {
      this.$store.commit('category/setCurrentCategory', {
        category_title: this.form.title,
      })
      this.$store.commit('setActiveModal', {
        modalName: 'categoryModal',
        modalStatus: true,
      })
    },
    description(item) {
      this.$router.push(`/product/${item.uuid}/${item.slug}`)
    },
  },
}
</script>
