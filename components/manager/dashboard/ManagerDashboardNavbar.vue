<template>
  <b-navbar toggleable="sm" type="dark" style="background: #5472f9">
    <b-navbar-brand to="/manager/manage"> Manager </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-double-up" variant="white"></b-icon>
        <b-icon v-else icon="chevron-double-down" variant="white"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/manager/user/manage" class="mt-2 h5"> Пользователи </b-nav-item>
        <b-nav-item to="/manager/rack/manage" class="mt-2 h5"> Стеллажи </b-nav-item>
        <b-nav-item to="/manager/avito/manage/chat" class="mt-2 h5"> Avito </b-nav-item>
        <b-nav-dropdown no-caret class="mt-2">
          <template #button-content>
            <b-avatar size="sm" class="mb-1" variant="warning"></b-avatar>
            <span class="h5 ml-1">{{ $auth.user.email }}</span>
          </template>
          <b-dd-item @click="logout">Выход</b-dd-item>
        </b-nav-dropdown>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'ManagerDashboardNavbar',
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push('/manager/login')
    },
  },
}
</script>

<style lang="scss">
//
</style>
