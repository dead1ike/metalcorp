<template>
  <div>
    <h2>Avito Manage</h2>
    <div v-for="itemChat in getChats" :key="itemChat.id" class="p-2 m-2 shadow">
      <div v-for="itemUser in itemChat.users" :key="itemChat.id + ' ' + itemUser.id">
        {{ itemUser.name }}
        <br />
        <b-img :src="itemUser.public_user_profile.avatar.default" thumbnail></b-img>
        <hr />
      </div>
      <div>{{ itemChat.last_message.content.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  head: {
    title: 'Avito Manager',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
  },
  // head() {
  //   return {
  //     title: 'Avito Manager',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'Home page description',
  //       },
  //     ],
  //   }
  // },
  computed: {
    getChats() {
      return this.$store.getters['manager/avito/chats/getChats']
    },
  },
  mounted() {
    this.fetchChats()
  },
  methods: {
    fetchChats() {
      this.$store.dispatch('manager/avito/chats/fetchChats')
    },
  },
}
</script>

<style scoped></style>
