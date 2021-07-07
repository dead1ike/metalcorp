<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-table
        striped
        :items="getChats"
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
        <b-btn variant="primary" class="py-2 m-1" @click="fetchChats()">Получить чаты</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  computed: {
    getChats() {
      return this.$store.getters['manager/avito/chat/getChats']
    },
    getFields() {
      return [
        {
          key: 'avito_user_id',
        },
        {
          key: 'avito_item_id',
        },
        {
          key: 'last_message_content.text',
        },
        {
          key: 'last_message_created_at',
        },
        {
          key: 'actions',
        },
      ]
    },
  },
  methods: {
    fetchChats() {
      this.$store.dispatch('manager/avito/chat/fetchChats')
    },
    // fetchChatsTemp() {
    //   this.$store.dispatch('manager/avito/chat/fetchChatsTemp')
    // },
  },
}
</script>

<style scoped></style>
