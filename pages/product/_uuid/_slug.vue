<template>
  <div class="h-100 w-100 overflow-auto">
    asd
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const goodSlug = params.slug
    const goodUuid = params.uuid
    return { goodSlug, goodUuid }
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
