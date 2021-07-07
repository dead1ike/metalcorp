<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-table
        striped
        :items="getItems"
        :fields="getFields"
        head-variant="light"
        sticky-header="100%"
        bordered
        hover
        no-border-collapse
      ></b-table>
    </div>
    <div class="overflow-hidden text-center d-flex flex-row bg-light">
      <div class="flex-fill d-flex justify-content-center">
        <b-pagination pills :total-rows="100" class="p-2 m-1 "></b-pagination>
      </div>
      <div>
        <b-btn variant="primary" class="py-2 m-1" @click="fetchItems()">Получить объявления</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  computed: {
    getItems() {
      return this.$store.getters['manager/avito/item/getItems']
    },
    getFields() {
      return [
        {
          key: 'title',
        },
        {
          key: 'user_id',
        },
        {
          key: 'status_id',
        },
        {
          key: 'price_string',
        },
        {
          key: 'actions',
        },
      ]
    },
  },
  methods: {
    fetchItems() {
      this.$store.dispatch('manager/avito/item/fetchItems')
    },
    // fetchItemsTemp() {
    //   this.$store.dispatch('manager/avito/item/fetchItemsTemp')
    // },
  },
}
</script>

<style scoped></style>
