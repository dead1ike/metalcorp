<template>
  <b-modal id="dimension-modal"></b-modal>
</template>

<script>
export default {
  name: 'PublicDimensionModal',
  mounted() {
    this.$bvModal.show('dimension-modal')
  },
}
</script>
