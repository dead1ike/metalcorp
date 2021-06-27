<template>
  <b-navbar type="dark" variant="dark" class="sticky-top d-inline-flex">
    <b-navbar-brand to="/">
      <h3 class="my-4 font-weight-bolder" link-classes="text-black-50">MetalCorp</h3>
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item> </b-nav-item>
        <b-nav-item> </b-nav-item>
        <b-nav-item> </b-nav-item>
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
