<template>
  <div class="h-100 w-100 overflow-auto">
    <div>
      <h2>{{ getTypeById.title }}</h2>
    </div>
    <img :src="getTypeById.src" alt="123" />
    <div>{{ getTypeById.text }}</div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    console.warn(params)
    const typeSlug = params.slug
    const typeId = params.id
    return { typeSlug, typeId }
  },
  mounted() {
    console.warn('currentitem', this.getTypeById)
  },
  computed: {
    getTypeById() {
      return this.$store.getters['type/getTypeById'](this.typeId)
    },
  },
}
</script>
