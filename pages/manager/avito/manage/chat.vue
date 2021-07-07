<template>
  <div>
    <h2>Avito Manage Chat</h2>
    <b-btn variant="primary" @click="fetchChatsTemp()">Получить чаты с Avito</b-btn>
    <hr />
    <pre>{{ getChats }}</pre>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  computed: {
    getChats() {
      return this.$store.getters['manager/avito/chat/getChats']
    },
  },
  methods: {
    fetchChats() {
      this.$store.dispatch('manager/avito/chat/fetchChats')
    },
    fetchChatsTemp() {
      this.$store.dispatch('manager/avito/chat/fetchChatsTemp')
    },
  },
}
</script>

<style scoped></style>
