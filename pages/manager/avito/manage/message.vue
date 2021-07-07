<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-table
        striped
        :items="getMessages"
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
        <b-btn variant="primary" class="py-2 m-1" @click="fetchMessages()">Получить сообщения</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  computed: {
    getMessages() {
      return this.$store.getters['manager/avito/message/getMessages']
    },
    getFields() {
      return [
        {
          key: 'avito_chat_id',
        },
        {
          key: 'author_id',
        },
        {
          key: 'content',
        },
        {
          key: 'direction',
        },
        {
          key: 'type',
        },
        {
          key: 'actions',
        },
      ]
    },
  },
  methods: {
    fetchMessages() {
      this.$store.dispatch('manager/avito/message/fetchMessages')
    },
    // fetchMessagesTemp() {
    //   this.$store.dispatch('manager/avito/message/fetchMessagesTemp')
    // },
  },
}
</script>

<style scoped></style>
