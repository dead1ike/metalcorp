<template>
  <div class="p-4 shadow h-100 overflow-auto">
    <div class="w-100 mb-3 py-2">
      <b-btn variant="corp" block size="sm" @click="managerCategoryAdd()">Добавить категорию</b-btn>
    </div>
    <div class="w-100 h-100">
      <manager-rack-category-table />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  methods: {
    managerCategoryAdd() {
      this.$store.commit('setActiveModal', {
        modalName: 'managerCategoryAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
