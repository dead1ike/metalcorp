<template>
  <b-navbar type="dark" style="background: #5472f9">
    <b-navbar-brand to="/">
      <b-img src="~/static/logo.png" />
    </b-navbar-brand>

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
          >O нас</b-nav-item
        >
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
