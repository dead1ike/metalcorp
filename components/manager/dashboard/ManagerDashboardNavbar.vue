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
        <b-nav-item to="/manager/rack/manage" class=""> Стеллажи </b-nav-item>
        <b-nav-item to="/manager/avito/manage/chat" class=""> Avito </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'ManagerDashboardNavbar',
}
</script>

<style lang="scss">
//
</style>
