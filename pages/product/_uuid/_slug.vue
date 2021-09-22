<template>
  <div class="h-100 w-100 overflow-auto good_card d-flex">
    <div class="d-flex flex-column w-100">
      <div class="p-4 d-flex">
        <p class="good_card_title">{{ getGoodByUuid.title }}</p>
      </div>
      <div>
        <b-img :src="getGoodByUuid.image" thumbnail />
      </div>
    </div>
    <div class="d-flex flex-column w-100">
      <div class="d-flex h-100 w-100 flex-column p-4">
        <p class="pb-3 good_card_title">Описание</p>
        <p class="good_card_description">
          {{ getGoodByUuid.description }}
        </p>
      </div>
      <hr />
      <div class="d-flex h-100 w-100 flex-column p-4">
        <p class="pb-3 good_card_title">Параметры</p>
        <div class="d-flex flex-row justify-content-between" v-for="param in getGoodByUuid.good_parameters">
          <span class="good_card_description">{{ param.title }}</span>
          <span class="good_card_description">{{ param.parameter_value }}</span>
        </div>
        <div>
          <b-spinbutton id="popover" v-model="form.good_count" min="1" style="max-width: 200px"></b-spinbutton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const goodSlug = params.slug
    const goodUuid = params.uuid
    return { goodSlug, goodUuid }
  },
  data() {
    return {
      form: {
        good_count: 1,
      },
    }
  },
  computed: {
    getGoodByUuid() {
      return this.$store.getters['good/getGood'] || {}
    },
  },
  mounted() {
    this.$store.dispatch('good/fetchGood', this.goodUuid).then(() => {
      return this.getGoodByUuid
    })
    console.warn(this.getGoodByUuid)
  },
}
</script>
