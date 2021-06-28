<template>
  <b-navbar type="dark" style="background: #5472f9">
    <b-navbar-brand to="/">
      <img
        src="https://thumb.tildacdn.com/tild6536-3538-4137-b034-373731613935/-/resize/130x/-/format/webp/__2_2.png"
      />
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
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
