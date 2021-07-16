<template>
  <div class="h-100 w-100">
    <div class="overflow-hidden h-100 w-100">
      <b-btn class="m-3" variant="corp" @click="addUser()">Добавить пользователя</b-btn>
      <b-table
        bordered
        hover
        :items="getUserItems"
        :fields="getUserFields"
        sticky-header="100%"
        head-variant="light"
        table-variant="outline-primary"
        no-border-collapse
      >
        <template #cell(actions)="data">
          <b-btn v-b-tooltip.top variant="link" title="Редактировать" @click="editUser(data.item)">
            <b-icon icon="pencil" style="color: green"></b-icon
          ></b-btn>
          <b-btn v-b-tooltip.top variant="link" title="Удалить">
            <b-icon icon="x" scale="1.5" style="color: red"></b-icon
          ></b-btn>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerUserTable',
  data() {
    return {}
  },
  computed: {
    getUserFields() {
      return this.$store.getters.getUserFields
    },
    getUserItems() {
      return this.$store.getters['manager/user/getUsers']
    },
  },
  mounted() {
    this.$store.dispatch('manager/user/fetchUsers').then(() => {
      console.warn(this.getUserItems)
    })
  },
  methods: {
    addUser() {
      this.$store.commit('setActiveModal', {
        modalName: 'userAdd',
        modalStatus: true,
      })
    },
    editUser(user) {
      this.$store.commit('manager/user/setEditUser', user)
      this.$store.commit('setActiveModal', {
        modalName: 'userAdd',
        modalStatus: true,
      })
    },
  },
}
</script>
