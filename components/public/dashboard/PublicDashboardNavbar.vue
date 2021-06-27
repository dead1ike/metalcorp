<template>
  <b-navbar type="dark" variant="dark" class="sticky-top d-inline-flex">
    <b-navbar-brand to="/">
      <h3>MetalCorp</h3>
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/catalog/manage" class="m-0 px-3 py-4 m-0 font-weight-bolder text-truncate">Каталог</b-nav-item>
        <b-nav-item to="/offer/manage" class="m-0 px-3 py-4 m-0 font-weight-bolder text-truncate">
          Оформить заказ
        </b-nav-item>
        <b-nav-item to="/about/" class="m-0 px-3 py-4 m-0 font-weight-bolder text-truncate">О нас</b-nav-item>
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
