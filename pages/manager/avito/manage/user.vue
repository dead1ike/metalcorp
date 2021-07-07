<template>
  <div class="d-flex flex-column overflow-hidden">
    <div class="overflow-hidden h-100">
      <b-table
        striped
        :items="getUsers"
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
        <b-btn variant="primary" class="py-2 m-1" @click="fetchUsers()">Получить пользователей</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'manager',
  computed: {
    getUsers() {
      return this.$store.getters['manager/avito/user/getUsers']
    },
    getFields() {
      return [
        {
          key: 'name',
        },
        {
          key: 'avatar',
        },
        {
          key: 'actions',
        },
      ]
    },
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch('manager/avito/user/fetchUsers')
    },
    // fetchUsersTemp() {
    //   this.$store.dispatch('manager/avito/user/fetchUsersTemp')
    // },
  },
}
</script>

<style scoped></style>
