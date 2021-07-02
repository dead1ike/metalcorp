<template>
  <b-navbar toggleable="sm" type="dark" style="background: #5472f9">
    <b-navbar-brand to="/">
      <b-img src="~/static/logo.png" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-double-up" variant="white"></b-icon>
        <b-icon v-else icon="chevron-double-down" variant="white"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/category" class="m-0 px-3 py-4 m-0 font-weight-bolder text-truncate">Каталог</b-nav-item>
        <b-nav-item to="/offer" class="m-0 px-3 py-4 m-0 font-weight-bolder text-truncate">
          <public-offer-basket />
        </b-nav-item>
        <b-nav-item
          href="https://metalcorp.org/"
          target="_blank"
          class="m-0 px-3 py-4 m-0 font-weight-bolder text-truncate"
        >
          O нас
        </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'PublicDashboardNavbar',
}
</script>
